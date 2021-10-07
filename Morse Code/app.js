var btnClicked1 =  document.querySelector("#btn-click1");

var inputText = document.querySelector("#txt-input");
var outputText = document.querySelector("#output");

// var serverURL= "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";
var serverURL1 = "https://api.funtranslations.com/translate/morse.json";

function errorHandler(error){
    console.log("error occured!", error)
    alert("server is down, try again after some time!")
}

function getTranslatedURL1(text){
    return serverURL1 + "?" + "text=" + text
}


function clickHandler1 (){
    var textInput = inputText.value;
    fetch(getTranslatedURL1(textInput))
    .then(response => response.json())
    .then(json=> {
        var translatedText = json.contents.translated;
        outputText.innerText = translatedText; 
        })
    .catch(errorHandler)
};


btnClicked1.addEventListener("click", clickHandler1);
