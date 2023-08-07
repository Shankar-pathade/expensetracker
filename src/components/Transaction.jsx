import { ListItem, ListItemIcon, ListItemText, styled} from '@mui/material'
import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';

const Detail= styled(ListItem)`
    display: flex;
    marginTop: 10px;
    border: 1px solid #F6F6F6;
`;


const Transaction = ({transaction, setTransactions,transactions}) => {
    const color = transaction.amount > 0 ? "Green" : "Red";

    const deleteData = (id) => {
        setTransactions(transactions.filter(transaction => transaction.id !== id));
    }

  return (
    <Detail style={{background: `${color}`, color: "#fff"}}>
        <ListItemIcon>
            <DeleteIcon onClick={() => deleteData(transaction.id)} style={{cursor:"pointer"}}/>
        </ListItemIcon>
        <ListItemText>{transaction.text}</ListItemText> 
        <ListItemText>{transaction.amount}</ListItemText>
    </Detail>
  )
}

export default Transaction