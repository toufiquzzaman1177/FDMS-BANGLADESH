package com.fdms.repository;

import com.fdms.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;
import java.util.UUID;

@Repository
public interface UserRepository extends JpaRepository<User, UUID> {
    Optional<User> findByPhone(String phone);
    Optional<User> findByNidNo(String nidNo);
    boolean existsByPhone(String phone);
    boolean existsByNidNo(String nidNo);
}
