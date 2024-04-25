export abstract class NewReservationInterface {
    abstract book_car(date: string, location: string): void;
}

export class LegacyReservationSystem {
    make_reservation(reservation_date: string, pickup_location: string): void {
        console.log(`Reservation made for ${reservation_date} at ${pickup_location}`);
    }
}

// Adapter class to adapt new reservation interface to legacy system
export class ReservationAdapter extends NewReservationInterface {
    private legacy_system: LegacyReservationSystem;

    constructor(legacy_system: LegacyReservationSystem) {
        super();
        this.legacy_system = legacy_system;
    }

    book_car(date: string, location: string): void {
        this.legacy_system.make_reservation(date, location);
    }
}