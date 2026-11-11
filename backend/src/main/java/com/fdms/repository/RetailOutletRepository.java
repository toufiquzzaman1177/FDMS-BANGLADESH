package com.fdms.repository;

import com.fdms.entity.RetailOutlet;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Repository
public interface RetailOutletRepository extends JpaRepository<RetailOutlet, Long> {
    List<RetailOutlet> findByDealer_DealerId(Long dealerId);
    Optional<RetailOutlet> findByOperator_UserId(UUID operatorId);
    List<RetailOutlet> findByWardNumber(Integer wardNumber);
}
