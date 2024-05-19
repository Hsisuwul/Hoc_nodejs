const { json } = require('express');
const connection = require('../config/Database.js')



const Database = (req, res) => {
    let user = [];
    connection.query(
        'SELECT * FROM `Users`',
        function (err, results, fields) {
            user = results
            //console.log(results); // results contains rows returned by server
            res.send(JSON.stringify(user));
        }
    );
}


const gethomepage = (req, res) => {

    return res.render('index.ejs');
}
const about = (req, res) => {

    res.send('about');
}
const login = (req, res) => {

    res.render('login.ejs');
}
const info = (req, res) => {

    res.send('login');
}
const test = (req, res) => {

    res.render('index.ejs');
}
const createuser = (req, res) => {
    console.log(req.body)
    res.send('create new user')
}


module.exports = {

    gethomepage,
    about,
    info,
    login,
    test,
    Database,
    createuser
}