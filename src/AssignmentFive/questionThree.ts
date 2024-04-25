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
    private strategy: ServiceStrategy;
  
    constructor(strategy: ServiceStrategy) {
      this.strategy = strategy;
    }
  
    setStrategy(strategy: ServiceStrategy): void {
      this.strategy = strategy;
    }
  
    provideService(): void {
      this.strategy.provideService();
    }
  }
  