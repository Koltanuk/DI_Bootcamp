let sentence = "This dinner is not that bad ! You cook well";
let wordNot = sentence.indexOf("not");
let wordBad = sentence.indexOf("bad");
if(wordBad>wordNot){
    count= wordBad-wordNot+2;
    let newSentence = sentence.substring(0,wordNot)+"good"+sentence.substring(wordBad+3);
    console.log(newSentence);
}
else{
    console.log(sentence);
}