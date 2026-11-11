package com.fdms.entity;

import com.fdms.enums.FertType;
import jakarta.persistence.*;
import lombok.*;

import java.math.BigDecimal;

@Entity
@Table(name = "sales_items")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class SalesItem {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "item_id")
    private Long itemId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "transaction_id", nullable = false)
    private SalesTransaction transaction;

    @Enumerated(EnumType.STRING)
    @Column(name = "fertilizer_type", nullable = false, length = 20)
    private FertType fertilizerType;

    @Column(name = "quantity_bags", nullable = false)
    private Integer quantityBags;

    @Column(name = "quantity_kg", nullable = false, precision = 8, scale = 2)
    private BigDecimal quantityKg;

    @Column(name = "unit_price_mrp", nullable = false, precision = 8, scale = 2)
    private BigDecimal unitPriceMrp;

    @Column(name = "item_total_mrp", nullable = false, precision = 10, scale = 2)
    private BigDecimal itemTotalMrp;

    @Column(name = "subsidy_amount", nullable = false, precision = 10, scale = 2)
    private BigDecimal subsidyAmount;
}
