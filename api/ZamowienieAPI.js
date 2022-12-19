const ZamowienieRepository = require('../repository/sequelize/ZamowienieRepository');

exports.getZamowienie = (req, res, next)=>{
    ZamowienieRepository.getZamowienie()
        .then(pro =>{
            res.status(200).json(pro);
        })
        .catch(err=>{
            console.log(err);
        });

};
exports.getZamowienieById =(req, res, next)=>{
    const  zamId=req.params.idZamowienie;
    ZamowienieRepository.getZamowienieById(zamId)
        .then(zam => {
            if(!zam) {
                res.status(404).json({
                    message: 'Zamowienia o numerze '+zamId+ ' nie istnieje'
                })
            }else {
                res.status(200).json(zam);
            }
        });
};
exports.createZamowienie=(req,res,next)=>{
    ZamowienieRepository.createZamowienie(req.body)
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

exports.updateZamowienie = (req, res, next)=>{
    const zamId = req.params.idZamowienie;
    ZamowienieRepository.updateZamowienie(zamId,req.body)
        .then(result=>{
            res.status(200).json({message: 'Zamowienia zaktualizowane',zamowienie: result});
        })
        .catch(err=>{
            if(!err.statusCode){
                err.statusCode=500;
            }
            next(err);
        });
};
exports.deletZamowienie =(req, res, next)=>{
    const zamId=req.params.idZamowienie;
    ZamowienieRepository.deleteZamowienie(zamId)
        .then(result=>{
            res.status(200).json({message: 'usunieto Zamowienia',zam: result});
        })
        .catch(err=>{
            if(!err.statusCode){
                err.statusCode=500;
            }
            next(err);
        });

};