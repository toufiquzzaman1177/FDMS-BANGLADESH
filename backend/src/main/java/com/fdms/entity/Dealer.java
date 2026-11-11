package com.fdms.entity;

import com.fdms.enums.DealerStatus;
import jakarta.persistence.*;
import lombok.*;

import java.math.BigDecimal;

@Entity
@Table(name = "dealers")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Dealer {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "dealer_id")
    private Long dealerId;

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id", referencedColumnName = "user_id", nullable = false)
    private User user;

    @Column(name = "trade_license", unique = true, nullable = false, length = 50)
    private String tradeLicense;

    @Column(name = "union_id", nullable = false)
    private Integer unionId;

    @Column(name = "unit_number", nullable = false)
    private Integer unitNumber; // 1, 2, or 3

    @Column(name = "main_godown", nullable = false, length = 150)
    private String mainGodown;

    @Column(name = "security_dep", nullable = false, precision = 12, scale = 2)
    private BigDecimal securityDep;

    @Enumerated(EnumType.STRING)
    @Column(name = "status", nullable = false, length = 20)
    private DealerStatus status;
}
