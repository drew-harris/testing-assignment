import { describe, expect, test, vi } from "vitest";
import { CarPoolService, CarXService, CarBlackService, CarServiceFacade } from "./questionTwo";

describe('Question Two Test Cases', () => {
  test("CarPoolService calculateFee returns 'CarPool Service Fee'", () => {
    const service = new CarPoolService();
    expect(service.calculateFee()).toBe('CarPool Service Fee');
  });

  test("CarXService calculateFee returns 'CarX Service Fee'", () => {
    const service = new CarXService();
    expect(service.calculateFee()).toBe('CarX Service Fee');
  });

  test("CarBlackService calculateFee returns 'CarBlack Service Fee'", () => {
    const service = new CarBlackService();
    expect(service.calculateFee()).toBe('CarBlack Service Fee');
  });

  // Facade tests
  test("CarServiceFacade books CarPool ride correctly", () => {
    const facade = new CarServiceFacade();
    const consoleSpy = vi.spyOn(console, 'log');
    facade.bookCarPoolRide();
    expect(consoleSpy).toHaveBeenCalledWith('Booking carPOOL ride: CarPool Service Fee');
  });

  test("CarServiceFacade books CarX ride correctly", () => {
    const facade = new CarServiceFacade();
    const consoleSpy = vi.spyOn(console, 'log');
    facade.bookCarXRide();
    expect(consoleSpy).toHaveBeenCalledWith('Booking carX ride: CarX Service Fee');
  });

  test("CarServiceFacade books CarBlack ride correctly", () => {
    const facade = new CarServiceFacade();
    const consoleSpy = vi.spyOn(console, 'log');
    facade.bookCarBlackRide();
    expect(consoleSpy).toHaveBeenCalledWith('Booking carBlack ride: CarBlack Service Fee');
  });

  // Intentionally failing test
  test("Intentionally fail CarPoolService calculateFee", () => {
    const service = new CarPoolService();
    expect(service.calculateFee()).toBe('Incorrect Service Fee'); // This will fail
  });

});
