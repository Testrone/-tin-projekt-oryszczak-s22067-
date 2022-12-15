const sequelize =require('./sequelize');

const Produkty =require ('../../model/sequelize/Produkty');
const SzczegolyZamowienia =require ('../../model/sequelize/SzczegolyZamowienia');
const Zamowienia =require ('../../model/sequelize/Zamowienia');

module.exports=()=>{

    Produkty.hasMany(SzczegolyZamowienia,{as: 'szczegolyZamowienia',foreignKey: {name: 'produkty_id',allowNull:false}, constraints: true, onDelete: 'CASCADE'});
    SzczegolyZamowienia.belongsTo(Produkty,{as: 'produkty',foreignKey: {name: 'produkty_id',allowNull:false} } );
    Zamowienia.hasMany(SzczegolyZamowienia,{as: 'szczegolyZamowienia',foreignKey: {name: 'zamowienie_id',allowNull:false}, constraints: true, onDelete: 'CASCADE'});
    SzczegolyZamowienia.belongsTo(Zamowienia,{as: 'zamowienia',foreignKey: {name: 'zamowienie_id',allowNull:false} } );


    let allProdukty, allZamowienia;
    return sequelize
        .sync({force: true})
        .then(() =>{
            return Produkty.findAll();
        })
        .then(prod=> {
            if (!prod || prod.length === 0) {
                return Produkty.bulkCreate([
                    {nazwa: 'Burak', cenaZaSztuke: 2, wycofano: 1},
                    {nazwa: 'Marchewa', cenaZaSztuke: 1, wycofano: 1},
                    {nazwa: 'Wiertarka Udarowa', cenaZaSztuke: 50, wycofano: 0},
                ])
                    .then(() => {
                        return Produkty.findAll();
                    });

            } else {
                return prod;
            }
        })
        .then( prod=>{
            allProdukty=prod;
            return Zamowienia.findAll();
        })
        .then(zam=>{
            if(!zam || zam.length ===0){
                return Zamowienia.bulkCreate([
                    {klient: 'Jan Kowalski',nipKlienta: 82374918, dataZamowienia: '2001-01-01'},
                    {klient: 'Jan Niekowalski',nipKlienta: 84217859, dataZamowienia: '2001-01-01'},
                    {klient: 'Jan Bardzokowalski',nipKlienta: 12345678, dataZamowienia: '2001-01-01'},
                ])
          .then( ()=>{
              return Produkty.findAll();
          });
            }else {
                return  zam
            }
        })
        .then(zam=>{
            allZamowienia=zam;
            return SzczegolyZamowienia.findAll();
        })
        .then(szczeza=>{
            if( !szczeza ||szczeza.length===0){
                return SzczegolyZamowienia.bulkCreate([
                    {zamowienie_id: allZamowienia[0]._id,produkty_id: allProdukty[0]._id, Ilosc: 100,Rabat: 20},
                    {zamowienie_id: allZamowienia[1]._id,produkty_id: allProdukty[1]._id, Ilosc: 200,Rabat: 15},
                    {zamowienie_id: allZamowienia[2]._id,produkty_id: allProdukty[2]._id, Ilosc: 300,Rabat: 0},
                ]);
            } else {
                return szczeza
            }
        });

};