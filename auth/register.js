const insert = require('../sql/insert');
const bcrypt = require('bcryptjs');

const { json } = require("body-parser");
function register(req, res, db) {
    const salt = bcrypt.genSaltSync(10);
    let name = req.query.name;
    let roll = req.query.roll;
    let email = req.query.email;
    let password = bcrypt.hashSync(req.query.password, salt);
    let number = req.query.number;
    let classes = req.query.class;
    let sec = req.query.sec;
    insert(db, res, name, roll, email, password, number, classes, sec);

}

module.exports = register