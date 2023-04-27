// controller
module.exports.home_get = (req, res) => {
    res.render('index', { title: 'Hjem'});
};

module.exports.login_get = (req, res) => {
    res.render('login', { title: 'Logg inn' });
};

module.exports.admin_get = (req, res) => {
    res.render('admin', { title: 'Admin' });
};

module.exports.produkter_get = (req, res) => {
    res.render('produkter', { title: 'Produkter' });
};

module.exports.logout_get = (req, res) => {
    res.render('logg-ut', { title: 'Logg ut' });
};

module.exports.veileder_get = (req, res) => {
    res.render('veileder', { title: 'Veileder'});
};

module.exports.adminveilder_get = (req, res) => {
    res.render('adminveileder', { title: 'Admin Veileder' });
};