export abstract class IClientDevice {
    abstract request_operation(): string;
}

// Class representing a Smartphone
export class Smartphone {
    specific_operation(): string {
        return "Operation performed by Smartphone";
    }
}

// Class representing a Mobile Web interface
export class MobileWeb {
    different_operation(): string {
        return "Operation performed by Mobile Web";
    }
}

// Adapter for the Smartphone
export class SmartphoneAdapter extends IClientDevice {
    private smartphone: Smartphone;

    constructor(smartphone: Smartphone) {
        super();
        if (!smartphone) {
            throw new Error("Smartphone instance cannot be null");
        }
        this.smartphone = smartphone;
    }

    request_operation(): string {
        if (!this.smartphone.specific_operation) {
            throw new Error("Operation failed due to invalid smartphone operation");
        }
        return this.smartphone.specific_operation();
    }
}

// Adapter for the Mobile Web
export class MobileWebAdapter extends IClientDevice {
    private mobileweb: MobileWeb;

    constructor(mobileweb: MobileWeb) {
        super();
        this.mobileweb = mobileweb;
    }

    request_operation(): string {
        return this.mobileweb.different_operation();
    }
}


// Application class that uses devices
export class App {
    private device: IClientDevice;

    constructor(device: IClientDevice) {
        this.device = device;
    }

    perform_operation(): string {
        return this.device.request_operation();
    }
}