const ZamowienieRepository = require("../repository/sequelize/ZamowienieRepository");


exports.showZamowienieList = (req, res, next) => {
    ZamowienieRepository.getZamowienie()
        .then(zamowienie => {
            res.render('pages/Zamowienie/list', {
                zamowienie: zamowienie,
                navLocation: 'zamowienie'
            });
        });

}
exports.showAddZamowienieForm = (req, res, next) => {
    res.render('Zamowienie/form', {
        zamowienie: {},
        pageTitle: 'Nowe Zamowienie',
        formMode: 'CreateNew',
        btnLabel: 'Dodaj Zamowienie',
        formAction: '/zamowienie/add',
        navLocation: 'zamowienie'
    });
}
exports.showEditZamowienieForm = (req, res, next) => {
    const zamId = req.params.proId;
    ZamowienieRepository.getZamowienieById(zamId)
        .then(zamowienie => {
            res.render('pages/Zamowienie/form', {
                zamowienie: zamowienie,
                formMode: 'edit',
                pageTitle: 'Edytuj zamowienie',
                btnLabel: 'Edytuj zamowienie',
                formAction: '/Zamowienie/form-edit',
                navLocation: 'zamowienie'
            });
        });
};

exports.showZamowienieDetails = (req, res, next) => {
    const zamId = req.params.zamId;
    ZamowienieRepository.getZamowienieById(zamId)
        .then(zamowienie => {
            res.render('pages/Zamowienie/form', {
                zamowienie: zamowienie,
                formMode: 'showDetails',
                pageTitle: 'Szczegóły zamówienia',
                formAction: '',
                navLocation: 'zamowienie'
            });
        });
};