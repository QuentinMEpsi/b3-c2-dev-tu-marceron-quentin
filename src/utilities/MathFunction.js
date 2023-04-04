
export default class MathFunction {

    static parseOperation(value) {
        let splitElement = value.split(' ');
        const finalElement = splitElement.filter((item) => item !== '');

        return {
            operator: finalElement[1],
            firstNumber: parseFloat(finalElement[0]),
            secondNumber: parseFloat(finalElement[2]),
        };
    }

    static addOperation(firstNumber, operator, secondNumber) {
        const operatorSymbol = {
            '+': (firstNumber + secondNumber),
            '-': (firstNumber - secondNumber),
            '*': (firstNumber * secondNumber),
            '/': (firstNumber / secondNumber),
            '^': (firstNumber ** secondNumber),
            '%': (firstNumber * 0.01),
            '²': (firstNumber * firstNumber),
            '√': (Math.sqrt(firstNumber)),
            '+/-': (firstNumber * -1),
        }

        return operatorSymbol[operator];
    }
}