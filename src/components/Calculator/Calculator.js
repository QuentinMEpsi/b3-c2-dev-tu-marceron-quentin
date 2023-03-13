
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
import {useState} from "react";

export default function Calculator() {
    const [calcValue, setCalcValue] = useState('');
    const [finalValue, setfinalValue] = useState('');

    const handleAdd = (value) => {
        setCalcValue(calcValue + value);
    }
    const handleRemove = () => {
        setCalcValue('');
        setfinalValue('');
    }
    const handleCancel = () => {
        setCalcValue(calcValue.substring(0, calcValue.length - 1));
    }
    const handleEqual = (value) => {
        setfinalValue(finalValue + calcValue + value);
        setCalcValue('');
    }

    return (
        <Stack className={styles.Calculator}>
            <Stack px={1} justifyContent={'center'} sx={{backgroundColor: '#1A2027FF', height: '75px'}}>
                <Typography color={'white'} fontSize={'10px'} textAlign={'right'}>{finalValue ? finalValue : 0}</Typography>
                <Typography color={'white'} fontSize={'20px'} fontWeight={'bold'} textAlign={'right'}>{calcValue ? calcValue : '---'}</Typography>
            </Stack>
            <Stack>
                <Stack flexDirection={'column'}>
                    <Stack flexDirection={'row'}>
                        <Button variant={'contained'} onClick={handleRemove}>CE</Button>
                        <Button variant={'contained'} onClick={() => handleEqual('^')}>^</Button>
                        <Button variant={'contained'} onClick={() => handleEqual('/')}>/</Button>
                        <Button color={'error'} variant={'contained'} onClick={handleCancel}><Backspace /></Button>
                    </Stack>
                    <Stack flexDirection={'row'}>
                        <Button variant={'outlined'} onClick={() => handleAdd(9)}>9</Button>
                        <Button variant={'outlined'} onClick={() => handleAdd(8)}>8</Button>
                        <Button variant={'outlined'} onClick={() => handleAdd(7)}>7</Button>
                        <Button variant={'contained'} onClick={() => handleEqual('*')}><Close /></Button>
                    </Stack>
                    <Stack flexDirection={'row'}>
                        <Button variant={'outlined'} onClick={() => handleAdd(6)}>6</Button>
                        <Button variant={'outlined'} onClick={() => handleAdd(5)}>5</Button>
                        <Button variant={'outlined'} onClick={() => handleAdd(4)}>4</Button>
                        <Button variant={'contained'} onClick={() => handleEqual('-')}><Remove /></Button>
                    </Stack>
                    <Stack flexDirection={'row'}>
                        <Button variant={'outlined'} onClick={() => handleAdd(3)}>3</Button>
                        <Button variant={'outlined'} onClick={() => handleAdd(2)}>2</Button>
                        <Button variant={'outlined'} onClick={() => handleAdd(1)}>1</Button>
                        <Button variant={'contained'} onClick={() => handleEqual('+')}><Add /></Button>
                    </Stack>
                    <Stack flexDirection={'row'}>
                        <Button variant={'contained'}><Iso /></Button>
                        <Button variant={'outlined'} onClick={() => handleAdd(0)}>0</Button>
                        <Button variant={'contained'} onClick={() => handleAdd('.')}>.</Button>
                        <Button color={'warning'} variant={'contained'} onClick={() => handleEqual('=')}>=</Button>
                    </Stack>
                </Stack>
            </Stack>
        </Stack>
    );
}
