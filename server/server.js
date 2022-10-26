const express = require('express');
const app = express();
const router = require('./src/Routes/Router');
const dotenv = require('dotenv');
dotenv.config();

app.use(express.json());
app.use('/coin-market-cap', router);

app.listen(process.env.PORT, () => console.log("Aplication Started On Port: " + process.env.PORT));