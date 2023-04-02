function extract(){
    const tes = document.querySelector('textarea');
    const value = tes.value;
    //alert(value);
    let phone_numbers = [];
    const regexp = new RegExp("(\\+?\\(?\\d{2}\\)? ?\\(?\\d+\\)?\\d+[\\s./-]?\\d{2,})","g");
    phone_numbers = [...value.matchAll(regexp)];
    textarea.value = phone_numbers;    
}