const ProduktRepository = require("../repository/sequelize/ProduktyRepository");


exports.showProduktylist = (req, res, next) => {
    ProduktRepository.getProdukty()
        .then(produkt => {
            res.render('pages/Produkty/list', {
                produkt: produkt,
                navLocation: 'produkt'
            });
        });
}
exports.showAddProduktyForm = (req, res, next) => {
    res.render('Produkty/form', {
        produkt: {},
        pageTitle: 'Nowy Produkt',
        formMode: 'CreateNew',
        btnLabel: 'Dodaj Produkt',
        formAction: '/produkty/add',
        navLocation: 'produkt'
    });
}
exports.showEditProduktyForm = (req, res, next) => {
    const proId = req.params.proId;
    ProduktRepository.getProduktyById(proId)
        .then(produkt => {
            res.render('pages/Produkty/form', {
                produkt: produkt,
                formMode: 'edit',
                pageTitle: 'Edytuj produkt',
                btnLabel: 'Edytuj produkt',
                formAction: '/Produkty/edit',
                navLocation: 'produkt'
            });
        });
};
exports.showProduktyDetails = (req, res, next) => {
    const proId = req.params.proId;
    ProduktRepository.getProduktyById(proId)
        .then(produkt => {
            res.render('pages/Produkty/form', {
                produkt: produkt,
                formMode: 'showDetails',
                pageTitle: 'Szczegóły produktu',
                formAction: '',
                navLocation: 'produkt'
            });
        });
};

