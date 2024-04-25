import { describe, beforeEach, it, expect, vi } from 'vitest';
import { BasicService, FeatureXDecorator, FeatureYDecorator } from './questionTen';

describe('Decorator Pattern Tests', () => {
    let basicService: BasicService;
    let featureX: FeatureXDecorator;
    let featureY: FeatureYDecorator;

    beforeEach(() => {
        basicService = new BasicService();
        featureX = new FeatureXDecorator(basicService);
        featureY = new FeatureYDecorator(basicService);
    });

    it('should provide the basic service', () => {
        expect(basicService.operation()).toBe("Basic Service");
    });

    it('should enhance the basic service with Feature X', () => {
        expect(featureX.operation()).toBe("Basic Service + Feature X");
    });

    it('should enhance the basic service with Feature Y', () => {
        expect(featureY.operation()).toBe("Basic Service + Feature Y");
    });

    // Intentionally failing test
    it('should fail when Feature Z is added since it does not exists', () => {
        let combinedFeature = new FeatureXDecorator(new FeatureYDecorator(basicService));
        expect(combinedFeature.operation()).toBe("Basic Service + Feature Y + Feature X + Feature Z");
    });
});
