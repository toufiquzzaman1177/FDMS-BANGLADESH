package com.fdms.service;

import com.fdms.dto.PosSaleRequest;
import com.fdms.entity.*;
import com.fdms.enums.FertType;
import com.fdms.repository.*;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Isolation;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigDecimal;
import java.math.RoundingMode;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class PosService {

    private final FarmerRepository farmerRepository;
    private final RetailOutletRepository outletRepository;
    private final InventoryLedgerRepository ledgerRepository;
    private final SalesTransactionRepository transactionRepository;

    // Standard commercial international market prices vs subsidized Bangladesh MRP
    // Urea World Price approx ৳ 65/kg vs Gov MRP ৳ 27/kg => Subsidy ৳ 38/kg
    private static final BigDecimal UREA_SUBSIDY_PER_KG = new BigDecimal("38.00");
    private static final BigDecimal TSP_SUBSIDY_PER_KG  = new BigDecimal("45.00");
    private static final BigDecimal DAP_SUBSIDY_PER_KG  = new BigDecimal("40.00");
    private static final BigDecimal MOP_SUBSIDY_PER_KG  = new BigDecimal("35.00");

    @Transactional(isolation = Isolation.SERIALIZABLE)
    public SalesTransaction processSale(PosSaleRequest request) {
        Farmer farmer = farmerRepository.findById(request.getFarmerId())
                .orElseThrow(() -> new IllegalArgumentException("Invalid Farmer ID"));

        RetailOutlet outlet = outletRepository.findById(request.getOutletId())
                .orElseThrow(() -> new IllegalArgumentException("Invalid Outlet ID"));

        BigDecimal totalMrp = BigDecimal.ZERO;
        BigDecimal totalSubsidy = BigDecimal.ZERO;

        SalesTransaction transaction = SalesTransaction.builder()
                .invoiceNumber("REC-" + System.currentTimeMillis())
                .farmer(farmer)
                .outlet(outlet)
                .paymentMethod(request.getPaymentMethod())
                .qrToken(UUID.randomUUID().toString())
                .totalPriceMrp(BigDecimal.ZERO)
                .govtSubsidy(BigDecimal.ZERO)
                .build();

        for (PosSaleRequest.Item item : request.getItems()) {
            FertType type = item.getFertilizerType();
            int bags = item.getQuantityBags();
            if (bags <= 0) {
                throw new IllegalArgumentException("Quantity must be greater than zero");
            }

            BigDecimal kg = BigDecimal.valueOf(bags * type.getBagSizeKg());

            // 1. Quota Ceiling Check
            double maxAllowedKg = farmer.getLandDecimals().doubleValue() * farmer.getCurrentCrop().getRateForFertilizer(type);
            if (kg.doubleValue() > maxAllowedKg) {
                throw new IllegalStateException("Requested " + kg + " kg of " + type + " exceeds allowable crop quota (" + maxAllowedKg + " kg)");
            }

            // 2. ACID Pessimistic Lock on Inventory
            InventoryLedger ledger = ledgerRepository.findByOutletAndTypeWithLock(outlet.getOutletId(), type)
                    .orElseThrow(() -> new IllegalStateException("No stock ledger initialized for outlet and " + type));

            if (ledger.getClosingBags() < bags) {
                throw new IllegalStateException("Insufficient stock! Available: " + ledger.getClosingBags() + " bags, Requested: " + bags + " bags.");
            }

            // Deduct inventory
            ledger.setSoldBags(ledger.getSoldBags() + bags);
            ledger.setClosingBags(ledger.getClosingBags() - bags);
            ledgerRepository.save(ledger);

            // 3. Financial Breakdown
            BigDecimal itemMrp = BigDecimal.valueOf(type.getMrpPerBag() * bags).setScale(2, RoundingMode.HALF_UP);
            BigDecimal subsidyRate = getSubsidyPerKg(type);
            BigDecimal itemSubsidy = subsidyRate.multiply(kg).setScale(2, RoundingMode.HALF_UP);

            SalesItem salesItem = SalesItem.builder()
                    .transaction(transaction)
                    .fertilizerType(type)
                    .quantityBags(bags)
                    .quantityKg(kg)
                    .unitPriceMrp(BigDecimal.valueOf(type.getMrpPerKg()))
                    .itemTotalMrp(itemMrp)
                    .subsidyAmount(itemSubsidy)
                    .build();

            transaction.getItems().add(salesItem);
            totalMrp = totalMrp.add(itemMrp);
            totalSubsidy = totalSubsidy.add(itemSubsidy);
        }

        transaction.setTotalPriceMrp(totalMrp);
        transaction.setGovtSubsidy(totalSubsidy);

        return transactionRepository.save(transaction);
    }

    private BigDecimal getSubsidyPerKg(FertType type) {
        return switch (type) {
            case UREA -> UREA_SUBSIDY_PER_KG;
            case TSP -> TSP_SUBSIDY_PER_KG;
            case DAP -> DAP_SUBSIDY_PER_KG;
            case MOP -> MOP_SUBSIDY_PER_KG;
        };
    }
}
