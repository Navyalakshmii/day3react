import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
      <div>
          <AppBar>
              <Toolbar>
                  <Typography variant='h5'>myapp</Typography><br /> <br />
                  <Link to='/Login'>
                  <Button variant="contained" > Login </Button>  
                  </Link>
                  <Link to='/Signup'>
                      <Button variant="contained"> Signup </Button> 
                  </Link>
                  <Link to='/State'>
                      <Button variant='contained'>State</Button>
                  </Link>
                  <Link to='/Counter'>
                      <Button variant='contained'>Counter</Button>
                  </Link>
                  <Link to='/Naming'>
                      <Button variant='contained'>Naming</Button>
                  </Link>
                  <Link to='/Api'>
                      <Button variant='contained'>Api</Button>
                  </Link>
                  <Link to='/Pokemon'>
                      <Button variant='contained'>Pokemon</Button>
                  </Link>
                 
                  
              </Toolbar>
                  
          </AppBar>
          <br /><br /><br />
    </div>
  )
}

export default Navbar