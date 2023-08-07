import React, { useState } from 'react'
import {Box, Button, TextField, Typography,styled} from '@mui/material'


const Container = styled(Box)`
    display: flex;
    flex-direction: column;
    & > h5, & > div, & > button {
            margin-top: 30px;
    }
`

const NewTransactions = ({setTransactions}) => {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState('');

    const addTransaction = e => {
        const transaction = {
            id: Math.floor(Math.random() * 100000000),
            text: text,
            amount: +amount
        }
        setTransactions(prev => [transaction, ...prev]);
    }
  return (
    <Container>
        <Typography variant='h5'>New Transactions</Typography>
        <TextField label="Enter expense" onChange = {(e) => setText(e.target.value)}></TextField>
        <TextField label="Enter amount" onChange = {(e) => setAmount(e.target.value)}></TextField>
        <Button variant='contained' onClick={addTransaction}>Add Transactions</Button>
    </Container>
  )
}

export default NewTransactions