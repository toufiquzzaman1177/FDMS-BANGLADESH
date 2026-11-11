package com.fdms.entity;

import com.fdms.enums.PaymentMethod;
import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "sales_transactions")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class SalesTransaction {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "transaction_id")
    private Long transactionId;

    @Column(name = "invoice_number", unique = true, nullable = false, length = 50)
    private String invoiceNumber;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "farmer_id", nullable = false)
    private Farmer farmer;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "outlet_id", nullable = false)
    private RetailOutlet outlet;

    @Column(name = "total_price_mrp", nullable = false, precision = 10, scale = 2)
    private BigDecimal totalPriceMrp;

    @Column(name = "govt_subsidy", nullable = false, precision = 10, scale = 2)
    private BigDecimal govtSubsidy;

    @Column(name = "qr_token", unique = true, nullable = false)
    private String qrToken;

    @Enumerated(EnumType.STRING)
    @Column(name = "payment_method", nullable = false, length = 30)
    private PaymentMethod paymentMethod;

    @OneToMany(mappedBy = "transaction", cascade = CascadeType.ALL, orphanRemoval = true)
    @Builder.Default
    private List<SalesItem> items = new ArrayList<>();

    @CreationTimestamp
    @Column(name = "transaction_time", updatable = false)
    private LocalDateTime transactionTime;
}
