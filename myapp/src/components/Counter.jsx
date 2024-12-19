
import { Button } from '@mui/material'
import React, { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0)
    const incrementCounter =() => {
        setCount(count + 1)
    }
    
        const decrementCounter =() =>{
            setCount(count -1)
    }
    
  return (
      <div>
          <p>CurrentCounter { count}</p>
          <Button onClick={incrementCounter}> increment</Button>
          <Button onClick={decrementCounter}> decrementr</Button>

        
    </div>
  )
}

export default Counter