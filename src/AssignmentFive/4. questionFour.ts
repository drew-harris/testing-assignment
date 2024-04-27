export abstract class PaymentService {
    abstract processPayment(amount: number, currency: string): void;
}

export class PayPalService extends PaymentService {
    processPayment(amount: number, currency: string = "USD"): void {
        if (currency !== "USD") {
            throw new Error("Unsupported currency: " + currency);
        }
        console.log(`Processing payment through PayPal: ${amount} USD`);
    }
}

export class PaymentProxy extends PaymentService {
    private payPalService: PayPalService; 

    constructor() {
        super();
        this.payPalService = new PayPalService();  
    }

    processPayment(amount: number, currency: string = "USD"): void {
        console.log('Preparing data for PayPal format...');

        this.payPalService.processPayment(amount, "USD");
    }
}

// Client class that uses a PaymentService to process payments
export class Client {
    private paymentService: PaymentService;

    constructor(paymentService: PaymentService) {
        this.paymentService = paymentService;
    }

    makePayment(amount: number, currency: string = "USD"): void {
        // Even if a different currency is passed, it will be overridden to "USD" in the underlying services
        this.paymentService.processPayment(amount, "USD");
    }
}
