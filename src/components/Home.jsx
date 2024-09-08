import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid2';
import axios from 'axios';
const Home = () => {
  var [item, setItem] = useState([]);
  useEffect(()=> {
  axios.get("https://fakestoreapi.com/products")
  .then((res) => setItem(res.data))
  .catch((err) => console.log(err));
},[]);
  return (
    <div>
      <br /><br />
      <Grid container spacing={2}>
        {
          item.map((val) => {
        return(
        <Grid key={val.id} size={4}>
          <Card sx={{ maxWidth: 360,height:"100%" }}>
            <CardMedia
              sx={{ height: 180 }}
              image={val.image}
              title="Products"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {val.title}
              </Typography>
              <Typography variant='h5'>
               $ {val.price}
              </Typography>
              <Typography variant='h5'>
                {val.category}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        )
      }
        )
    }
      </Grid>
    </div>
  )
}
export default Home
