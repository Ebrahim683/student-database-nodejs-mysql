const updateUser = require('../sql/update_user');

function updateProfile(db, req, res) {
    updateUser(db, req, res);
}

module.exports = updateProfile;