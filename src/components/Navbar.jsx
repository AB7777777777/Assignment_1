import React from 'react'
import {AppBar,Toolbar,Typography,Button} from '@mui/material'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
     <AppBar>
        <Toolbar>
          <Typography variant="h6" component="div" align='left' sx={{ flexGrow: 1 }}>My App</Typography>
          <Link to='/'>
          <Button variant='contained' color='error'>Home</Button>
          </Link> &nbsp; &nbsp;
          <Link to= '/Add'>
          <Button variant = 'contained' color='error'>Add Product</Button> 
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Navbar
