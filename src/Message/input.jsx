import React, { useState } from 'react';
 
export  const Input = () => {
    
    const [change, setChange] = useState('')
    const changeInput = (e) => {
      setChange(e.target.value)
    }
    return (
        <div>
            <p>{change}</p>
            <input onChange={changeInput} />
        </div>
    )
} 











































