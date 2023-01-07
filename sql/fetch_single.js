const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

function fetchSingle(db, req, res, email, password, privateKey) {
    let sqlEmail = '';
    let sqlPassword = '';

    const fetchSingleQuery = `SELECT * FROM student_info WHERE email = "${email}"`;
    db.query(fetchSingleQuery, async (error, result) => {
        if (error) {
            console.log(error);
            res.json({
                status: 'fail',
                message: 'invalid credential',
            });
        } else {

            Object.keys(result).forEach((key) => {
                const data = result[key];
                sqlEmail = data.email;
                sqlPassword = data.password;
                console.log(sqlPassword);
            });

            var match = await bcrypt.compare(password, sqlPassword);
            if (email == sqlEmail && match) {
                let params = {
                    email: email,
                    password: password
                };
                var token = jwt.sign(params, privateKey, { expiresIn: '7d' });
                const json = {
                    status: 'success',
                    token: token,
                };
                res.json(json);
            } else {
                res.json({
                    status: 'fail',
                    message: 'invalid credential',
                });
            }

        }
    });

}

module.exports = fetchSingle;