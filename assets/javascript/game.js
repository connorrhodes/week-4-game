

//functions
function genRandonNum() {
    //random number generated between 19-120
    var randomNum = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
    console.log("random: " + randomNum);
}

function genRandomNumReturn() {
    //returns a generated number between 19-120
    return Math.floor(Math.random() * (120 - 19 + 1)) + 19;
}

function crystalHiddenValue() {
    //function established to generate a random number between 1-12
    Math.floor(Math.random() * 12) + 1;
}