const express=require('express');
const  router=express.Router();

const szczegolyZamowieniaControler=require('../controllers/szczegolyZamowieniaController');

router.get('/', szczegolyZamowieniaControler.showSzczegolyZamowienialist);

router.get('/add',szczegolyZamowieniaControler.showAddSzczegolyZamowieniaForm);

router.get('/edit/:idSzczegolyZamowienia',szczegolyZamowieniaControler.showEditSzczegolyZamowieniaForm)

router.get('/details/:idSzczegolyZamowienia',szczegolyZamowieniaControler.showSzczegolyZamowieniaDetails);

router.post('/add',szczegolyZamowieniaControler.addSzczegolyZamowienia);

router.post('/edit',szczegolyZamowieniaControler.updateSzczegolyZamowienia)

router.get('/delete/:idSzczegolyZamowienia',szczegolyZamowieniaControler.deleteSzczegolyZamowienia);

module.exports=router;