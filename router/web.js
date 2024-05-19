
const express = require('express')
const { gethomepage, about, info, login, test, Database, createuser, } = require('../Controller/homecontroller')
const router = express.Router()

router.get('/about', about)
router.get('/', gethomepage)
router.get('/info', info)
router.get('/login', login)
router.get('/test', test)
router.get('/database', Database)
router.post('/create-user', createuser)
module.exports = router