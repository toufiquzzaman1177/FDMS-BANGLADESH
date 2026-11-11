package com.fdms.dto;

import com.fdms.enums.FertType;
import com.fdms.enums.PaymentMethod;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

import java.util.List;

@Data
public class PosSaleRequest {

    @NotNull(message = "Farmer ID is required")
    private Long farmerId;

    @NotNull(message = "Retail outlet ID is required")
    private Long outletId;

    @NotNull(message = "Payment method is required")
    private PaymentMethod paymentMethod;

    @NotEmpty(message = "Sale items cannot be empty")
    private List<Item> items;

    @Data
    public static class Item {
        @NotNull(message = "Fertilizer type is required")
        private FertType fertilizerType;

        @NotNull(message = "Quantity in bags is required")
        private Integer quantityBags;
    }
}
