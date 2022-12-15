function validateForm(){

    const klient=document.getElementById('Klient');
    const produkt=document.getElementById('Produkt');
    const ilosc=document.getElementById('ilosc');


    const errorKlient=document.getElementById('errorKlient');
    const errorProdukt=document.getElementById('errorProdukt');
    const errorIlosc=document.getElementById('errorIlosc');
    const errorsSummary = document.getElementById('errorsSummary');

    resetErrors([klient,produkt,ilosc],[errorKlient,errorProdukt,errorIlosc],errorsSummary);

    let valid =true;

    if(!checkRequired(klient.value)){
        valid=false;
        klient.classList.add("error-input");
        errorKlient.innerText="Pole jest wymagane";
    }
    if(!checkRequired(produkt.value)){
        valid=false;
        produkt.classList.add("error-input");
        errorProdukt.innerText="Pole jest wymagane";
    }
    if(!checkRequired(ilosc.value)){
        valid=false;
        ilosc.classList.add("error-input");
        errorIlosc.innerText="Pole jest wymagane";

    }else if(!checkNumber(ilosc.value)){
        valid=false;
        ilosc.classList.add("error-input");
        errorIlosc.innerText="Pole jest wymagane";

    }else if(!checkNumberRange(ilosc.value,1,10000)){

        valid=false;
        ilosc.classList.add("error-input");
        errorIlosc.innerText="Pole powinno być liczbą od 1 do 10000";
    }
    if (!valid) {
        errorsSummary.innerText = "formularz zawiera błedy";

    }
    return valid;
}