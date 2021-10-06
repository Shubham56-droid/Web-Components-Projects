const btn = document.querySelector('.talk');
const content = document.querySelector('.content');


const greetings = [
    'im good you little piece of love',
    'doing good',
    'hello',
];

const weather = [
    "weather is fine",
    "great weather",
    "sunny weather",
];


const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition; 

const recognition = new SpeechRecognition();

recognition.onstart = function() {
    console.log("voice active");
};

recognition.onresult = function(event){
    // console.log(event);
    const current = event.resultIndex;

    const transcript = event.results[current][0].transcript;

    content.insertAdjacentHTML("beforeend",`<li>${transcript}</li>`);
    readOutLoud(transcript);
};

//add listenner to the btn

btn.addEventListener('click', () =>{
    recognition.start();
});

function readOutLoud(message){
    const speech = new SpeechSynthesisUtterance();
    
    speech.text = "sorry i didn't get that";
    
    if(message.includes('how are you')){
     const finalText = greetings[Math.floor(Math.random() * greetings.length)];
     speech.text = finalText;
    }


    speech.volume = 1;
    speech.rate = 0.8;
    speech.pitch = 1.2;

    window.speechSynthesis.speak(speech);
}





// fetch("https://robomatic-ai.p.rapidapi.com/api.php", {
// 	"method": "POST",
// 	"headers": {
// 		"content-type": "application/x-www-form-urlencoded",
// 		"x-rapidapi-key": "SIGN-UP-FOR-KEY",
// 		"x-rapidapi-host": "robomatic-ai.p.rapidapi.com"
// 	},
// 	"body": {
// 		"key": "RHMN5hnQ4wTYZBGCF3dfxzypt68rVP",
// 		"cbid": "1",
// 		"ChatSource": "RapidAPI",
// 		"SessionID": "RapidAPI1",
// 		"cbot": "1",
// 		"op": "in",
// 		"in": "What's 2 plus 5?"
// 	}
// })
// .then(response => {
// 	console.log(response);
// })
// .catch(err => {
// 	console.error(err);
// });