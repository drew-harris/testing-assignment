type TimeOfDay = 'peak' | 'non-peak' | 'midnight';

export abstract class PricingStrategy {
    abstract calculate_fare(distance: number, time_of_day: TimeOfDay): number;
}

export class BasicPricingStrategy extends PricingStrategy {
    calculate_fare(distance: number, time_of_day: TimeOfDay): number {
        return distance * 1.5;
    }
}

export class DynamicPricingStrategy extends PricingStrategy {
    calculate_fare(distance: number, time_of_day: TimeOfDay): number {
        const base_rate = 1.5;
        switch (time_of_day) {
            case 'peak':
                return distance * base_rate * 2;
            case 'non-peak':
                return distance * base_rate * 3;
            case 'midnight':
                return distance * base_rate * 4;
            default:
                throw new Error(`Unsupported time of day: ${time_of_day}`);
        }
    }
}

export class ServiceHandler {
    private _strategy: PricingStrategy;

    constructor(strategy: PricingStrategy) {
        this._strategy = strategy;
    }

    set_strategy(strategy: PricingStrategy): void {
        this._strategy = strategy;
    }

    calculate_fare(distance: number, time_of_day: TimeOfDay): number {
        return this._strategy.calculate_fare(distance, time_of_day);
    }
}
