import { describe, beforeEach, test, expect, vi } from 'vitest';
import { NormalCarFactory, LuxuryCarFactory, CarService, FaultyCarFactory } from './8. questionEight';

describe('Question Eight Test Cases', () => {
    let normalFactory: NormalCarFactory;
    let luxuryFactory: LuxuryCarFactory;
    let faultyFactory: FaultyCarFactory;
    let service;

    beforeEach(() => {
        normalFactory = new NormalCarFactory();
        luxuryFactory = new LuxuryCarFactory();
        faultyFactory = new FaultyCarFactory();


        vi.spyOn(console, 'log').mockImplementation(() => {});
    });

    test('should display features and fee for a normal car', () => {
        service = new CarService(normalFactory);
        service.displayFeatures();
        service.displayFee();

        expect(console.log).toHaveBeenCalledWith('Normal Car Features');
        expect(console.log).toHaveBeenCalledWith('Normal Car Fee Calculation');
    });

    test('should display features and fee for a luxury car', () => {
        service = new CarService(luxuryFactory);
        service.displayFeatures();
        service.displayFee();

        expect(console.log).toHaveBeenCalledWith('Luxury Car Features');
        expect(console.log).toHaveBeenCalledWith('Luxury Car Fee Calculation');
    });
    test('should throw an error when using a faulty factory', () => {
        const createCarUsingFaultyFactory = () => {
            service = new CarService(faultyFactory);  // This should fail
            service.displayFeatures();
        };

        expect(createCarUsingFaultyFactory).toThrow("Car creation failed due to an internal error");
    });
});
