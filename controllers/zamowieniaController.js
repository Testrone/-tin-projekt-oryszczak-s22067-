const ZamowienieRepository = require("../repository/sequelize/ZamowienieRepository");


exports.showZamowienieList = (req, res, next) => {
    ZamowienieRepository.getZamowienie()
        .then(zamowienie => {
            res.render('pages/Zamowienia/list', {
                zamowienie: zamowienie,
                navLocation: 'zamowienie'
            });
        });

}
exports.showAddZamowienieForm = (req, res, next) => {
    res.render('pages/Zamowienia/form', {
        zamowienie: {},
        pageTitle: 'Nowe Zamowienia',
        formMode: 'CreateNew',
        btnLabel: 'Dodaj Zamowienia',
        formAction: '/zamowienie/add',
        navLocation: 'zamowienie'
    });
}
exports.showEditZamowienieForm = (req, res, next) => {
    const zamId = req.params.idZamowienie;
    ZamowienieRepository.getZamowienieById(zamId)
        .then(zamowienie => {
            res.render('pages/Zamowienia/form', {
                zamowienie: zamowienie,
                formMode: 'edit',
                pageTitle: 'Edytuj zamowienie',
                btnLabel: 'Edytuj zamowienie',
                formAction: '/zamowienie/edit',
                navLocation: 'zamowienie'
            });
        });
};

exports.showZamowienieDetails = (req, res, next) => {
    const zamId = req.params.idZamowienie;
    ZamowienieRepository.getZamowienieById(zamId)
        .then(zamowienie => {
            res.render('pages/Zamowienia/form', {
                zamowienie: zamowienie,
                formMode: 'showDetails',
                pageTitle: 'Szczegóły zamówienia',
                formAction: '',
                navLocation: 'zamowienie'
            });
        });
};
exports.addZamowienie = (req, res, next) => {
    const zamData = {...req.body}
    ZamowienieRepository.createZamowienie(zamData)
        .then(resoult => {
            res.redirect('/amowienie');
        });
};
exports.updateZamowienie = (req, res, next) => {
    const zamId = req.body._id;
    const zamData = {...req.body};
    ZamowienieRepository.updateZamowienie(zamId, zamData)
        .then(result => {
            res.redirect('/zamowienie');
        });
};
exports.deleteZamowienie = (req, res, next) => {
    const zamId = req.params.idZamowienie;
    ZamowienieRepository.deleteZamowienie(zamId)
        .then(() => {
            res.redirect('/zamowienie');
        });
};