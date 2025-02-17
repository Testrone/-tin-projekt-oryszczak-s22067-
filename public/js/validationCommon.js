function resetErrors(inputs, errorTexts, errorInfo) {

    for (let i = 0; i < inputs.length; i++) {
        inputs[i].classList.remove("error-input");


    }
    for (let i = 0; i < errorTexts.length; i++) {
        errorTexts[i].innerText = "";


    }
    errorInfo.innerText = "";
}
function checkRequired(value) {
    if (!value) {
        return false;
    }

    value = value.toString().trim();

    if (value === "") {
        return false;
    }
    return true;
}
function checkTextLengthRange(value, min, max) {
    if (!value) {
        return false;

    }
    value = value.toString().trim();
    const length = value.length;
    if (max && length > max) {
        return false;

    }
    if (min && length < min) {
        return false;

    }
    return true;
 
}
function checkDate(value) {
    if (!value) {
        return false;
    }
    const pattern = /(\d{4})-(\d{2})-(\d{2})/;
    return pattern.test(value);
}
function checkDateifAfter(value, compareTo) {
    if (!value)

        return false;

    if (!compareTo)
        return false;

    const pattern = /(\d{4})-(\d{2})-(\d{2})/;
    if (!pattern.test(value))
        return false;

    if (!pattern.test(compareTo))
        return falsel;

    const valueDate = new Date(value);
    const compareToDate = new Date(compareTo);
    if (valueDate.getTime() < compareToDate.getTime()) {
        return false;
    }

    return true;

}
function checkNumber(value){
    if(!value){
        return false;
    }
    if(isNaN(value)){
        return false;
    }
    return true;
}
function checkNumberRange(value,min,max){
    if(!value){
        return false;
    }
    if(isNaN(value)){
        return false;
    }
    value=parseFloat(value);
    if(value<min){
        return false;
    }
    if(value>max){
        return  false;
    }
    return true;
}