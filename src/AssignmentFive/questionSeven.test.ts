import { describe, beforeEach, it, expect, vi } from 'vitest';
import { MessageBoard, ConcreteRider } from './questionSeven';

describe('MessageBoard Functionality', () => {
    let board: MessageBoard;
    let rider1: ConcreteRider;
    let rider2: ConcreteRider;

    beforeEach(() => {
        board = new MessageBoard();
        rider1 = new ConcreteRider('John');
        rider2 = new ConcreteRider('Doe');
        
        vi.spyOn(console, 'log').mockImplementation(() => {});
    });

    it('should notify all registered observers when a message is posted', () => {
        board.register(rider1);
        board.register(rider2);
        board.postMessage('Sale starts tomorrow!');

        expect(console.log).toHaveBeenCalledWith('MessageBoard: New message posted - "Sale starts tomorrow!"');
        expect(console.log).toHaveBeenCalledWith('John received a message: "Sale starts tomorrow!"');
        expect(console.log).toHaveBeenCalledWith('Doe received a message: "Sale starts tomorrow!"');
    });

    it('should not notify unregistered observers', () => {
        board.register(rider1);
        board.register(rider2);
        board.unregister(rider1);
        board.postMessage('Sale ends today!');

        expect(console.log).toHaveBeenCalledWith('Doe received a message: "Sale ends today!"');
        expect(console.log).not.toHaveBeenCalledWith('John received a message: "Sale ends today!"');
    });

    // Intentionally failing test
    it('should fail when notifying a removed rider', () => {
        board.register(rider1);
        board.unregister(rider1);
        board.postMessage('New product launch!');

        expect(console.log).toHaveBeenCalledWith('John received a message: "New product launch!"');
    });
});
