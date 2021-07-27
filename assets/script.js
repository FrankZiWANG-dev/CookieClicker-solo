//BASE VARIABLES
//Score
let score = parseInt(document.getElementById("score").textContent);
//Amount added to score
let clickAmount = 1;
//Clicker button
let clicker = document.getElementById('clicker');

//VARIABLES FOR MULTIPLICATION
//Multiplier button
let multiButton = document.getElementById('multiplier');
//Current Multiplication bonus
let multiLevel = 1;
//Amounts of multiplication bonuses
let multiAmount = [1, 2, 4, 8, 16, 32, 64, 128, 256, 512];
//Price of multiplication bonuses
let multiPrice = [0, 100, 500, 1000, 2500, 5000, 10000, 25000, 50000, 100000, 500000];

//VARIABLES FOR AUTOCLICK
//Autoclick button
let autoclick = document.getElementById('autoclick');
//Current autoclick bonus
let autoclickLevel = 0;
//Amounts of autoclick bonuses
let autoclickAmount = [1, 2, 4, 8, 16, 32, 64, 128, 256, 512];
//Amount of current autoclick bonus
let currentAutoclickAmount = 0;
//Price of autoclick bonuses
// let autoclickPrice = [0, 1000, 5000, 10000, 25000, 50000, 100000, 250000, 500000, 1000000, 5000000];
let autoclickPrice = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

//VARIABLES IN THE HTML
//Score in the HTML
let scoreHTML = document.getElementById("score");

//Current multiplication bonus in HTML
let currentMultiHTML = document.getElementById('MultiLevel');
//Next multiplication bonus in HTML
let nextMultiHTML = document.getElementById('NextMultiLevel');
//Next multiplication price in HTML
let nextMultiPriceHTML = document.getElementById('MultiPrice');

//Current autoclick bonus in HTML
let currentAutoclickLevelHTML = document.getElementById('CurrentAutoclickLevel');
//Next autoclick bonus in HTML
let nextAutoclickLevelHTML = document.getElementById('NextAutoclickLevel');
//Next autoclick price in HTML
let nextAutoclickPriceHTML = document.getElementById('NextAutoclickPrice');

//BASIC CLICK FUNCTION
function Click(){
    console.log(score, clickAmount);
    score += clickAmount;
    document.getElementById("score").innerHTML = score;
}
clicker.addEventListener("click", Click);

//MULTIPLIER CLICK FUNCTION
function Multi(){
    //check level of multi
    for (x=1;x<=11;x++){
        if(multiLevel==x){
            //check if has enough money
            if (score>=multiPrice[x]){
                console.log(score, multiLevel);
                score -= multiPrice[x];
                scoreHTML.innerHTML = score;
                clickAmount = multiAmount[x];
                
                if (x!==11){
                    multiLevel++; 
                    currentMultiHTML.innerHTML = "x" + multiLevel;
                    nextMultiHTML.innerHTML = "x" + (multiLevel+1);
                    nextMultiPriceHTML.innerHTML = multiPrice[x+1];
                }
                else{
                    currentMultiHTML.innerHTML = "10 (max)";
                    nextMultiHTML.innerHTML = "/";
                    nextMultiPriceHTML.innerHTML = "/";
                }
            }
        }
    }
}
multiButton.addEventListener("click", Multi);

function addAutoclick(){
    score += currentAutoclickAmount;
    scoreHTML.innerHTML = score;
    setTimeout(function(){addAutoclick()}, 3000);
}

function Autoclick(){
    for (x=0;x<=10;x++){
        if(autoclickLevel==x){
            //check if has enough money
            if (score>=autoclickPrice[x]){
                console.log(score, autoclickLevel);
                score -= autoclickPrice[x];
                scoreHTML.innerHTML = score;
                currentAutoclickAmount = autoclickAmount[x];
                addAutoclick();
                
                if (x!==10){
                    autoclickLevel++; 
                    currentAutoclickLevelHTML.innerHTML = autoclickLevel + "click/sec";
                    nextAutoclickLevelHTML.innerHTML = (autoclickLevel+1) + "click/sec";
                    nextAutoclickPriceHTML.innerHTML = autoclickPrice[x+1];
                }
                else{
                    currentAutoclickLevelHTML.innerHTML = "10 (max)";
                    nextAutoclickLevelHTML.innerHTML = "/";
                    nextAutoclickPriceHTML.innerHTML = "/";
                }
            }
        }
    }
};

autoclick.addEventListener("click", Autoclick);

