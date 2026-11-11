package com.fdms.entity;

import com.fdms.enums.DoStatus;
import com.fdms.enums.FertType;
import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;

import java.math.BigDecimal;
import java.time.LocalDateTime;

@Entity
@Table(name = "allotments_do")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class AllotmentDO {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "do_id")
    private Long doId;

    @Column(name = "do_number", unique = true, nullable = false, length = 50)
    private String doNumber;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "dealer_id", nullable = false)
    private Dealer dealer;

    @Enumerated(EnumType.STRING)
    @Column(name = "fertilizer_type", nullable = false, length = 20)
    private FertType fertilizerType;

    @Column(name = "quantity_mt", nullable = false, precision = 8, scale = 2)
    private BigDecimal quantityMt;

    @Column(name = "buffer_godown", nullable = false, length = 100)
    private String bufferGodown;

    @Column(name = "challan_id")
    private Long challanId;

    @Enumerated(EnumType.STRING)
    @Column(name = "status", nullable = false, length = 20)
    private DoStatus status;

    @CreationTimestamp
    @Column(name = "created_at", updatable = false)
    private LocalDateTime createdAt;
}
