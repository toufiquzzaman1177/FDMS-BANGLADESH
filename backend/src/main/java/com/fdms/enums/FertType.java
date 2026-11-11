package com.fdms.enums;

public enum FertType {
    UREA(27.0, 50.0), // Government Fixed MRP per kg & bag size (kg)
    TSP(22.0, 50.0),
    DAP(21.0, 50.0),
    MOP(20.0, 50.0);

    private final double mrpPerKg;
    private final double bagSizeKg;

    FertType(double mrpPerKg, double bagSizeKg) {
        this.mrpPerKg = mrpPerKg;
        this.bagSizeKg = bagSizeKg;
    }

    public double getMrpPerKg() {
        return mrpPerKg;
    }

    public double getBagSizeKg() {
        return bagSizeKg;
    }

    public double getMrpPerBag() {
        return mrpPerKg * bagSizeKg;
    }
}
