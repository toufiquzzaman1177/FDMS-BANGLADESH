package com.fdms.enums;

public enum CropType {
    BORO_RICE(0.85, 0.40, 0.35, 0.30), // Urea kg/decimal, TSP kg/decimal, DAP kg/decimal, MOP kg/decimal
    AMAN_RICE(0.70, 0.30, 0.25, 0.25),
    WHEAT(0.60, 0.35, 0.30, 0.20),
    MUSTARD(0.50, 0.30, 0.25, 0.15),
    MAIZE(0.95, 0.45, 0.40, 0.35),
    VEGETABLES(0.75, 0.40, 0.35, 0.30);

    private final double ureaRatePerDecimal;
    private final double tspRatePerDecimal;
    private final double dapRatePerDecimal;
    private final double mopRatePerDecimal;

    CropType(double ureaRatePerDecimal, double tspRatePerDecimal, double dapRatePerDecimal, double mopRatePerDecimal) {
        this.ureaRatePerDecimal = ureaRatePerDecimal;
        this.tspRatePerDecimal = tspRatePerDecimal;
        this.dapRatePerDecimal = dapRatePerDecimal;
        this.mopRatePerDecimal = mopRatePerDecimal;
    }

    public double getRateForFertilizer(FertType type) {
        return switch (type) {
            case UREA -> ureaRatePerDecimal;
            case TSP -> tspRatePerDecimal;
            case DAP -> dapRatePerDecimal;
            case MOP -> mopRatePerDecimal;
        };
    }
}
