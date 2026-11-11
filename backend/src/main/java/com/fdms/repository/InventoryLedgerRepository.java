package com.fdms.repository;

import com.fdms.entity.InventoryLedger;
import com.fdms.enums.FertType;
import jakarta.persistence.LockModeType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Lock;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface InventoryLedgerRepository extends JpaRepository<InventoryLedger, Long> {

    List<InventoryLedger> findByOutlet_OutletId(Long outletId);

    List<InventoryLedger> findByDealer_DealerIdAndOutletIsNull(Long dealerId);

    Optional<InventoryLedger> findByOutlet_OutletIdAndFertilizerType(Long outletId, FertType fertilizerType);

    // ACID Pessimistic Write Lock as specified in SRS Section 6 to prevent overselling race condition
    @Lock(LockModeType.PESSIMISTIC_WRITE)
    @Query("SELECT l FROM InventoryLedger l WHERE l.outlet.outletId = :outletId AND l.fertilizerType = :type")
    Optional<InventoryLedger> findByOutletAndTypeWithLock(@Param("outletId") Long outletId, @Param("type") FertType type);
}
