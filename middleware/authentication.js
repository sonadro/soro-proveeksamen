// packages
const jwt = require('jsonwebtoken');

// imports
const { user } = require('../models/user');
const { jwtSecret, jwtAdminSecret } = require('../config.json');

// administrator auth
const adminAuth = (req, res, next) => {
    const token = req.cookies.adminJWT;

    // check if token exists & is verified
    if (token) {
        jwt.verify(token, jwtAdminSecret, (err, decodedToken) => {
            if (err) {
                console.log(err);
                res.redirect('/login');
            } else {
                next();
            };
        });
    } else {
        res.redirect('/login');
    }
};

// sjekk om brukeren er logget inn
const loggedInCheck = (req, res, next) => {
    const adminToken = req.cookies.adminJWT;
    const kundeToken = req.cookies.kundeJWT;

    // sjekk om jwt er gyldig
    if (adminToken) {
        jwt.verify(adminToken, jwtAdminSecret, (err, decodedToken) => {
            if (err) {
                // ugyldig token
                console.error(err);
                res.locals.isAdmin = false;
                res.locals.loggedIn = false;
                next();
            } else {
                // logget inn
                res.locals.isAdmin = true;
                res.locals.loggedIn = true;
                next();
            };
        });
    } else if (kundeToken) {
        jwt.verify(kundeToken, jwtSecret, (err, decodedToken) => {
            if (err) {
                // ugyldig token
                console.error(err);
                res.locals.isAdmin = false;
                res.locals.loggedIn = false;
                next();
            } else {
                // logget inn
                res.locals.isAdmin = false;
                res.locals.loggedIn = true;
                next();
            };
        });
    } else {
        // brukeren er ikke logget inn
        res.locals.isAdmin = false;
        res.locals.loggedIn = false;
        next();
    };
};

// export functions
module.exports = { adminAuth, loggedInCheck };