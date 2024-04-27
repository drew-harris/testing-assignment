// Rider.ts
export abstract class Rider {
    abstract update(coupon: string): void;
}

// CouponService.ts
export class CouponService {
    private _riders: Rider[] = [];

    registerRider(rider: Rider): void {
        this._riders.push(rider);
    }

    removeRider(rider: Rider): void {
        const index = this._riders.indexOf(rider);
        if (index > -1) {
            this._riders.splice(index, 1);
        }
    }

    notifyRiders(coupon: string): void {
        if (!coupon) {
            throw new Error("Coupon code cannot be null or empty");
        }
        this._riders.forEach(rider => rider.update(coupon));
    }
}

// RiderImpl.ts
export class RiderImpl extends Rider {
    private _name: string;

    constructor(name: string) {
        super();
        this._name = name;
    }

    update(coupon: string): void {
        console.log(`${this._name}, you have a new coupon: ${coupon}`);
    }
}
