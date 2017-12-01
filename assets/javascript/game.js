// Instructions:
// The player will have to guess the answer, just like in Hangman. 
// This time, though, the player will guess with numbers instead of letters.
// Here's how the app works:
// There will be four crystals displayed as buttons on the page.
// The player will be shown a random number at the start of the game.
// When the player clicks on a crystal, it will add a specific amount of points to the player's total score.
// Your game will hide this amount until the player clicks a crystal.
// When they do click one, update the player's score counter.
// The player wins if their total score matches the random number from the beginning of the game.
// The player loses if their score goes above the random number.
// The game restarts whenever the player wins or loses.
// When the game begins again, the player should see a new random number. Also, all the crystals will have four new hidden values. Of course, the user's score (and score counter) will reset to zero.
// The app should show the number of games the player wins and loses. To that end, do not refresh the page as a means to restart the game.

var randomScore;
var wins;
var losses;
var yourScore;
var gemOne;
var gemTwo;
var gemThree;
var gemFour;

$(document).ready(function () {
    $(".default").on("click"), function () {
        $(this).val(crystalHiddenValue) += $("#scoreboard").val();
    }

});

var cArr = [{ value: 0, img: "assets/images/green_gem.png" },
{ value: 0, img: "assets/images/yellow_gem.png" },
{ value: 0, img: "assets/images/red_gem.png" },
{ value: 0, img: "assets/images/blue_gem.png" }];




//functions
function initialize() {
    randomScore = genRandomNumReturn();
    wins = "";
    losses = "";
    yourScore = "";

    for(var i =0; i < cArr.length; i++){
        cArr[i].value = crystalHiddenValue(1,12);
        console.log("Value: " + cArr[i].value + cArr[i].img);
    }
    // $("#button-1").val(gemOne);
    // $("#button-2").val(gemTwo);
    // $("#button-3").val(gemThree);
    // $("#button-4").val(gemFour);
    // gemOne = crystalHiddenValue();
    // gemTwo = crystalHiddenValue();
    // gemThree = crystalHiddenValue();
    // gemFour = crystalHiddenValue();
    // console.log("Button 1: " + gemOne);
    // console.log("Button 2: " + gemTwo);
    // console.log("Button 3: " + gemThree);
    // console.log("Button 4: " + gemFour);
}


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
    return Math.floor(Math.random() * 12) + 1;

}



//---------------------------------------------------------------------------------------
//calls
genRandomNumReturn();
initialize();

var imgOne = genRandomNumReturn();
var imgTwo = genRandomNumReturn();
var imgThree = genRandomNumReturn();
var imgFour = genRandomNumReturn();

console.log(imgOne, imgTwo, imgThree, imgFour);