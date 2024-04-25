import { describe, beforeEach, it, expect, vi } from 'vitest';
import { NormalCarFactory, LuxuryCarFactory, CarService } from './questionEight';

describe('Question Eight Test Cases', () => {
    let normalFactory: NormalCarFactory;
    let luxuryFactory: LuxuryCarFactory;
    let service;

    beforeEach(() => {
        normalFactory = new NormalCarFactory();
        luxuryFactory = new LuxuryCarFactory();


        vi.spyOn(console, 'log').mockImplementation(() => {});
    });

    it('should display features and fee for a normal car', () => {
        service = new CarService(normalFactory);
        service.displayFeatures();
        service.displayFee();

        expect(console.log).toHaveBeenCalledWith('Normal Car Features');
        expect(console.log).toHaveBeenCalledWith('Normal Car Fee Calculation');
    });

    it('should display features and fee for a luxury car', () => {
        service = new CarService(luxuryFactory);
        service.displayFeatures();
        service.displayFee();

        expect(console.log).toHaveBeenCalledWith('Luxury Car Features');
        expect(console.log).toHaveBeenCalledWith('Luxury Car Fee Calculation');
    });

    // Intentionally failing test
    it('should fail to display the correct fee for a luxury car', () => {
        service = new CarService(luxuryFactory);
        service.displayFee();

        expect(console.log).toHaveBeenCalledWith('Incorrect Luxury Car Fee');
    });
});
