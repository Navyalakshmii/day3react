import { Button, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'

const Naming = () => {
    var [x, setx] = useState()
    const inpt1 = () => {
        setx("React")
    }
    const inpt2 = () => {
        setx("Vue")
    }
    const inpt3 = () => {
        setx("Angular")
    }

    // use effect
    // useEffect(()=>{},[])
    useEffect(() => { inpt2()},[])
  return (
      <div>
          <Typography variant='h4'> Welcome {x}</Typography><br /><br />
          <Button variant='contained' color='primary' onClick={inpt1}>React</Button>&nbsp; &nbsp; &nbsp; &nbsp;
          <Button variant='contained' color='secondary' onClick={inpt2}>Vue</Button>&nbsp; &nbsp; &nbsp; &nbsp;
          <Button variant='contained' color='success' onClick={inpt3}>Angular</Button>&nbsp; &nbsp; &nbsp; &nbsp;    
         
      </div>
  )
}

export default Naming