const SzczegolyRepository = require("../repository/sequelize/SzczegolyRepository");
const ZamowienieRepository = require("../repository/sequelize/ZamowienieRepository");
const ProduktRepository = require("../repository/sequelize/ProduktyRepository");


exports.showSzczegolyZamowienialist = (req, res) => {
    SzczegolyRepository.getSzczegoly()
        .then(szczegoly => {
            res.render('pages/SzczegolyZamowienia/list', {
                szczegoly: szczegoly,
                navLocation: 'szczegoly'
            });
        });
}
exports.showAddSzczegolyZamowieniaForm = (req, res, next) => {
    const szczId=req.params.idSzczegolyZamowienia;
    let allProdukty, allZamowienie;

    SzczegolyRepository.getSzczegoly()
        .then(szczegoly => {
            allSzczegoly=szczegoly;
            return ZamowienieRepository.getZamowienie();
        })
        .then(zamowienie => {
            allZamowienie = zamowienie;
            return ProduktRepository.getProdukty();
        })
        .then(produkty => {
            allProdukty=produkty;
            res.render('pages/SzczegolyZamowienia/form',{
                szczegoly: {},
                formMode: 'CreateNew',
                allProdukty: allProdukty,
                allZamowienie: allZamowienie,
                pageTitle: 'Nowe Szczegoly Zamowienia',
                btnLabel: 'Dodaj Szczegoly Zamowienia',
                formAction: '/szczegolyZamowienia/add',
                navLocation: 'szczegoly'
            });
    });
}
exports.showEditSzczegolyZamowieniaForm = (req, res, next) => {
    const szczId = req.params.idSzczegolyZamowienia;
    let allProdukty, allZamowienie, allSzczegoly;

    SzczegolyRepository.getSzczegoly()
        .then(szczegoly => {
            allSzczegoly = szczegoly;
            return ProduktRepository.getProdukty();
        })
        .then(produkty => {
            allProdukty = produkty;
            return ZamowienieRepository.getZamowienie();
        })
        .then(zamowienia => {
            allZamowienie = zamowienia;
            return SzczegolyRepository.getSzczegolyById(szczId);
        })
        .then(szczegoly => {
            res.render('pages/SzczegolyZamowienia/form', {
                szczegoly: szczegoly,
                formMode: 'edit',
                allProdukty:allProdukty,
                allZamowienie:allZamowienie,
                allSzczegoly:allSzczegoly,
                pageTitle: 'Edytuj Szczegóły',
                btnLabel: 'Edytuj Szczegóły',
                formAction: '/szczegolyZamowienia/edit',
                navLocation: 'szczegoly',
                validationErrors: []
            });
        });
}
exports.showSzczegolyZamowieniaDetails = (req, res, next) => {
    const szczId = req.params.idSzczegolyZamowienia;
    let allProdukty, allZamowienie;
    ProduktRepository.getProdukty()
        .then(produkty => {
            allProdukty = produkty;
            return ZamowienieRepository.getZamowienie();
        })
        .then(zamowienie => {
            allZamowienie = zamowienie;
        return SzczegolyRepository.getSzczegolyById(szczId);
    }).then(szczegoly => {
            res.render('pages/SzczegolyZamowienia/form', {
                szczegoly: szczegoly,
                allProdukty:allProdukty,
                allZamowienie:allZamowienie,
                formMode: 'showDetails',
                pageTitle: 'Szczegóły produktu',
                formAction: '',
                navLocation: 'szczegoly',
                validationErrors: []
            });
        });
};
exports.addSzczegolyZamowienia = (req, res, next) => {
    const zamData = {...req.body}
    SzczegolyRepository.createSzczegoly(zamData)
        .then(resoult => {
            res.redirect('/szczegolyZamowienia');
        });
};
exports.updateSzczegolyZamowienia = (req, res, next) => {
    const zamId = req.body._id;
    const zamData = {...req.body};
    SzczegolyRepository.updateSzczegoly(zamId, zamData)
        .then(result => {
            res.redirect('/szczegolyZamowienia');
        });
};
exports.deleteSzczegolyZamowienia = (req, res, next) => {
    const zamId = req.params.idSzczegolyZamowienia;

    SzczegolyRepository.deleteSzczegoly(zamId)
        .then(() => {
            res.redirect('/szczegolyZamowienia');
        })
        .catch(err=>{
            res.render('pages/SzczegolyZamowienia/form', {
                szczegoly: szczegoly,
                pageTitle: 'Usuwanie Szczegółów Zamówienia',
                formMode: 'delete',
                btnLabel: 'Usuń wypożyczenie',
                formAction: '/szczegolyZamowienia/delete',
                navLocation: 'szczegoly',
                validationErrors: []
            })
        });
};
