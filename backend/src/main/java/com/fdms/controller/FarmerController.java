package com.fdms.controller;

import com.fdms.dto.ApiResponse;
import com.fdms.dto.FarmerVerificationResponse;
import com.fdms.service.FarmerService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/farmers")
@RequiredArgsConstructor
public class FarmerController {

    private final FarmerService farmerService;

    @GetMapping("/verify/{identifier}")
    public ResponseEntity<ApiResponse<FarmerVerificationResponse>> verifyFarmer(
            @PathVariable String identifier
    ) {
        FarmerVerificationResponse response = farmerService.verifyFarmer(identifier);
        return ResponseEntity.ok(ApiResponse.ok(response, "Farmer profile verified"));
    }
}
