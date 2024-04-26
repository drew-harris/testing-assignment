export abstract class Observer {
    abstract update(message: string): void;
}

export class MessageBoard {
    private observers: Observer[] = [];

    constructor() {
        this.observers = [];
    }

    register(observer: Observer): void {
        this.observers.push(observer);
    }

    unregister(observer: Observer): void {
        this.observers = this.observers.filter(obs => obs !== observer);
    }

    notify(message: string): void {
        this.observers.forEach(observer => observer.update(message));
    }

    postMessage(message: string): void {
        if (!message) {
            throw new Error("Cannot post an empty message");
        }
        console.log(`MessageBoard: New message posted - "${message}"`);
        this.notify(message);
    }
}
// Concrete implementation of Observer for a rider
export class ConcreteRider extends Observer {
    private name: string;

    constructor(name: string) {
        super();
        this.name = name;
    }

    update(message: string): void {
        console.log(`${this.name} received a message: "${message}"`);
    }
}