function validateForm() {

    const nazwa = document.getElementById('Nazwa');
    const cenaZaSztuke = document.getElementById('CenaZaSztuke');
    const wycofano = document.getElementById('Wycofano');

    const errorNazwa = document.getElementById('errorNazwa');
    const errorCenaZaSztuke = document.getElementById('errorCenaZaSztuke');
    const errorWycofano = document.getElementById('errorWycofano');
    const errorsSummary = document.getElementById('errorsSummary');

    resetErrors([nazwa, cenaZaSztuke, wycofano], [errorNazwa, errorCenaZaSztuke, errorWycofano], errorsSummary)

    let valid = true;

    if (!checkRequired(nazwa.value)) {
        valid = false;
        nazwa.classList.add("error-input");
        errorNazwa.innerText = "Pole jest wymagane";

    } else if (!checkTextLengthRange(nazwa.value, 2, 60)) {
        valid = false;
        nazwa.classList.add("error-input");
        errorNazwa.innerText = "Pole powinno zawierac od 2 do 60 znakow";
    }

    if (!checkRequired(cenaZaSztuke.value)) {
        valid = false;
        cenaZaSztuke.classList.add("error-input");
        errorCenaZaSztuke.innerText = "Pole jest wymagane";

    } else if (!checkNumber(cenaZaSztuke.value)) {
        valid = false;
        cenaZaSztuke.classList.add("error-input");
        errorCenaZaSztuke.innerText = "Pole jest wymagane";

    } else if (!checkNumberRange(cenaZaSztuke.value, 1, 10000)) {

        valid = false;
        cenaZaSztuke.classList.add("error-input");
        errorCenaZaSztuke.innerText = "Pole powinno byc liczba od 1 do 10000";
    }
    if (!valid) {
        errorsSummary.innerText = "formularz zawiera bledy";

    }
    return valid;
}