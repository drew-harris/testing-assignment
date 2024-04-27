import { describe, beforeEach, test, expect, vi } from 'vitest';
import { BasicService, FeatureXDecorator, FeatureYDecorator, FaultyService } from './questionTen';

describe('Question Ten Test Cases', () => {
    let basicService: BasicService;
    let featureX: FeatureXDecorator;
    let featureY: FeatureYDecorator;
    let faultyService: FaultyService;

    beforeEach(() => {
        basicService = new BasicService();
        featureX = new FeatureXDecorator(basicService);
        featureY = new FeatureYDecorator(basicService);
        faultyService = new FaultyService();
    });

    test('should provide the basic service', () => {
        expect(basicService.operation()).toBe("Basic Service");
    });

    test('should enhance the basic service with Feature X', () => {
        expect(featureX.operation()).toBe("Basic Service + Feature X");
    });

    test('should enhance the basic service with Feature Y', () => {
        expect(featureY.operation()).toBe("Basic Service + Feature Y");
    });

    test('should throw an error when using a faulty service with Feature X', () => {
        const faultyFeatureX = new FeatureXDecorator(faultyService);
        const performFaultyOperation = () => {
            faultyFeatureX.operation();
        };
        expect(performFaultyOperation).toThrow("Faulty service operation failed");
    });

    test('should throw an error when using a faulty service with Feature Y', () => {
        const faultyFeatureY = new FeatureYDecorator(faultyService);
        const performFaultyOperation = () => {
            faultyFeatureY.operation();
        };
        expect(performFaultyOperation).toThrow("Faulty service operation failed");
    });
});
