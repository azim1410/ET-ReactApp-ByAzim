import React from "react";
import { ListItem , ListItemText, ListItemIcon} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';

export default function Transa({transaction, setTransactions, transactions}){
    const color = transaction.amount > 0 ? '#8fe889' : '#e84d4f';
    function deleteTr(id){
        setTransactions(transactions.filter(transaction => transaction.id !== id))
    }
    return (
        <ListItem className="LI" style={{background : `${color}`, color:'#fff'}}>
            <ListItemIcon>
                <DeleteIcon onClick={()=>deleteTr(transaction.id)} />
                </ListItemIcon>
                <ListItemText className="LItext">{transaction.text}</ListItemText>
                <ListItemText>{transaction.amount}</ListItemText>
        </ListItem> 
    )
}