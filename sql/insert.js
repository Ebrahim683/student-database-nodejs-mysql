function insert(db, res, name, roll, email, password, number, classes, sec) {

    const query = `insert into student_info set ?`;
    db.query(query, { name: name, roll: roll, email: email, password: password, number: number, class: classes, section: sec }, (error) => {
        if (error) {
            console.log(error);
            res.json({
                status: 'fail',
                message: 'registration fail',
            });

        } else {
            console.log('data inserted');
            const json = {
                status: 'registration success',
                message: {
                    name: name,
                    roll: roll,
                    email: email,
                    number: number,
                    classes: classes,
                    sec: sec,
                },
            };
            res.json(json);
        }
    });
}

module.exports = insert;