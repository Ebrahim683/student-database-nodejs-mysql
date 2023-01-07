const fetchProfile = require('./fetch_profile');
const bcrypt = require('bcryptjs');

function updateUser(db, req, res) {

    const salt = bcrypt.genSaltSync(10);
    const name = req.query.name;
    const roll = req.query.roll;
    const email = req.query.email;
    const password = bcrypt.hashSync(req.query.password, salt);
    const number = req.query.number;
    const classes = req.query.class;
    const sec = req.query.section;

    const updateQuery = `UPDATE student_info SET name = "${name}", roll = "${roll}", password = "${password}", number = "${number}", class = "${classes}", section = "${sec}" WHERE email = "${email}"`;
    db.query(updateQuery, (error, result) => {
        if (error) {
            console.log(error);
            res.json({
                status: 'fail',
                message: 'fail to update data',
            });
        } else {
            console.log(result);
            fetchProfile(db, req, res, email);
        }
    });
}

module.exports = updateUser;