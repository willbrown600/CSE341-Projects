exports.postStyle = (req, res, next) => {
    req.session.style = req.body.css_style;
    res.redirect('./views/pages/ta05');

}
exports.postCounter = (req, res, next) => {
    req.session.counter += Number(req.body.constant);
    res.redirect('./views/pages/ta05');
}
exports.postReset = (req, res, next) => {
    if (req.body.reset === 'true') {
        req.session.destroy(() => {
            res.redirect('./views/pages/ta05');
        });
    }
}

exports.getIndex = (req, res, next) => {
    if (req.session.counter === undefined) {
        req.session.counter = 0;
    }
    if (!req.session.counter === undefined) {
        req.session.counter = 0;
    }
    res.render('/views/pages/ta05', {
        title: 'Team Activity 05',
        path: 'ta05',
        style: req.session.style,
        counter: req.session.counter,
    });

};