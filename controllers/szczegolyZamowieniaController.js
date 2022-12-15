const SzczegolyRepository = require("../repository/sequelize/SzczegolyRepository");


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
    res.render('SzczegolyZamowienia/form', {
        szczegoly: {},
        pageTitle: 'Nowe Szczegoly Zamowienia',
        formMode: 'CreateNew',
        btnLabel: 'Dodaj Szczegoly Zamowienia',
        formAction: '/szczegolyZamowienia/add',
        navLocation: 'szczegoly'
    });
}
exports.showEditSzczegolyZamowieniaForm = (req, res, next) => {
    const szczId = req.params.szczId;
    SzczegolyRepository.getSzczegolyById(szczId)
        .then(szczegoly => {
            res.render('pages/SzczegolyZamowienia/form', {
                szczegoly: szczegoly,
                formMode: 'edit',
                pageTitle: 'Edytuj Szczegóły',
                btnLabel: 'Edytuj Szczegóły',
                formAction: '/szczegolyZamowienia/form-edit',
                navLocation: 'szczegoly'
            });
        });
};
exports.showSzczegolyZamowieniaDetails = (req, res, next) => {
    const szczId = req.params.szczId;
    SzczegolyRepository.getSzczegolyById(szczId)
        .then(szczegoly => {
            res.render('pages/SzczegolyZamowienia/form', {
                szczegoly: szczegoly,
                formMode: 'showDetails',
                pageTitle: 'Szczegóły produktu',
                formAction: '',
                navLocation: 'szczegoly'
            });
        });
};
