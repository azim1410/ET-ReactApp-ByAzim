import React from "react";
import { useState } from "react";
import {Box, TextField, Button} from '@mui/material'

export default function TransactionCard({setTransactions}){
    const[text, setText] = useState('')
    const[amount, setAmount] = useState()

    function addTrans(){
        const transaction = {
            id: Math.floor(Math.random()*100000),
            text:text,
            amount: +amount
        }
        setTransactions(prev => [transaction, ...prev])
    }
    return (
        <div className="inpcard">
            <TextField className="TF" label="Tag" onChange={(e)=>setText(e.target.value)}/>
            <TextField className="TF" id="outlined-basic" label="Amount" onChange={(e)=>setAmount(e.target.value)}/>
            <Button className="inpbtn" variant="contained" onClick={()=>addTrans()}>Add Transaction</Button>
        
        </div>
    )
}