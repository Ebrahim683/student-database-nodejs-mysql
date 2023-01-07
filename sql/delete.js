function deleteUserQuery(db, req, res) {
    const email = req.query.email;
    const deleteQuery = `DELETE FROM student_info WHERE email = "${email}"`;
    db.query(deleteQuery, (error, result) => {
        if (error) {
            console.log(error);
            res.json({
                status: 'fail',
                message: `fail to delete ${email}`,
            });
        } else {
            res.json({
                status: 'success',
                message: `${email} deleted`,
            });
        }
    });
}

module.exports = deleteUserQuery;