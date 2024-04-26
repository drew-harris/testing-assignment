export abstract class ServiceStrategy {
    abstract provideService(): void;
  }
  
  export class BasicRide extends ServiceStrategy {
    provideService(): void {
      console.log("Providing Basic Ride Service");
    }
  }
  
  export class CarGo extends ServiceStrategy {
    provideService(): void {
      console.log("Providing CarGo Service");
    }
  }
  
  export class CarEATS extends ServiceStrategy {
    provideService(): void {
      console.log("Providing CarEATS Service");
    }
  }
  
  export class ServiceContext {
    private strategy: ServiceStrategy | null;
  
    constructor(strategy: ServiceStrategy) {
      if (strategy === null || strategy === undefined) {
        throw new Error("Strategy cannot be null or undefined");
      }
      this.strategy = strategy;
    }
  
    setStrategy(strategy: ServiceStrategy | null): void {
      if (strategy === null || strategy === undefined) {
        throw new Error("Strategy cannot be null or undefined");
      }
      this.strategy = strategy;
    }
  
    provideService(): void {
      if (this.strategy === null) {
        throw new Error("No strategy set");
      }
      this.strategy.provideService();
    }
  }
  