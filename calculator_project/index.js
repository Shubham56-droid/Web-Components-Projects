function getHistory(){
    return document.getElementById("history-value").innerText;
}
function printHistory(num){
    document.getElementById("history-value").innerText= num;
}
function getOutput(){
    return document.getElementById("output-value").innerText;
}
function printOutput(num){
    document.getElementById("output-value").innerText= formatted(num);
}
function formatted(num){
    if(num=="-"){
        return "";
    }
    var x= Number(num),count=0;
    var s= x.toString();
    var text="";
    var len= s.length;
    for(var i= len-1; i>=0; i--){
        count++;
        if(count>3){
            text+=',';
            count=1;
        }
        text+=s.substr(i,1);
    }
    return text.split("").reverse().join("");
}
function reverseFormat(num){
    return Number(num.replace(/,/g,''));
}
var operator= document.getElementsByClassName("operator");
for(var i=0; i<operator.length; i++){
    operator[i].addEventListener("click", function(){
        if(this.id=="clear"){
            printHistory("");
            printOutput("");
        }
        else if(this.id=="backspace"){
            var output= reverseFormat(getOutput()).toString();
            if(output!= "NaN"){
                output= output.substr(0, output.length-1);
                printOutput(output);
            }
        }
        else{
            var output= getOutput();
            var history = getHistory();
            if(output!= ""){
                output= reverseFormat(output);
                history+= output;
                if(this.id=="="){
                    var result= eval(history);
                    printOutput(result);
                    printHistory("");
                }
                else{
                    history+= this.id;
                    printHistory(history);
                    printOutput("");
                }
            }

        }
    });
}
var number= document.getElementsByClassName("number");
for(var i=0; i<number.length; i++){
    number[i].addEventListener("click", function(){
        var output= reverseFormat(getOutput());
        if(output!= "NaN"){
            output= output+ this.id;
            printOutput(output);
        }
    });
}