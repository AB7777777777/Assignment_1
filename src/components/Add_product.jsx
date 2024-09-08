import { Button, TextField } from '@mui/material'
import React from 'react'
import {InputAdornment} from '@mui/material'
const Add_product = () => {
  return (
    <div>
    <div className='head'>
        <br /><br />
          <h2>ADD PRODUCTS</h2> 
          </div>
          <form>  
      <TextField type="text" label="Product Name" variant="outlined" sx={{width:"480px"}} /> <br /> <br />
      <TextField type="file" id='image' accept="image/*" sx={{width:"480px"}}/> <br /><br />
      <TextField type="text" label="Product Price" variant="outlined" sx={{width:"480px"}}
      slotProps={{
        input: {
          startAdornment: <InputAdornment position="start">$</InputAdornment>,
        },
      }}
      /> <br /> <br />
      <TextField type="text" label="Product Category" variant="outlined" sx={{width:"480px"}} /> <br /> <br />
      <Button variant='contained' type="submit" sx={{width:"480px"}}>Add Product</Button>
      
      </form>

    </div>
  )
}


export default Add_product
