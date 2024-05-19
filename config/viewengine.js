const path = require('path');
const express = require('express')
const configviewengine = (app) => {
    console.log('./src', '/views')
    //app.set('Views', path.join('./src', 'Views'))
    app.set('./src', '/Views')
    app.set('view engine', 'ejs')
    app.use(express.static('public'))
}
module.exports = configviewengine