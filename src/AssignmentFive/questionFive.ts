// Define a type for timeOfDay to restrict it to specific string values
type TimeOfDay = 'peak' | 'non-peak' | 'midnight';

export abstract class IPricingStrategy {
    abstract calculatePrice(basePrice: number, distance: number, timeOfDay: TimeOfDay): number;
}

export class RegularPricingStrategy extends IPricingStrategy {
    calculatePrice(basePrice: number, distance: number, timeOfDay: TimeOfDay): number {
        return basePrice + (distance * 1.0);
    }
}

export class HighDemandPricingStrategy extends IPricingStrategy {
    calculatePrice(basePrice: number, distance: number, timeOfDay: TimeOfDay): number {
        if (timeOfDay === 'peak') {
            return basePrice + (distance * 1.5);
        }
        return basePrice + (distance * 1.0);
    }
}

export class RideService {
    private strategy: IPricingStrategy;  

    constructor(strategy: IPricingStrategy) {
        this.strategy = strategy;
    }

    setStrategy(strategy: IPricingStrategy): void {
        this.strategy = strategy;
    }

    calculateFare(basePrice: number, distance: number, timeOfDay: TimeOfDay): number {
        if (!['peak', 'non-peak', 'midnight'].includes(timeOfDay)) {
            throw new Error(`Unsupported time of day: ${timeOfDay}`);
        }
        return this.strategy.calculatePrice(basePrice, distance, timeOfDay);
    }
}
