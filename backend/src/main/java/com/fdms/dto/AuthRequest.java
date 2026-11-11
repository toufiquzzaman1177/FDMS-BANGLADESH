package com.fdms.dto;

import jakarta.validation.constraints.NotBlank;
import lombok.Data;

@Data
public class AuthRequest {
    @NotBlank(message = "Phone number or NID is required")
    private String identifier;

    @NotBlank(message = "Password is required")
    private String password;
}
