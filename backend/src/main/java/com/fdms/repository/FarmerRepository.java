package com.fdms.repository;

import com.fdms.entity.Farmer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface FarmerRepository extends JpaRepository<Farmer, Long> {
    Optional<Farmer> findByNidNumber(String nidNumber);
    Optional<Farmer> findByKrishakCardNo(String krishakCardNo);
    Optional<Farmer> findByNidNumberOrKrishakCardNo(String nidNumber, String krishakCardNo);
    boolean existsByNidNumber(String nidNumber);
    boolean existsByKrishakCardNo(String krishakCardNo);
}
