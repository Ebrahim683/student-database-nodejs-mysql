const deleteUserQuery = require('../sql/delete');

function deleteUser(db, req, res) {
    deleteUserQuery(db, req, res);
}

module.exports = deleteUser;