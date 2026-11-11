package com.fdms.controller;

import com.fdms.dto.ApiResponse;
import com.fdms.enums.FertType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/public")
public class PublicPriceBoardController {

    @GetMapping("/mrp-rates")
    public ResponseEntity<ApiResponse<List<Map<String, Object>>>> getOfficialMrpRates() {
        List<Map<String, Object>> rates = Arrays.stream(FertType.values())
                .map(f -> Map.<String, Object>of(
                        "fertilizer", f.name(),
                        "mrpPerKg", f.getMrpPerKg(),
                        "bagSizeKg", f.getBagSizeKg(),
                        "mrpPerBag", f.getMrpPerBag(),
                        "currency", "BDT"
                ))
                .toList();

        return ResponseEntity.ok(ApiResponse.ok(rates, "Government official MRP rates"));
    }
}
