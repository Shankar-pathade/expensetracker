import React from 'react'
import {Box, styled, Typography} from '@mui/material'


const BalanceText = styled(Typography)`
    font-size: 25px;
    margin-bottom: 20px;
`

const Balance = ({transactions}) => {
    const amount = transactions.map(transaction => transaction.amount);
    const total = amount.reduce((acc, amo) => (acc += amo), 0).toFixed(2);
  return (
    <Box>
        <BalanceText>₹ {total}</BalanceText>
    </Box>
  )
}

export default Balance