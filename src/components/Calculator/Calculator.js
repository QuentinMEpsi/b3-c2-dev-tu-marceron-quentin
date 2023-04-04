
import {useState} from "react";
import MathFunction from "../../utilities/MathFunction";

import {
    Button,
    Stack, Typography
} from "@mui/material";
import {
    Add, Backspace,
    Close, Iso,
    Remove
} from "@mui/icons-material";

import styles from './Calculator.module.css';

export default function Calculator() {
    const [calcValue, setCalcValue] = useState('');
    const [finalValue, setFinalValue] = useState('');

    const handleAdd = (value) => {
        setCalcValue(calcValue + value);
    };
    const handleCancel = () => {
        setCalcValue(calcValue.substring(0, calcValue.length - 1));
    };
    const handleRemove = () => {
        setCalcValue('');
    };
    const handleTotallyRemove = () => {
        setCalcValue('');
        setFinalValue('');
    };
    const handleOperator = (operator) => {
        if(calcValue) {
            if(finalValue) {
                const parseValue = MathFunction.parseOperation(finalValue + ' ' + calcValue);
                setFinalValue(MathFunction.addOperation(parseValue.firstNumber, parseValue.operator, parseValue.secondNumber) + ' ' + operator);
                setCalcValue('')
            }
            else {
                setFinalValue(finalValue + ' ' + calcValue + ' ' + operator);
                setCalcValue('');
            }
        }
    };
    const handleComplexOperator = (operator) => {
        if(calcValue) {
            setCalcValue(MathFunction.addOperation(calcValue, operator));
        }
    };
    const handleEqual = () => {
        if(calcValue !== '') {
            setFinalValue(finalValue + ' ' + calcValue);
            const parseValue = MathFunction.parseOperation(finalValue + ' ' + calcValue);

            setCalcValue(MathFunction.addOperation(parseValue.firstNumber, parseValue.operator, parseValue.secondNumber));
        }
    };

    return (
        <Stack className={styles.Calculator}>
            <Stack px={1} justifyContent={'center'} sx={{backgroundColor: '#1A2027FF', height: '100px'}}>
                <Typography data-testid={'finalValue'} color={'white'} fontSize={'10px'} textAlign={'right'}>{finalValue ? finalValue : 0}</Typography>
                <Typography data-testid={'calcValue'} color={'white'} fontSize={'20px'} fontWeight={'bold'} textAlign={'right'}>{calcValue ? calcValue : '---'}</Typography>
            </Stack>
            <Stack>
                <Stack flexDirection={'column'}>
                    <Stack flexDirection={'row'}>
                        <Button color={'warning'} variant={'contained'} onClick={() => handleOperator('^')}>^</Button>
                        <Button color={'warning'} variant={'contained'} onClick={() => handleComplexOperator('²')}>x²</Button>
                        <Button color={'warning'} variant={'contained'} onClick={() => handleComplexOperator('√')}>√x</Button>
                        <Button color={'warning'} variant={'contained'} onClick={() => handleComplexOperator('%')}>%</Button>
                    </Stack>
                    <Stack flexDirection={'row'}>
                        <Button data-testid={'buttonDelete'} variant={'contained'} onClick={handleRemove}>C</Button>
                        <Button data-testid={'buttonRemove'} variant={'contained'} onClick={handleTotallyRemove}>CE</Button>
                        <Button variant={'contained'} onClick={() => handleOperator('/')}>/</Button>
                        <Button data-testid={'buttonCancel'} color={'error'} variant={'contained'} onClick={handleCancel}><Backspace /></Button>
                    </Stack>
                    <Stack flexDirection={'row'}>
                        <Button data-testid={'button7'} variant={'outlined'} onClick={() => handleAdd(7)}>7</Button>
                        <Button data-testid={'button8'} variant={'outlined'} onClick={() => handleAdd(8)}>8</Button>
                        <Button data-testid={'button9'} variant={'outlined'} onClick={() => handleAdd(9)}>9</Button>
                        <Button variant={'contained'} onClick={() => handleOperator('*')}><Close /></Button>
                    </Stack>
                    <Stack flexDirection={'row'}>
                        <Button data-testid={'button4'} variant={'outlined'} onClick={() => handleAdd(4)}>4</Button>
                        <Button data-testid={'button5'} variant={'outlined'} onClick={() => handleAdd(5)}>5</Button>
                        <Button data-testid={'button6'} variant={'outlined'} onClick={() => handleAdd(6)}>6</Button>
                        <Button variant={'contained'} onClick={() => handleOperator('-')}><Remove /></Button>
                    </Stack>
                    <Stack flexDirection={'row'}>
                        <Button data-testid={'button1'} variant={'outlined'} onClick={() => handleAdd(1)}>1</Button>
                        <Button data-testid={'button2'} variant={'outlined'} onClick={() => handleAdd(2)}>2</Button>
                        <Button data-testid={'button3'} variant={'outlined'} onClick={() => handleAdd(3)}>3</Button>
                        <Button variant={'contained'} onClick={() => handleOperator('+')}><Add /></Button>
                    </Stack>
                    <Stack flexDirection={'row'}>
                        <Button variant={'contained'} onClick={() => handleComplexOperator('+/-')}><Iso /></Button>
                        <Button data-testid={'button0'} variant={'outlined'} onClick={() => handleAdd(0)}>0</Button>
                        <Button variant={'contained'} onClick={() => handleAdd('.')}>.</Button>
                        <Button data-testid={'buttonEqual'} color={'warning'} variant={'contained'} onClick={handleEqual}>=</Button>
                    </Stack>
                </Stack>
            </Stack>
        </Stack>
    );
}
