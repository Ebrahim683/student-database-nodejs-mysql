const jwt = require('jsonwebtoken');
const profile = require('./user/profile');
const updateProfile = require('./user/update_profile');


function checkLogin(req, res, db, privateKey, progress) {
    const { authorization } = req.headers;
    try {
        const token = authorization.split(' ')[1];
        const decoded = jwt.verify(token, privateKey);
        if (progress == 'profile') {
            profile(req, res, db);
        } else if (progress == 'update') {
            updateProfile(db, req, res);
        } else {
            res.json({
                status: 'fail',
                message: 'Something went wrong'
            });
        }
    } catch (e) {
        console.log(e);
        res.json({
            status: 'fail',
            message: 'Unauthorized user'
        });
    }
}

module.exports = checkLogin;