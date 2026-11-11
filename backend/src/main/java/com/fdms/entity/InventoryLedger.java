package com.fdms.entity;

import com.fdms.enums.FertType;
import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.UpdateTimestamp;

import java.time.LocalDateTime;

@Entity
@Table(name = "inventory_ledgers")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class InventoryLedger {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ledger_id")
    private Long ledgerId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "dealer_id")
    private Dealer dealer;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "outlet_id")
    private RetailOutlet outlet;

    @Enumerated(EnumType.STRING)
    @Column(name = "fertilizer_type", nullable = false, length = 20)
    private FertType fertilizerType;

    @Column(name = "opening_bags", nullable = false)
    @Builder.Default
    private Integer openingBags = 0;

    @Column(name = "inward_bags", nullable = false)
    @Builder.Default
    private Integer inwardBags = 0;

    @Column(name = "sold_bags", nullable = false)
    @Builder.Default
    private Integer soldBags = 0;

    @Column(name = "closing_bags", nullable = false)
    @Builder.Default
    private Integer closingBags = 0;

    @UpdateTimestamp
    @Column(name = "last_updated")
    private LocalDateTime lastUpdated;
}
