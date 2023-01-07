const fetchProfile = require('../sql/fetch_profile');

function profile(req, res, db) {
    const email = req.query.email;
    fetchProfile(db, req, res, email);
}

module.exports = profile;