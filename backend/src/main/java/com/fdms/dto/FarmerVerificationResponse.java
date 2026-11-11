package com.fdms.dto;

import com.fdms.enums.CropType;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.util.Map;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class FarmerVerificationResponse {
    private Long farmerId;
    private String nidNumber;
    private String krishakCardNo;
    private String fullName;
    private String phoneNumber;
    private BigDecimal landDecimals;
    private CropType currentCrop;
    
    // Maximum allowable quota ceilings in kg based on land size and crop
    private Map<String, Double> quotaCeilingKg;
    private Map<String, Double> remainingQuotaKg;
}
