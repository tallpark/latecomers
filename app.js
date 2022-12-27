const express = require('express');
const app = express();

require('dotenv').config();

app.get('/', (req, res) => {
    res.send('Hello World')
  })

app.listen(process.env.PORT, () => {
    console.log(`서버 연결 port${process.env.PORT}`)
})