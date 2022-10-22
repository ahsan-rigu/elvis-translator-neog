var textInput = document.querySelector("#txt-input");
var btnTranslate = document.querySelector("#btn-translate");
var textOutput = document.querySelector("#output");

var serverURL = "https://api.funtranslations.com/translate/quenya.json";

function getTranslatedURL(input){
    return serverURL + "?" + "text=" + input
}

function errorHandler(error){
    alert("something is wrong, i really dont know what")
}

function clickEventHandler(){
    

     var inputText = textInput.value;
     fetch(getTranslatedURL(inputText))
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            textOutput.textContent = translatedText;
         })
        .catch(errorHandler);


 };
 
 btnTranslate.addEventListener("click", clickEventHandler);
 