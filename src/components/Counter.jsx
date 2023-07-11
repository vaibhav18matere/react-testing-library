import { useState } from "react";

export const Counter = () => {
     const [counter, setCounter] = useState(0);
     const [amount, setAmount] = useState(0);
     
     return (
          <>
               <h1>{counter}</h1>
               <button data-testid="btn" onClick={() => setCounter(count => count + 1)} >INCREMENT</button>
               <input type="number" name="amount" value={amount} onChange={(e) => setAmount(parseInt(e.target.value))} />
               <button onClick={()=>setCounter(amount)} >Set Amount</button>
          </>
     )
};