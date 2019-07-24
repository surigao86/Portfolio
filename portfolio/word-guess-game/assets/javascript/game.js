var wordList = ["ford","toyota","honda", "tesla", "kia"];

var chosenWord = [];

var letterInChosenWord = [];

var numBlanks = 0;

var blanksAndSuccesses = [];

var wrongGuesses = [];

var letterGuessed = "";

var WinCounter = 0;
var lossCounter =0;
var numGuesses = 9;

function startGame() {
    numGuesses =9;

    chosenWord = wordList[Math.floor(Math.random() * wordList.lenght)];

    letterInChosenWord = chosenWord.split("");

    numBlanks = letterInChosenWord.length;

    console.log(chosenWord);

    blanksAndSuccesses = [];

    wrongGuesses = [];
    for (var i = 0; i < numBlanks; i++){
        blanksAndSuccesses.push("_");
    }
    console.log(blanksAndSuccesses);

    document.getElementById("guesses-left").innerHTML = numGuesses;
    document.getElementById("word-blanks").innerHTML = blanksAndSuccesses.join(" ");
    document.getElementById("wrong-guesses").innerHTML = wrongGuesses.join(" ");

    function checkLetters(letter) {
    
    var letterInWord = false;

    for (var i = 0; i < numBlanks; i++) {
        if (chosenWord[i] === letter) {
            letterInWord = true;
        }
    }
    
    if (letterInWord) {
        for (var j = 0; j <numBlanks; j++) {
            if (chosenWord[j] === letter) {
            
                blanksAndSuccesses[j] = letter;
            }
        }
        console.log(blanksAndSuccesses);
    }
    else {

        wrongGuesses.push(letter);

        numGuesses--;
    }

}

function roundComplete() {

    console.log("WinCount: " + WinCounter + "| LossCount: " + lossCounter + )
}

