const textinput = document.querySelector('.leftSection__encryptDecript-textInput');
const encryptButton = document.querySelector('.leftSection__buttons--encrypt');
const decryptButton = document.querySelector('.leftSection__buttons--decrypt');
const textResult = document.querySelector('.rightSection__resultBar');
const resultpanel = document.querySelector('.rightSection__resultpanel');
const textBar = document.querySelector('.rightSection__resultBar--textResult');
const copyButton = document.querySelector('.rightSection__resultBar--button-copy')

encryptButton.addEventListener("click", ()=>{
    var textencrypt = textinput.value;
    resultpanel.classList.add('active-rightSection__resultpanel');
    textResult.classList.add('active-rightSection__resultBar');
    console.log(textencrypt);
    textencrypt = textencrypt.replace(/e/g,'enter');
    textencrypt = textencrypt.replace(/i/g,'imes');
    textencrypt = textencrypt.replace(/a/g,'ai');
    textencrypt = textencrypt.replace(/o/g,'ober');
    textencrypt = textencrypt.replace(/u/g,'ufat');
    textBar.value = textencrypt;
});

decryptButton.addEventListener("click", ()=>{
    var textdecrypt = textinput.value;
    resultpanel.classList.add('active-rightSection__resultpanel');
    textResult.classList.add('active-rightSection__resultBar');
    console.log(textdecrypt);
    textdecrypt = textdecrypt.replace(/enter/g,'e');
    textdecrypt = textdecrypt.replace(/imes/g,'i');
    textdecrypt = textdecrypt.replace(/ai/g,'a');
    textdecrypt = textdecrypt.replace(/ober/g,'o');
    textdecrypt = textdecrypt.replace(/ufat/g,'u');
    textBar.value = textdecrypt;
});

copyButton.addEventListener("click", ()=>{
    resultpanel.classList.remove('active-rightSection__resultpanel');
    textResult.classList.remove('active-rightSection__resultBar');
    textinput.value = textBar.value;
});