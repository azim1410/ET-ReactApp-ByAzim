import React from "react";

export default function ExpCard({transactions}){
    const amount = transactions.map(transaction => transaction.amount);
    const credit = amount.filter(item=>item>0).reduce((amount, item) => (amount+=item), 0).toFixed(2);
    const debit = amount.filter(item=>item<0).reduce((amount, item) => (amount+=item), 0).toFixed(2);
    return (
        <div className="exp">
            
            <div className="credit">{credit}</div>
            
            <div className="debit">{debit}</div>
        </div>
    )
}