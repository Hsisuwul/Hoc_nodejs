const express = require('express');
const path = require('path');
const app = express()
const { notFound, errorHandler } = require('./errorcheck/error.js');
const connection = require('./config/Database.js')
const configviewengine = require('./config/viewengine')
const webrouter = require('./router/web.js')
require('dotenv').config()



const hostname = process.env.host_name || 'localhost'
const port = process.env.port || '9009'
configviewengine(app)
app.use('/', webrouter)
app.use(notFound);
//app.use(errorHandler);

app.use(express.json()); // Used to parse JSON bodies
app.use(express.urlencoded()); //Parse URL-encoded bodies


app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);

})