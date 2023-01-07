const fetchSingle = require('../sql/fetch_single');

function login(req, res, db, privateKey) {
    const email = req.query.email;
    const password = req.query.password;
    fetchSingle(db, req, res, email, password, privateKey);
}

module.exports = login;