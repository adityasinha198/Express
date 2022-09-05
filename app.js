const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')

const app = express();
app.use(cors())
const sequelize = require('./util/database')

const User = require('./models/user')


const adminRoutes = require('./routes/admin');
app.use(bodyParser.json({ extended:false}))
app.use(bodyParser.urlencoded({ extended: false }));


app.use('/admin', adminRoutes);

sequelize
.sync()
.then(result => {
    app.listen(8000)
})
 .catch(err => {
    console.log(err)
 })//yes