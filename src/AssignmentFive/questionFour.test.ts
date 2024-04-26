import { describe, test, expect, vi } from 'vitest';
import { PayPalService, PaymentProxy, Client } from './questionFour';

vi.spyOn(console, 'log').mockImplementation(() => {});

describe('Question Four Test Cases', () => {
  test('PayPalService processes payment correctly', () => {
    const payPalService = new PayPalService();
    payPalService.processPayment(100, 'USD');
    expect(console.log).toHaveBeenCalledWith('Processing payment through PayPal: 100 USD');
  });

  test('PaymentProxy delegates to PayPalService correctly', () => {
    const paymentProxy = new PaymentProxy();
    paymentProxy.processPayment(100, 'USD');
    expect(console.log).toHaveBeenCalledWith('Preparing data for PayPal format...');
    expect(console.log).toHaveBeenCalledWith('Processing payment through PayPal: 100 USD');
  });

  test('Client makes payment using PaymentProxy', () => {
    const client = new Client(new PaymentProxy());
    client.makePayment(150, 'USD');
    expect(console.log).toHaveBeenCalledWith('Preparing data for PayPal format...');
    expect(console.log).toHaveBeenCalledWith('Processing payment through PayPal: 150 USD');
  });
  test('PayPalService throws error on unsupported currency', () => {
    const payPalService = new PayPalService();
    const testUnsupportedCurrency = () => {
      payPalService.processPayment(100, 'EUR'); // Attempt to process in Euros
    };
    expect(testUnsupportedCurrency).toThrow("Unsupported currency: EUR");
  });

});
