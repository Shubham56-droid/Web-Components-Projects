const button = document.querySelector(".btn-translate");
const textarea = document.querySelector("#input-textarea");
const output = document.querySelector(".output-div");

const serverUrl ="https://api.funtranslations.com/translate/minion.json";

function constructUrl(text){
    return serverUrl+ "?" + "text=" + text;
}

function errorHandler(error){
    console.log("Error occured: "+ error);
    alert("Error occured please try after sometime");
}

function clickHandler(){
    fetch(constructUrl(textarea.value))
    .then(response => response.json())
    .then(json => {
        var translatedText = json.contents.translated;
        output.innerText = translatedText})
    .catch(errorHandler)
}

button.addEventListener("click", clickHandler);
