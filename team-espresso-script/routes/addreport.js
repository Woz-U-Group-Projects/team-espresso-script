/*Createing record*/

router.post('/new', function(req, res, next) {
    res.locals.connection.query('insert into cars(vin,miles) values(+req.body.car+,+req.body.miles+)', function (error, results, fields) {
        if(error) throw error;
        res.send(JSON.stringify(results));
    });
});

/*View records*/
router.get('/miles', function(req, res, next) {
    res.locals.connection.query('select * from cars', function (error, results, fields) {
        if(error) throw error;
        res.send(JSON.stringify(results));
    });
});



