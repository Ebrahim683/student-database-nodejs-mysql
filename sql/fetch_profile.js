function fetchProfile(db, req, res, email) {

    const fetchSingleQuery = `SELECT * FROM student_info WHERE email = "${email}"`;
    db.query(fetchSingleQuery, async (error, result) => {
        if (error) {
            console.log(error);
            res.json({
                status: 'fail',
                message: 'invalid email',
            });
        } else {
            const json = {
                status: 'success',
                data: result,
            };
            res.json(json);
        }
    });

}

module.exports = fetchProfile;