const express = require('express');
const dbContext = require('./models/db.js');
const router = require('./controller/productsController.js');

const app= express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/', router);

app.listen(9000, () => {
   console.log('server started');
});
