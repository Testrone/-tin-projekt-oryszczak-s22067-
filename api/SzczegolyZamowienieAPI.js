const SzczegolyZamowienia = require('../repository/sequelize/SzczegolyRepository');

exports.getSzczegoly = (req, res, next)=>{
    SzczegolyZamowienia.getSzczegoly()
        .then(pro =>{
            res.status(200).json(pro);
        })
        .catch(err=>{
            console.log(err);
        });

};
exports.getSzczegolyById =(req, res, next)=>{

    const  zamId=req.params.idSzczegolyZamowienia;
    SzczegolyZamowienia.getSzczegolyById(zamId)
        .then(pro =>{
            if(!pro){
                res.status(404).json({
                    message: 'Zamowienia o numerze'+zamId+ 'nie istnieje'
                })
            }else {
                res.status(200).json(pro);
            }
        });
};
exports.createSzczegoly=(req,res,next)=>{
    SzczegolyZamowienia.createSzczegoly(req.body)
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

exports.updateSzczegoly = (req, res, next)=>{
    const zamId = req.params.idSzczegolyZamowienia;
    SzczegolyZamowienia.updateSzczegoly(zamId,req.body)
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
exports.deleteSzczegoly =(req, res, next)=>{
    const proId=req.params.idSzczegolyZamowienia;
    SzczegolyZamowienia.deleteSzczegoly(proId)
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