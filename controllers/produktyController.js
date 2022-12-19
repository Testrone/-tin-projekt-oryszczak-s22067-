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
    res.render('pages/Produkty/form', {
        produkt: {},
        pageTitle: 'Nowy Produkt',
        formMode: 'CreateNew',
        btnLabel: 'Dodaj Produkt',
        formAction: '/produkty/add',
        navLocation: 'produkt'
    });
}
exports.showEditProduktyForm = (req, res, next) => {
    const proId = req.params.idProdukt;
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
    const proId = req.params.idProdukt;

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
exports.addProdukt = (req, res, next) => {
    const proData = {...req.body}
    ProduktRepository.createProdukty(proData)
        .then(resoult => {
            res.redirect('/produkty')
        });
};
exports.updateProdukt = (req, res, next) => {
    const proId = req.body._id;
    const proData = {...req.body};
    ProduktRepository.updateProdukty(proId, proData)
        .then(result => {
            res.redirect('/produkty')
        });
};
exports.deleteProdukt = (req, res, next) => {
    const proId = req.params.idProdukt;
    ProduktRepository.deleteProdukty(proId)
        .then(() => {
            res.redirect('/produkty')
        })
};

