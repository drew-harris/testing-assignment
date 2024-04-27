import { describe, beforeEach, test, expect, vi } from 'vitest';
import { ReservationAdapter, LegacyReservationSystem } from './9. questionNine';

describe('Question Nine Test Cases', () => {
    let legacySystem: LegacyReservationSystem;
    let adapter: ReservationAdapter;

    beforeEach(() => {
        legacySystem = new LegacyReservationSystem();
        adapter = new ReservationAdapter(legacySystem);

        vi.spyOn(console, 'log').mockImplementation(() => {});
    });

    test('should correctly adapt the new reservation interface to the legacy system', () => {
        const date = "2024-01-01";
        const location = "Downtown Hub";
        adapter.book_car(date, location);

        expect(console.log).toHaveBeenCalledWith(`Reservation made for ${date} at ${location}`);
    });
    
    test('should throw an error when date or location is invalid', () => {
        const attemptToBookWithInvalidData = () => {
            adapter.book_car("", "");  // Empty date and location
        };

        expect(attemptToBookWithInvalidData).toThrow("Date and location must be provided");
    });

    test('should throw an error for improperly formatted date or location', () => {
        const attemptToBookWithImproperFormat = () => {
            adapter.book_car("wrong-format", "   ");  // Incorrect date format and a blank location
        };

        expect(attemptToBookWithImproperFormat).toThrow("Invalid date or location format");
    });

});
