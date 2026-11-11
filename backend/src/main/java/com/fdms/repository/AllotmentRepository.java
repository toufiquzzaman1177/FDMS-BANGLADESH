package com.fdms.repository;

import com.fdms.entity.AllotmentDO;
import com.fdms.enums.DoStatus;
import com.fdms.enums.FertType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface AllotmentRepository extends JpaRepository<AllotmentDO, Long> {
    Optional<AllotmentDO> findByDoNumber(String doNumber);
    List<AllotmentDO> findByDealer_DealerId(Long dealerId);
    List<AllotmentDO> findByStatus(DoStatus status);
    List<AllotmentDO> findByFertilizerType(FertType fertilizerType);
}
