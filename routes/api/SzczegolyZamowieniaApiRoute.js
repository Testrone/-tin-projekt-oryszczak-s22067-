const express=require('express');
const  router =express.Router();

const proApiController =require('../../api/SzczegolyZamowienieAPI');
router.get('/',proApiController.getSzczegoly);
router.get('/:idSzczegolyZamowienia',proApiController.getSzczegolyById);
router.post('/',proApiController.createSzczegoly);
router.put('/:idSzczegolyZamowienia',proApiController.updateSzczegoly);
router.delete('/:idSzczegolyZamowienia',proApiController.deleteSzczegoly);

module.exports=router;