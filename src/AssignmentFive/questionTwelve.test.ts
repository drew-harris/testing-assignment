import { describe, test, expect } from 'vitest';
import { Smartphone, MobileWeb, SmartphoneAdapter, MobileWebAdapter, App } from './questionTwelve';

describe('Question Twelve Test Cases', () => {
    test('Smartphone Adapter should correctly delegate operations', () => {
        const smartphone = new Smartphone();
        const adapter = new SmartphoneAdapter(smartphone);
        const app = new App(adapter);

        expect(app.perform_operation()).toBe("Operation performed by Smartphone");
    });

    test('Mobile Web Adapter should correctly delegate operations', () => {
        const mobileWeb = new MobileWeb();
        const adapter = new MobileWebAdapter(mobileWeb);
        const app = new App(adapter);

        expect(app.perform_operation()).toBe("Operation performed by Mobile Web");
    });

    test('Smartphone Adapter should throw an error when initialized without a smartphone', () => {
        const createAdapterWithNull = () => {
            new SmartphoneAdapter(null);
        };

        expect(createAdapterWithNull).toThrow("Smartphone instance cannot be null");
    });

    test('Smartphone Adapter should throw an error for invalid smartphone operation', () => {
        const brokenSmartphone = new Smartphone();
        brokenSmartphone.specific_operation = null; 
        const adapter = new SmartphoneAdapter(brokenSmartphone);
        const performInvalidOperation = () => {
            adapter.request_operation();
        };

        expect(performInvalidOperation).toThrow("Operation failed due to invalid smartphone operation");
    });
});
