var input="racecar";
var inputSplit=input.split('');
var reverseInput=inputSplit.reverse();
var reverseJoin=reverseInput.join('');
function reverseStr(){
    if(input===reverseJoin){
         console.log("true");
    }else{
        console.log("false");
    }
}
reverseStr("hello");