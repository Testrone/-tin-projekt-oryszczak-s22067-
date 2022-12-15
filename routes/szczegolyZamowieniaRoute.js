const express=require('express');
const  router=express.Router();

const szczegolyZamowieniaControler=require('../controllers/szczegolyZamowieniaController');

router.get('/', szczegolyZamowieniaControler.showSzczegolyZamowienialist);

router.get('/add',szczegolyZamowieniaControler.showAddSzczegolyZamowieniaForm);

router.get('/edit/:idSzczegolyZamowienia',szczegolyZamowieniaControler.showEditSzczegolyZamowieniaForm)

router.get('/details/:idSzczegolyZamowienia',szczegolyZamowieniaControler.showSzczegolyZamowieniaDetails);

module.exports=router;