const express=require('express');
const  router =express.Router();

const proApiController =require('../../api/ProduktyAPI');
router.get('/',proApiController.getProdukty);
router.get('/:idProdukt',proApiController.getProduktyById);
router.post('/',proApiController.createProdukty);
router.put('/:idProdukt',proApiController.updateProdukty);
router.delete('/:idProdukt',proApiController.deleteProdukty);

module.exports=router;