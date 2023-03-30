import React from "react";

export default function Balance({transactions}){
    const amount = transactions.map(transaction => transaction.amount);
    const total = amount.reduce((amount, item) => (amount+=item), 0).toFixed(2);
    return (
        <div className="balpart">
       <h2>
        Amount : {total}
       </h2>
       </div>
    )
}