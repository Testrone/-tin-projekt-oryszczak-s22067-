const express=require('express');
const  router=express.Router();

const zamowienieController=require('../controllers/zamowieniaController');


router.get('/', zamowienieController.showZamowienieList);

router.get('/add',zamowienieController.showAddZamowienieForm);

router.get('/edit/:idZamowienie',zamowienieController.showEditZamowienieForm)

router.get('/details/:idZamowienie',zamowienieController.showZamowienieDetails);

router.post('/add',zamowienieController.addZamowienie);

router.post('/edit',zamowienieController.updateZamowienie)

router.get('/delete/:idZamowienie',zamowienieController.deleteZamowienie);

module.exports=router;