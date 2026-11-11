package com.fdms.entity;

import com.fdms.enums.CropType;
import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;

import java.math.BigDecimal;
import java.time.LocalDateTime;

@Entity
@Table(name = "farmers")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Farmer {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "farmer_id")
    private Long farmerId;

    @Column(name = "nid_number", unique = true, nullable = false, length = 20)
    private String nidNumber;

    @Column(name = "krishak_card_no", unique = true, nullable = false, length = 50)
    private String krishakCardNo;

    @Column(name = "full_name", nullable = false, length = 100)
    private String fullName;

    @Column(name = "phone_number", nullable = false, length = 15)
    private String phoneNumber;

    @Column(name = "land_decimals", nullable = false, precision = 8, scale = 2)
    private BigDecimal landDecimals;

    @Enumerated(EnumType.STRING)
    @Column(name = "current_crop", nullable = false, length = 30)
    private CropType currentCrop;

    @CreationTimestamp
    @Column(name = "registered_at", updatable = false)
    private LocalDateTime registeredAt;
}
