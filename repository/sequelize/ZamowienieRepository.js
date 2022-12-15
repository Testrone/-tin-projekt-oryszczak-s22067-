const Produkty=require("../../model/sequelize/Produkty");
const SzczegolyZamowienia=require("../../model/sequelize/SzczegolyZamowienia");
const Zamowienia=require("../../model/sequelize/Zamowienia");

exports.getZamowienie= () => {
    return Zamowienia.findAll();
}
exports.getZamowienieById= (zamId) =>{
    return Zamowienia.findByPk(zamId,
        {
            include:[{
                model: SzczegolyZamowienia,
                as:`szczegolyZamowienia`,
                include:[{
                    model:Produkty,
                    as:`produkty`
                }]
            }]
        });
};
exports.createZamowienie=(newZamData) =>{
    return Zamowienia.create({
        klient:newZamData.klient,
        nipKlienta:newZamData.nipKlienta,
        dataZamowienia:newZamData.dataZamowienia
    });
};

exports.updateZamowienie= (zamId, newZamData)=>{
    const klient=newZamData.klient;
    const nipKlienta=newZamData.nipKlienta;
    const dataZamowienia=newZamData.dataZamowienia;
    return Zamowienia.update(newZamData,{where: {_id: zamId}});
};

exports.deleteZamowienie=(zamId) =>{
    return Zamowienia.destroy({
        where: {_id: zamId}
    });
};