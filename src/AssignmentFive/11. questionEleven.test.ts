import { describe, beforeEach, test, expect, vi } from 'vitest';
import { PricingStrategy, BasicPricingStrategy, DynamicPricingStrategy, ServiceHandler } from './11. questionEleven';

describe('Pricing Strategy Tests', () => {
    let serviceHandler: ServiceHandler;
    let dynamicStrategy: DynamicPricingStrategy;
    let basicStrategy: BasicPricingStrategy

    beforeEach(() => {
        dynamicStrategy = new DynamicPricingStrategy();
        serviceHandler = new ServiceHandler(dynamicStrategy);
        basicStrategy = new BasicPricingStrategy()
    });

    test('should calculate fare using BasicPricingStrategy', () => {
        expect(basicStrategy.calculate_fare(10, 'peak')).toBe(15);
    });

    test('should calculate fare using DynamicPricingStrategy during non-peak hours', () => {
        expect(dynamicStrategy.calculate_fare(10, 'non-peak')).toBe(45); 
    });

    test('should calculate fare using DynamicPricingStrategy during peak hours', () => {
        expect(dynamicStrategy.calculate_fare(10, 'peak')).toBe(30);  
    });

    test('should switch strategy in ServiceHandler and calculate fare', () => {
        serviceHandler.set_strategy(dynamicStrategy);
        expect(serviceHandler.calculate_fare(10, 'peak')).toBe(30);
    });

    test('should throw an error if an invalid time of day is used', () => {
        const invalidTimeOfDay = 'early-morning';  
        const testInvalidTime = () => {
            serviceHandler.calculate_fare(10, invalidTimeOfDay as any);  
        };
        expect(testInvalidTime).toThrow(`Unsupported time of day: ${invalidTimeOfDay}`);
    });
    
});
