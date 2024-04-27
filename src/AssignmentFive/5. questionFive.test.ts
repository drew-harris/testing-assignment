import { describe, test, expect } from 'vitest';
import { IPricingStrategy, RegularPricingStrategy, HighDemandPricingStrategy, RideService } from './5. questionFive';

describe('Question Five Test Cases', () => {
    test('should calculate fare using RegularPricingStrategy', () => {
        const strategy = new RegularPricingStrategy();
        const service = new RideService(strategy);
        const fare = service.calculateFare(10, 5, 'non-peak'); // basePrice: 10, distance: 5
        expect(fare).toBe(15); // 10 + 5 * 1.0 = 15
    });

    test('should calculate fare using HighDemandPricingStrategy during peak hours', () => {
        const strategy = new HighDemandPricingStrategy();
        const service = new RideService(strategy);
        const fare = service.calculateFare(10, 5, 'peak'); // basePrice: 10, distance: 5
        expect(fare).toBe(17.5); // 10 + 5 * 1.5 = 17.5
    });

    test('should calculate fare using HighDemandPricingStrategy during non-peak hours', () => {
        const strategy = new HighDemandPricingStrategy();
        const service = new RideService(strategy);
        const fare = service.calculateFare(10, 5, 'non-peak'); // basePrice: 10, distance: 5
        expect(fare).toBe(15); // 10 + 5 * 1.0 = 15
    });
    test('should throw an error for an unsupported time of day', () => {
        const strategy = new RegularPricingStrategy();
        const service = new RideService(strategy);
        const testUnsupportedTime = () => {
            service.calculateFare(10, 5, 'early-morning'); // 'early-morning' is not a supported time of day
        };
        expect(testUnsupportedTime).toThrow("Unsupported time of day: early-morning");
    });
});
