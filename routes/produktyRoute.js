const express = require('express');
const router = express.Router();

const produktyController = require('../controllers/produktyController');

router.get('/', produktyController.showProduktylist);

router.get('/add', produktyController.showAddProduktyForm);

router.get('/edit/:idProdukt', produktyController.showEditProduktyForm)

router.get('/details/:idProdukt', produktyController.showProduktyDetails);

module.exports = router;