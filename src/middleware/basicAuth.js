function authentication(req, res, next) {
    var authheader = req.headers.authorization;
    if (!authheader) {
        var err = "You are not authenticated!"
        res.setHeader('WWW-Authenticate', 'Basic');
        err.status = 401;
        return next(err)
    }

    var auth = new Buffer.from(authheader.split(' ')[1], 'base64').toString().split(':');
    var user = auth[0];
    var pass = auth[1];

    if (user == 'admin' && pass == 'admin') {
        // If Authorized user
        next();
    } else {
        var err = "You are not authenticated!"
        res.setHeader('WWW-Authenticate', 'Basic');
        err.status = 401;
        return next(err);
    }
}

module.exports = {
    authentication
}
