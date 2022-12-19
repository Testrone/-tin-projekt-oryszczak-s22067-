 function validateForm() {

     const klient = document.getElementById('klient');
     const nipKlienta = document.getElementById('nipKlienta');
     const data = document.getElementById('dataZamowienia');

     const errorklient = document.getElementById('errorKlient');
     const errorNipKlienta = document.getElementById('errorNipKlienta');
     const errorData = document.getElementById('errorDataZamowienia');
     const errorsSummary = document.getElementById('errorsSummary');

     resetErrors([klient, nipKlienta, data], [errorklient, errorNipKlienta, errorData], errorsSummary)

     let valid = true;

     if (!checkRequired(klient.value)) {
         valid = false;
         klient.classList.add("error-input");
         errorklient.innerText = "Pole jest wymagane";

     } else if (!checkTextLengthRange(klient.value, 2, 60)) {
         valid = false;
         klient.classList.add("error-input");
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

     if (!checkRequired(data.value)) {
         valid = false;
         data.classList.add("error-input");
         errorData.innerText = "Pole jest wymagane";
     } else if (!checkDate(data.value)) {
         valid = false;
         data.classList.add("error-input");
         errorData.innerText = "Pole powinno zawierać datę w formacie yyyy-mm-dd";
     }
     if (!valid) {
        errorsSummary.innerText = "formularz zawiera błedy";

    }
    return valid;
 }