export abstract class Car {
    abstract features(): string;
    abstract calculateFee(): string;
}

export abstract class CarFactory {
    abstract createCar(): Car;
}

// Concrete implementation of a Normal Car
export class NormalCar extends Car {
    features(): string {
        return "Normal Car Features";
    }

    calculateFee(): string {
        return "Normal Car Fee Calculation";
    }
}

// Concrete implementation of a Luxury Car
export class LuxuryCar extends Car {
    features(): string {
        return "Luxury Car Features";
    }

    calculateFee(): string {
        return "Luxury Car Fee Calculation";
    }
}

// Concrete factory to create normal cars
export class NormalCarFactory extends CarFactory {
    createCar(): NormalCar {
        return new NormalCar();
    }
}

// Concrete factory to create luxury cars
export class LuxuryCarFactory extends CarFactory {
    createCar(): LuxuryCar {
        return new LuxuryCar();
    }
}

// Client class that uses factories to create cars
export class CarService {
    private car;

    constructor(factory: CarFactory) {
        this.car = factory.createCar();
    }

    displayFeatures(): void {
        console.log(this.car.features());
    }

    displayFee(): void {
        console.log(this.car.calculateFee());
    }
}