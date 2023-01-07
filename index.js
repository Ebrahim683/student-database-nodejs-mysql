const express = require('express');
const mysql = require('mysql');
const dotenv = require('dotenv');
const register = require('./auth/register');
const login = require('./auth/login');
const checkLogin = require('./checkLogin');
const deleteUser = require('./user/delete_user');

const db = mysql.createConnection({
    host: process.env.SQL_HOST,
    database: 'student_database',
    user: 'root',
    password: process.env.SQL_PASSWORD,
});


dotenv.config({ path: './.env' });
const app = express();
app.use(express.json());

db.connect((error) => {
    if (error) {
        console.log(error);
    } else {
        console.log('sql connection success');
    }
});

//registration
app.post('/registration', (req, res) => {
    register(req, res, db);
});

//login
app.post('/login', (req, res) => {
    login(req, res, db, process.env.PRIVATEKEY);
});

//get profile
app.get('/profile', (req, res) => {
    checkLogin(req, res, db, process.env.PRIVATEKEY, 'profile');
});

//update profile
app.put('/update', (req, res) => {
    checkLogin(req, res, db, process.env.PRIVATEKEY, 'update');
});

//delete user
app.delete('/delete', (req, res) => {
    deleteUser(db, req, res);
});


app.listen(process.env.PORT, () => {
    console.log(`server listening on port ${process.env.PORT}`);
});