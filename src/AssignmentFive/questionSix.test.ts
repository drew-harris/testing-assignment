import { describe, beforeEach, it, expect, vi } from 'vitest';
import { Rider, CouponService, RiderImpl } from './questionSix';

describe('Question Six Test Cases', () => {
    let couponService: CouponService;
    let rider1: RiderImpl;
    let rider2: RiderImpl;

    beforeEach(() => {
        couponService = new CouponService();
        rider1 = new RiderImpl('John');
        rider2 = new RiderImpl('Doe');
        
        // Mock console.log to verify output
        vi.spyOn(console, 'log').mockImplementation(() => {});
    });

    it('should register riders and notify them with a coupon', () => {
        couponService.registerRider(rider1);
        couponService.registerRider(rider2);
        couponService.notifyRiders('50% OFF');

        expect(console.log).toHaveBeenCalledTimes(2);
        expect(console.log).toHaveBeenCalledWith('John, you have a new coupon: 50% OFF');
        expect(console.log).toHaveBeenCalledWith('Doe, you have a new coupon: 50% OFF');
    });

    it('should remove a rider and not notify them', () => {
        couponService.registerRider(rider1);
        couponService.registerRider(rider2);
        couponService.removeRider(rider1);
        couponService.notifyRiders('30% OFF');

        expect(console.log).toHaveBeenCalledTimes(1);
        expect(console.log).toHaveBeenCalledWith('Doe, you have a new coupon: 30% OFF');
    });

    it('should correctly call update on riders when notifying', () => {
        const updateSpy = vi.spyOn(rider1, 'update');

        couponService.registerRider(rider1);
        couponService.notifyRiders('20% OFF');

        expect(updateSpy).toHaveBeenCalledTimes(1);
        expect(updateSpy).toHaveBeenCalledWith('20% OFF');
        expect(console.log).toHaveBeenCalledWith('John, you have a new coupon: 20% OFF');
    });
    
    // Intentionally failing test
    it('should fail when notifying a removed rider', () => {
        couponService.registerRider(rider1);
        couponService.removeRider(rider1);
        couponService.notifyRiders('10% OFF');

        expect(console.log).toHaveBeenCalledWith('John, you have a new coupon: 10% OFF');
    });

});
