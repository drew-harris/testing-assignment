export abstract class Service {
    abstract operation(): string;
}

// Concrete implementation of Service
export class BasicService extends Service {
    operation(): string {
        return "Basic Service";
    }
}
// Abstract decorator class extending Service
export abstract class ServiceDecorator extends Service {
    protected _service: Service;

    constructor(service: Service) {
        super();
        this._service = service;
    }

    operation(): string {
        return this._service.operation();
    }
}

// Concrete decorators that adds new features
export class FeatureXDecorator extends ServiceDecorator {
    operation(): string {
        return `${this._service.operation()} + Feature X`;
    }
}

export class FeatureYDecorator extends ServiceDecorator {
    operation(): string {
        return `${this._service.operation()} + Feature Y`;
    }
}

export class FaultyService extends Service {
    operation(): string {
        throw new Error("Faulty service operation failed");
    }
}