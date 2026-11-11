package com.fdms.repository;

import com.fdms.entity.SalesTransaction;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface SalesTransactionRepository extends JpaRepository<SalesTransaction, Long> {
    Optional<SalesTransaction> findByInvoiceNumber(String invoiceNumber);
    Optional<SalesTransaction> findByQrToken(String qrToken);
    List<SalesTransaction> findByFarmer_FarmerId(Long farmerId);
    List<SalesTransaction> findByOutlet_OutletId(Long outletId);
}
