
import MathFunction from "./MathFunction";
import {fireEvent, render, screen} from "@testing-library/react";
import Calculator from "../components/Calculator/Calculator";

describe('Test the calcul oppérations', () => {

    test('a+b | Addition opération', () => {
        expect(MathFunction.addOperation(6, '+',1)).toBe(7);
        expect(MathFunction.addOperation(0, '+',0)).toBe(0);
        expect(MathFunction.addOperation(0, '+',18)).toBe(18);
        expect(MathFunction.addOperation(1, '+',-4)).toBe(-3);
    });

    test('a-b | Substraction opération', () => {
        expect(MathFunction.addOperation(100,'-',45)).toBe(55);
        expect(MathFunction.addOperation(100,'-',0)).toBe(100);
        expect(MathFunction.addOperation(0,'-',5)).toBe(-5);
        expect(MathFunction.addOperation(45,'-',100)).toBe(-55);
    });

    test('a*b | Multiplication opération', () => {
        expect(MathFunction.addOperation(2,'*',5)).toBe(10);
        expect(MathFunction.addOperation(2,'*',0)).toBe(0);
        expect(MathFunction.addOperation(0,'*',5)).toBe(0);
        expect(MathFunction.addOperation(-2,'*',-5)).toBe(10);
        expect(MathFunction.addOperation(-2,'*',5)).toBe(-10);
    });

    test('a/b | Division opération', () => {
        expect(MathFunction.addOperation(4,'/',2)).toBe(2);
        expect(MathFunction.addOperation(4,'/',4)).toBe(1);
        expect(MathFunction.addOperation(-2,'/',2)).toBe(-1);
        expect(MathFunction.addOperation(4,'/',-2)).toBe(-2);

        expect(MathFunction.addOperation(4,'/',0)).toBe(Infinity);
        expect(MathFunction.addOperation(0,'/',4)).toBe(0);
    });

    test('x^y | Calculate power of a number', () => {
        expect(MathFunction.addOperation(2,'^', 2)).toBe(4);
        expect(MathFunction.addOperation(2,'^', 0)).toBe(1);
        expect(MathFunction.addOperation(0,'^', 2)).toBe(0);
        expect(MathFunction.addOperation(2,'^', -2)).toBe(0.25);
        expect(MathFunction.addOperation(-2,'^', 2)).toBe(4);
    });

    test('% | Calculate percentage of a number', () => {
        expect(MathFunction.addOperation(50,'%')).toBe(0.50);
        expect(MathFunction.addOperation(0,'%')).toBe(0);
        expect(MathFunction.addOperation(-50,'%')).toBe(-0.50);
    });

    test('x² | Calculate square of a number', () => {
        expect(MathFunction.addOperation(50,'²')).toBe(2500);
        expect(MathFunction.addOperation(0,'²')).toBe(0);
        expect(MathFunction.addOperation(-50,'²')).toBe(2500);
    });

    test('√x | Calculate square root of a number', () => {
        expect(MathFunction.addOperation(2500,'√')).toBe(50);
        expect(MathFunction.addOperation(0,'√')).toBe(0);
        expect(MathFunction.addOperation(-2500,'√')).toBe(NaN);
    });

    test('+/- | Change sign of a number', () => {
        expect(MathFunction.addOperation(-2500,'+/-')).toBe(2500);
        expect(MathFunction.addOperation(0,'+/-')).toBe(-0);
        expect(MathFunction.addOperation(2500,'+/-')).toBe(-2500);
    });

});

describe('Graphic test - remove button', () => {

    test('Add numbers test', () => {
        render(<Calculator />)
        const calcValue = screen.getByTestId('calcValue');

        const button1 = screen.getByTestId('button1');
        const button5 = screen.getByTestId('button5');

        expect(calcValue.textContent).toBe('---');

        expect(button5).toBeInTheDocument();
        fireEvent.click(button5);

        expect(calcValue.textContent).toBe('5');

        expect(button1).toBeInTheDocument();
        fireEvent.click(button1);
        expect(calcValue.textContent).toBe('51');
    });

    test('Cancel number test', () => {
        render(<Calculator />)

        const buttonRemove = screen.getByTestId('buttonCancel');
        const button1 = screen.getByTestId('button1');
        const button5 = screen.getByTestId('button5');
        const calcValue = screen.getByTestId('calcValue');

        fireEvent.click(button5);
        fireEvent.click(button1);

        expect(buttonRemove).toBeInTheDocument();
        fireEvent.click(buttonRemove);

        expect(calcValue.textContent).toBe('5');
    });

    test('Delete number test', () => {
        render(<Calculator />);

        const buttonDelete = screen.getByTestId('buttonDelete');
        const button1 = screen.getByTestId('button1');
        const button5 = screen.getByTestId('button5');
        const calcValue = screen.getByTestId('calcValue');

        fireEvent.click(button5);
        fireEvent.click(button1);

        expect(buttonDelete).toBeInTheDocument();
        fireEvent.click(buttonDelete);

        expect(calcValue.textContent).toBe('---');
    });

    test('Remove number test', () => {
        render(<Calculator />);

        const buttonRemove = screen.getByTestId('buttonRemove');
        const button1 = screen.getByTestId('button1');
        const button5 = screen.getByTestId('button5');
        const calcValue = screen.getByTestId('calcValue');
        const finalValue = screen.getByTestId('finalValue');

        fireEvent.click(button5);
        fireEvent.click(button1);

        expect(buttonRemove).toBeInTheDocument();
        fireEvent.click(buttonRemove);

        expect(calcValue.textContent).toBe('---');
        expect(finalValue.textContent).toBe('0');
    });

});
