const express=require('express');
const  router =express.Router();

const proApiController =require('../../api/ZamowienieAPI');
router.get('/',proApiController.getZamowienie);
router.get('/:idZamowienie',proApiController.getZamowienieById);
router.post('/',proApiController.createZamowienie);
router.put('/:idZamowienie',proApiController.updateZamowienie);
router.delete('/:idZamowienie',proApiController.deletZamowienie);

module.exports=router;