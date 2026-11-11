package com.fdms.controller;

import com.fdms.dto.ApiResponse;
import com.fdms.dto.PosSaleRequest;
import com.fdms.entity.SalesTransaction;
import com.fdms.service.PosService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/pos")
@RequiredArgsConstructor
public class PosController {

    private final PosService posService;

    @PostMapping("/checkout")
    public ResponseEntity<ApiResponse<SalesTransaction>> checkout(
            @Valid @RequestBody PosSaleRequest request
    ) {
        SalesTransaction transaction = posService.processSale(request);
        return ResponseEntity.ok(ApiResponse.ok(transaction, "Transaction completed successfully. Invoice #" + transaction.getInvoiceNumber()));
    }
}
