import { describe, beforeEach, it, expect, vi } from 'vitest';
import { ReservationAdapter, LegacyReservationSystem } from './questionNine';

describe('Question Nine Test Cases', () => {
    let legacySystem: LegacyReservationSystem;
    let adapter: ReservationAdapter;

    beforeEach(() => {
        legacySystem = new LegacyReservationSystem();
        adapter = new ReservationAdapter(legacySystem);

        vi.spyOn(console, 'log').mockImplementation(() => {});
    });

    it('should correctly adapt the new reservation interface to the legacy system', () => {
        const date = "2024-01-01";
        const location = "Downtown Hub";
        adapter.book_car(date, location);

        expect(console.log).toHaveBeenCalledWith(`Reservation made for ${date} at ${location}`);
    });

});
