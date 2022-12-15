const ProduktyRepository = require('../repository/sequelize/ProduktyRepository');

exports.getProdukty = (req, res, next)=>{
    ProduktyRepository.getProdukty()
        .then(pro =>{
            res.status(200).json(pro);
        })
        .catch(err=>{
            console.log(err);
        });

};
exports.getProduktyById =(req, res, next)=>{
const  proId=req.params.idProdukt;
    ProduktyRepository.getProduktyById(proId)
        .then(pro =>{
            if(!pro){
            res.status(404).json({
            message: 'Produkt o numerze '+proId+ ' nie istnieje'
            })
            }else {
            res.status(200).json(pro);
            }
        });
        };
exports.createProdukty=(req,res,next)=>{
    ProduktyRepository.createProdukty(req.body)
        .then(newObj =>{
            res.status(201).json(newObj);
        })
        .catch(err=>{
            if(!err.statusCode){
                err.statusCode=500;
            }
            next(err);
        });
};

        exports.updateProdukty = (req, res, next)=>{
            const proId = req.params.idProdukt;
            ProduktyRepository.updateProdukty(proId,req.body)
                .then(result=>{
                    res.status(200).json({message: 'Produkt zaktualizowany',produkt: result});
                })
                .catch(err=>{
                   if(!err.statusCode){
                       err.statusCode=500;
                   }
                   next(err);
                });
        };
        exports.deleteProdukty =(req, res, next)=>{
            const proId=req.params.idProdukt;
            ProduktyRepository.deleteProdukty(proId)
                .then(result=>{
                    res.status(200).json({message: 'usunieto produkt',prod: result});
                })
                .catch(err=>{
                    if(!err.statusCode){
                        err.statusCode=500;
                    }
                    next(err);
                });

        };