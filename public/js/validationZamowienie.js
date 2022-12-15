 function validateForm() {

     const Klient = document.getElementById('Klient');
     const nipKlienta = document.getElementById('nipKlienta');
     const Data = document.getElementById('dataZamowienia');

     const errorklient = document.getElementById('errorKlient');
     const errorNipKlienta = document.getElementById('errorNipKlienta');
     const errorData = document.getElementById('errorDataZamowienia');
     const errorsSummary = document.getElementById('errorsSummary');

     resetErrors([Klient, nipKlienta, Data], [errorklient, errorNipKlienta, errorData], errorsSummary)

     let valid = true;

     if (!checkRequired(Klient.value)) {
         valid = false;
         Klient.classList.add("error-input");
         errorklient.innerText = "Pole jest wymagane";

     } else if (!checkTextLengthRange(Klient.value, 2, 60)) {
         valid = false;
         Klient.classList.add("error-input");
         errorklient.innerText = "Pole powinno zawierać od 2 do 60 znaków";
     }

     if (!checkRequired(nipKlienta.value)) {
         valid = false;
         nipKlienta.classList.add("error-input");
         errorNipKlienta.innerText = "Pole jest wymagane";
     } else if (!checkTextLengthRange(nipKlienta.value, 2, 60)) {
         valid = false;
         nipKlienta.classList.add("error-input");
         errorNipKlienta.innerText = "Pole powinno zawierać od 2 do 60 znaków";
     }

     let nowDate = new Date(),
         month = '' + (nowDate.getMonth() + 1),
         day = '' + nowDate.getDate(),
         year = nowDate.getFullYear();

     if (month.length < 2)
         month = '0' + month;
     if (day.length < 2)
         day = '0' + day;
     const nowString = [year, month, day].join('-');

     if (!checkRequired(Data.value)) {
         valid = false;
         Data.classList.add("error-input");
         errorData.innerText = "Pole jest wymagane";
     } else if (!checkDate(Data.value)) {
         valid = false;
         Data.classList.add("error-input");
         errorData.innerText = "Pole powinno zawierać datę w formacie yyyy-mm-dd";
     }
     if (!valid) {
        errorsSummary.innerText = "formularz zawiera błedy";

    }
    return valid;
 }