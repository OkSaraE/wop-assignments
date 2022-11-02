'use strict';
const express = require('express');
const userRoute = require('./routes/userRoute');
const app = express();
const port = 3000;

app.use('/user', userRoute);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));