import React from "react";
import {Box, Typography, Divider, List, ListItem, ListItemText} from '@mui/material'
import Transa from "./Transa";
export default function Transactions({transactions , setTransactions}){

    return(
        <Box>
            <h2 style={{textAlign:"center"}}>Transaction history</h2>
            <Divider />
            <List>
                {
                    transactions.map(transaction => (
                        <Transa transaction={transaction} setTransactions={setTransactions} transactions={transactions} />
                        
                    ))
                }
                <Divider />
            </List>
        </Box>
    )
}