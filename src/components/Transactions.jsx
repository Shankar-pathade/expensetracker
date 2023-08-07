import { Divider, Typography, Box, List } from '@mui/material'
import React from 'react'
import Transaction from './Transaction'

const Transactions = ( {transactions, setTransactions}) => {
  return (
    <Box>
        <Typography variant='h5'>Transactions History</Typography>
        <Divider />
        <List>
            {
                transactions.map((transaction) => {
                    return(
                        <Transaction transaction={transaction} setTransactions={setTransactions} transactions={transactions}/>
                    )
                })
            }
        </List>
    </Box>
  )
}

export default Transactions