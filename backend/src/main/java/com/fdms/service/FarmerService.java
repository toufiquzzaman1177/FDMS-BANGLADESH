package com.fdms.service;

import com.fdms.dto.FarmerVerificationResponse;
import com.fdms.entity.Farmer;
import com.fdms.enums.FertType;
import com.fdms.repository.FarmerRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.HashMap;
import java.util.Map;

@Service
@RequiredArgsConstructor
public class FarmerService {

    private final FarmerRepository farmerRepository;

    @Transactional(readOnly = true)
    public FarmerVerificationResponse verifyFarmer(String identifier) {
        Farmer farmer = farmerRepository.findByNidNumber(identifier)
                .or(() -> farmerRepository.findByKrishakCardNo(identifier))
                .orElseThrow(() -> new IllegalArgumentException("Farmer not found with NID or Krishak Card: " + identifier));

        return buildVerificationResponse(farmer);
    }

    public FarmerVerificationResponse buildVerificationResponse(Farmer farmer) {
        double decimals = farmer.getLandDecimals().doubleValue();
        Map<String, Double> quotaCeilings = new HashMap<>();

        for (FertType fertType : FertType.values()) {
            double rate = farmer.getCurrentCrop().getRateForFertilizer(fertType);
            double maxAllowedKg = Math.round(decimals * rate * 100.0) / 100.0;
            quotaCeilings.put(fertType.name(), maxAllowedKg);
        }

        // For MVP, remaining quota initially equals total quota ceiling
        return FarmerVerificationResponse.builder()
                .farmerId(farmer.getFarmerId())
                .nidNumber(farmer.getNidNumber())
                .krishakCardNo(farmer.getKrishakCardNo())
                .fullName(farmer.getFullName())
                .phoneNumber(farmer.getPhoneNumber())
                .landDecimals(farmer.getLandDecimals())
                .currentCrop(farmer.getCurrentCrop())
                .quotaCeilingKg(quotaCeilings)
                .remainingQuotaKg(new HashMap<>(quotaCeilings))
                .build();
    }
}
