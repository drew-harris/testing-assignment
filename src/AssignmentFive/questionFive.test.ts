import { describe, it, expect } from 'vitest';
import { IPricingStrategy, RegularPricingStrategy, HighDemandPricingStrategy, RideService } from './questionFive';

describe('Question Five Test Cases', () => {
    it('should calculate fare using RegularPricingStrategy', () => {
        const strategy = new RegularPricingStrategy();
        const service = new RideService(strategy);
        const fare = service.calculateFare(10, 5, 'non-peak'); // basePrice: 10, distance: 5
        expect(fare).toBe(15); // 10 + 5 * 1.0 = 15
    });

    it('should calculate fare using HighDemandPricingStrategy during peak hours', () => {
        const strategy = new HighDemandPricingStrategy();
        const service = new RideService(strategy);
        const fare = service.calculateFare(10, 5, 'peak'); // basePrice: 10, distance: 5
        expect(fare).toBe(17.5); // 10 + 5 * 1.5 = 17.5
    });

    it('should calculate fare using HighDemandPricingStrategy during non-peak hours', () => {
        const strategy = new HighDemandPricingStrategy();
        const service = new RideService(strategy);
        const fare = service.calculateFare(10, 5, 'non-peak'); // basePrice: 10, distance: 5
        expect(fare).toBe(15); // 10 + 5 * 1.0 = 15
    });

    // Intentionally failing test
    it('should fail when an unsupported time of day is used', () => {
        const strategy = new HighDemandPricingStrategy();
        const service = new RideService(strategy);
        const fare = service.calculateFare(10, 5, 'midnight'); // unsupported time
        // This should because there's no special handling for 'midnight'
        expect(fare).toBe(20);
    });
});
