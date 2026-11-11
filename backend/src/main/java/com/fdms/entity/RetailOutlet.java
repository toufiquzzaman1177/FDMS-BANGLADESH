package com.fdms.entity;

import jakarta.persistence.*;
import lombok.*;

import java.math.BigDecimal;

@Entity
@Table(name = "retail_outlets")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class RetailOutlet {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "outlet_id")
    private Long outletId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "dealer_id", nullable = false)
    private Dealer dealer;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "operator_id", referencedColumnName = "user_id", nullable = false)
    private User operator;

    @Column(name = "ward_number", nullable = false)
    private Integer wardNumber; // 1 to 9

    @Column(name = "market_name", nullable = false, length = 100)
    private String marketName;

    @Column(name = "geo_lat", precision = 10, scale = 8)
    private BigDecimal geoLat;

    @Column(name = "geo_long", precision = 10, scale = 8)
    private BigDecimal geoLong;
}
