import { describe, test, expect, vi } from 'vitest';
import { PayPalService, PaymentProxy, Client } from './questionFour';

vi.spyOn(console, 'log').mockImplementation(() => {});

describe('Payment Processing Tests', () => {
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

  // Intentionally failing test
  test('PayPalService should fail with unsupported currency', () => {
    const payPalService = new PayPalService();
    payPalService.processPayment(50, 'Bitcoin'); // Assuming Bitcoin is not supported
    expect(console.log).toHaveBeenCalledWith('Processing payment through PayPal: 50 Bitcoin'); 
  });
});
