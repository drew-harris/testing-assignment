import { describe, beforeEach, test, expect, vi } from 'vitest';
import { MessageBoard, ConcreteRider } from './questionSeven';

describe('Question Seven Test Cases', () => {
    let board: MessageBoard;
    let rider1: ConcreteRider;
    let rider2: ConcreteRider;

    beforeEach(() => {
        board = new MessageBoard();
        rider1 = new ConcreteRider('John');
        rider2 = new ConcreteRider('Doe');
        
        vi.spyOn(console, 'log').mockImplementation(() => {});
    });

    test('should notify all registered observers when a message is posted', () => {
        board.register(rider1);
        board.register(rider2);
        board.postMessage('Sale starts tomorrow!');

        expect(console.log).toHaveBeenCalledWith('MessageBoard: New message posted - "Sale starts tomorrow!"');
        expect(console.log).toHaveBeenCalledWith('John received a message: "Sale starts tomorrow!"');
        expect(console.log).toHaveBeenCalledWith('Doe received a message: "Sale starts tomorrow!"');
    });

    test('should not notify unregistered observers', () => {
        board.register(rider1);
        board.register(rider2);
        board.unregister(rider1);
        board.postMessage('Sale ends today!');

        expect(console.log).toHaveBeenCalledWith('Doe received a message: "Sale ends today!"');
        expect(console.log).not.toHaveBeenCalledWith('John received a message: "Sale ends today!"');
    });
    test('should throw an error when trying to post an empty message', () => {
        const postEmptyMessage = () => {
            board.postMessage(''); // Attempt to post an empty message
        };

        expect(postEmptyMessage).toThrow("Cannot post an empty message");
    });

});
