import { describe, it, expect } from 'vitest';
import { Smartphone, MobileWeb, SmartphoneAdapter, MobileWebAdapter, App } from './questionTwelve';

describe('Question Twelve Test Cases', () => {
    it('Smartphone Adapter should correctly delegate operations', () => {
        const smartphone = new Smartphone();
        const adapter = new SmartphoneAdapter(smartphone);
        const app = new App(adapter);

        expect(app.perform_operation()).toBe("Operation performed by Smartphone");
    });

    it('Mobile Web Adapter should correctly delegate operations', () => {
        const mobileWeb = new MobileWeb();
        const adapter = new MobileWebAdapter(mobileWeb);
        const app = new App(adapter);

        expect(app.perform_operation()).toBe("Operation performed by Mobile Web");
    });

    // Intentionally failing test
    it('should fail when the wrong operation is returned', () => {
        const smartphone = new Smartphone();
        const adapter = new SmartphoneAdapter(smartphone);
        const app = new App(adapter);

        expect(app.perform_operation()).toBe("Operation performed by Mobile Web");
    });
});
