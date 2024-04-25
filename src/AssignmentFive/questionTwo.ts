class Service {
    calculateFee() {
      throw new Error("Method calculateFee() must be implemented");
    }
  }
  
  export class CarPoolService extends Service {
    calculateFee() {
      return "CarPool Service Fee";
    }
  }
  
  export class CarXService extends Service {
    calculateFee() {
      return "CarX Service Fee";
    }
  }
  
  export class CarBlackService extends Service {
    calculateFee() {
      return "CarBlack Service Fee";
    }
  }
  
  export class CarServiceFacade {
    bookCarPoolRide() {
      const service = new CarPoolService();
      console.log(`Booking carPOOL ride: ${service.calculateFee()}`);
    }
  
    bookCarXRide() {
      const service = new CarXService();
      console.log(`Booking carX ride: ${service.calculateFee()}`);
    }
  
    bookCarBlackRide() {
      const service = new CarBlackService();
      console.log(`Booking carBlack ride: ${service.calculateFee()}`);
    }
  }
  