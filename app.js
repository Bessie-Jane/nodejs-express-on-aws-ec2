const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('<h1>NodeExpress Demo App V2</h1> <h4>Message: Success V2</h4> <p>Version 1.12</p>');
})

app.get('/products', (req, res) => {
  res.send([
    {
      productId: '101',
      price: 100
    },
    {
      productId: '102',
      price: 150
    },
      {
      productId: '103',
      price: 200
    },
      {
      productId: '104',
      price: 250
    },
      {
      productId: '105',
      price: 300
    }
  ])
})

app.listen(port, ()=> {
  console.log(`Demo app is up and listening to port: ${port}`);
})
 
