import { describe, expect, test, vi } from 'vitest';
import { BasicRide, CarGo, CarEATS, ServiceContext } from './3. questionThree';


vi.spyOn(console, 'log').mockImplementation(() => { });

describe('Question Three Test Cases', () => {
  test('BasicRide provides the correct service', () => {
    const basicRide = new BasicRide();
    basicRide.provideService();
    expect(console.log).toHaveBeenCalledWith('Providing Basic Ride Service');
  });

  test('CarGo provides the correct service', () => {
    const carGo = new CarGo();
    carGo.provideService();
    expect(console.log).toHaveBeenCalledWith('Providing CarGo Service');
  });

  test('CarEATS provides the correct service', () => {
    const carEATS = new CarEATS();
    carEATS.provideService();
    expect(console.log).toHaveBeenCalledWith('Providing CarEATS Service');
  });

  test('ServiceContext switches strategies correctly', () => {
    const serviceContext = new ServiceContext(new BasicRide());
    serviceContext.provideService();
    expect(console.log).toHaveBeenCalledWith('Providing Basic Ride Service');

    serviceContext.setStrategy(new CarGo());
    serviceContext.provideService();
    expect(console.log).toHaveBeenCalledWith('Providing CarGo Service');

    serviceContext.setStrategy(new CarEATS());
    serviceContext.provideService();
    expect(console.log).toHaveBeenCalledWith('Providing CarEATS Service');
  });

  test('ServiceContext throws error when setting a null strategy', () => {
    const serviceContext = new ServiceContext(new BasicRide()); // Valid initialization
    
    // Test setting a null strategy
    const setNullStrategy = () => serviceContext.setStrategy(null);
    expect(setNullStrategy).toThrow("Strategy cannot be null or undefined");
  });

});
