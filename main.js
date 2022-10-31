/**********
 * DATA *
 **********/

let sixes = [];
let doubleSixes = [];
let twelves = [];
let twenties = [];

/********************
 * HELPER FUNCTIONS *
********************/

const getRandomNumber = function(max) {
    const rand = Math.random();
    const range = rand * max;
    const result = Math.ceil(range);
    return result;
}

/*******************
 * YOUR CODE BELOW *
 *******************/






/*******************
 * EVENT LISTENERS *
 *******************/
//resetbutton Que
let resetButton = document.querySelector("#reset-button");


///Mean queries 
let d6mean = document.querySelector("#d6-rolls-mean");
let dbD6mean = document.querySelector("#double-d6-rolls-mean");
let d12mean = document.querySelector("#d12-rolls-mean");
let d20mean = document.querySelector("#d20-rolls-mean");
//median queries
let d6median = document.querySelector("#d6-rolls-median");
let dbD6median = document.querySelector("#double-d6-rolls-median");
let d12median = document.querySelector("#d12-rolls-median");
let d20median = document.querySelector("#d20-rolls-median");

//mode queries
let d6mode = document.querySelector("#d6-rolls-mode");
let dbD6mode = document.querySelector("#double-d6-rolls-mode");
let d12mode = document.querySelector("#d12-rolls-mode");
let d20mode = document.querySelector("#d20-rolls-mode");

//Image queries 
 let d6DiceImg = document.querySelector('#d6-roll');
 let dbD6DiceImg1 = document.querySelector("#double-d6-roll-1");
 let dbD6DiceImg2 = document.querySelector("#double-d6-roll-2");
 let d12DiceImg = document.querySelector("#d12-roll");
 let d20DiceImg = document.querySelector("#d20-roll");


 //Image Sourcing 
d6DiceImg.src = "images/start/d6.png";
dbD6DiceImg1.src = "images/start/d6.png";
dbD6DiceImg2.src = "images/start/d6.png";
d12DiceImg.src = "images/start/d12.jpeg";
d20DiceImg.src = "images/start/d20.jpg";



/******************
 * RESET FUNCTION *
 ******************/


//reset function event listener

resetButton.addEventListener('click', function(){

    reset();

})


function reset(){
//empty global arrays
sound();
sixes = [];
doubleSixes = [];
twelves = [];
twenties = [];

//reset images
d6DiceImg.src = "images/start/d6.png";
dbD6DiceImg1.src = "images/start/d6.png";
dbD6DiceImg2.src = "images/start/d6.png";
d12DiceImg.src = "images/start/d12.jpeg";
d20DiceImg.src = "images/start/d20.jpg";

//reset mean 
dbD6mean.innerText = "";
d6mean.innerText = "";
d12mean.innerText = "";
d20mean.innerText = "";

//reset median 
dbD6median.innerText = "";
d6median.innerText = "";
d12median.innerText = "";
d20median.innerText = "";

//reset mode 
dbD6mode.innerText = "";
d6mode.innerText = "";
d12mode.innerText = "";
d20mode.innerText = "";
}

/****************************
 * CLICK HANDLING FUNCTIONS *
****************************/
//Dice 6 event listner
d6DiceImg.addEventListener('click', function(){

    let random = getRandomNumber(6);
    sixes.push(random);
    sound();
    
    if (random === 6){
    
        d6DiceImg.src ="images/d6/6.png";
    } else if (random === 5){
    
        d6DiceImg.src ="images/d6/5.png";
    } else if (random === 4){
        
        d6DiceImg.src ="images/d6/4.png";
    } else if (random === 3){
        
        d6DiceImg.src ="images/d6/3.png";
    } else if (random === 2){
        
        d6DiceImg.src ="images/d6/2.png";
    } else if (random === 1){
        d6DiceImg.src ="images/d6/1.png";
    }
    
    //mean
    let average = mean(sixes);
    d6mean.innerText = String(average);
    //median
    let medianAv = median(sixes);
    d6median.innerText = String(medianAv);
    //mode
    let modeAv = mode(sixes);
    d6mode.innerText = String(modeAv);
    
    
    })
    
    //Dice Double 6 event listener 
    
    
    dbD6DiceImg1.addEventListener('click', function(){
       
        let randomDice1 = getRandomNumber(6);
        let randomDice2 = getRandomNumber(6);
        let total = randomDice1 + randomDice2;
        doubleSixes.push(total);
        sound();
    
        //Dice one
        if (randomDice1 === 6){
    
            dbD6DiceImg1.src ="images/d6/6.png";
        } else if (randomDice1 === 5){
        
            dbD6DiceImg1.src ="images/d6/5.png";
        } else if (randomDice1 === 4){
            
            dbD6DiceImg1.src ="images/d6/4.png";
        } else if (randomDice1 === 3){
            
            dbD6DiceImg1.src ="images/d6/3.png";
        } else if (randomDice1 === 2){
            
            dbD6DiceImg1.src ="images/d6/2.png";
        } else if (randomDice1 === 1){
            dbD6DiceImg1.src ="images/d6/1.png";
        }
    
        //Dice Two 
            if (randomDice2 === 6){
        
                dbD6DiceImg2.src ="images/d6/6.png";
            } else if (randomDice2 === 5){
            
                dbD6DiceImg2.src ="images/d6/5.png";
            } else if (randomDice2 === 4){
                
                dbD6DiceImg2.src ="images/d6/4.png";
            } else if (randomDice2 === 3){
                
                dbD6DiceImg2.src ="images/d6/3.png";
            } else if (randomDice2 === 2){
                
                dbD6DiceImg2.src ="images/d6/2.png";
            } else if (randomDice2 === 1){
                dbD6DiceImg2.src ="images/d6/1.png";
            }
            //mean
            let meanAv = mean(doubleSixes);
            dbD6mean.innerText = String(meanAv);
            //median
            let medianAv = median(doubleSixes);
            dbD6median.innerText = String(medianAv);
            //mode
            let modeAv = mode(doubleSixes);
            dbD6mode.innerText = String(modeAv);
    
    }) 
    
    //D12 
    
    
    d12DiceImg.addEventListener('click', function(){
        let random12 = getRandomNumber(12);
        twelves.push(random12);
        sound();
        
        if (random12 === 12){
        
            d12DiceImg.src ="images/numbers/12.png";
        } else if (random12 === 11){
        
            d12DiceImg.src ="images/numbers/11.png";
        } else if (random12 === 10){
            
            d12DiceImg.src ="images/numbers/10.png";
        } else if (random12 === 9){
            
            d12DiceImg.src ="images/numbers/9.png";
        } else if (random12 === 8){
            
            d12DiceImg.src ="images/numbers/8.png";
        } else if (random12 === 7){
    
            d12DiceImg.src ="images/numbers/7.png";
        } else if (random12 === 6){
        
            d12DiceImg.src ="images/numbers/6.png";
        } else if (random12 === 5){
            
            d12DiceImg.src ="images/numbers/5.png";
        } else if (random12 === 4){
            
            d12DiceImg.src ="images/numbers/4.png";
        } else if (random12 === 3){
            
            d12DiceImg.src ="images/numbers/3.png";
        } else if (random12 === 2){
            
            d12DiceImg.src ="images/numbers/2.png";
        } else if (random12 === 1){
            
            d12DiceImg.src ="images/numbers/1.png";
        }

        //mean
        let average = mean(twelves);
        d12mean.innerText = String(average);

        //median
        let medianAv = median(twelves);
        d12median.innerText = String(medianAv);

        //mode
        let modeAv = mode(twelves);
        d12mode.innerText = String(modeAv);
    
    })
    
    
    
    
    //dice20 Event Listener
    
    d20DiceImg.addEventListener('click', function(){
        let random20 = getRandomNumber(20);
        twenties.push(random20);
        sound();

        if (random20 === 20){
    
            d20DiceImg.src ="images/numbers/20.png";
        } else if (random20 === 19){
    
            d20DiceImg.src ="images/numbers/19.png";
        } else if (random20 === 18){
    
            d20DiceImg.src ="images/numbers/18.png";
        } else if (random20 === 17){
        
            d20DiceImg.src ="images/numbers/17.png";
        } else if (random20 === 16){
        
            d20DiceImg.src ="images/numbers/16.png";
        } else if (random20 === 15){
        
            d20DiceImg.src ="images/numbers/15.png";
        } else if (random20 === 14){
        
            d20DiceImg.src ="images/numbers/14.png";
        } else if (random20 === 13){
    
            d20DiceImg.src ="images/numbers/13.png";
        } else if (random20 === 12){
        
            d20DiceImg.src ="images/numbers/12.png";
        } else if (random20 === 11){
        
            d20DiceImg.src ="images/numbers/11.png";
        } else if (random20 === 10){
            
            d20DiceImg.src ="images/numbers/10.png";
        } else if (random20 === 9){
            
            d20DiceImg.src ="images/numbers/9.png";
        } else if (random20 === 8){
            
            d20DiceImg.src ="images/numbers/8.png";
        } else if (random20 === 7){
            
            d20DiceImg.src ="images/numbers/7.png";
        } else if (random20 === 6){
        
            d20DiceImg.src ="images/numbers/6.png";
        } else if (random20 === 5){
            
            d20DiceImg.src ="images/numbers/5.png";
        } else if (random20 === 4){
            
            d20DiceImg.src ="images/numbers/4.png";
        } else if (random20 === 3){
            
            d20DiceImg.src ="images/numbers/3.png";
        } else if (random20 === 2){
            
            d20DiceImg.src ="images/numbers/2.png";
        } else if (random20 === 1){
            
            d20DiceImg.src ="images/numbers/1.png";
        } 
    
        //mean
        let average = mean(twenties);
        d20mean.innerText = String(average);
        //median
        let medianAv = median(twenties);
        d20median.innerText = String(medianAv);
        //mode
        let modeAv = mode(twenties);
        d20mode.innerText = String(modeAv);
    
    })


/****************
 * MATH SECTION *
 ****************/



//function mean
function mean(array){
let total = 0;
let mean = 0;
 for(let numbers of array)
 {
    total += numbers;
    mean = total / array.length;
 }

 return mean;
 
}



//function median 
function median(array){

let newArray = [];
let location = 0;
let median = 0;
let twoMedian = 0;


newArray = array.sort(compareNumbers)
  


    if(newArray.length === 2 ){

    median = newArray[0] + newArray[1];
    twoMedian = median / 2;
    return twoMedian;

  } else if(newArray.length % 2 === 0){
    
    let evenLocation1 = newArray.length / 2 + 1;
    let evenLocation2 = newArray.length / 2;
    median = newArray[evenLocation1] + newArray[evenLocation2] / 2;
    return median;

  } else {

     let median = newArray.length / 2 + .5;
     return median;

  }



}



//smallest to largest
function compareNumbers(a, b) {
    return a-b;
 }




//function mode
function mode(array) {
    let frequency = []; // array of frequency.
    let maxFreq = 0; // holds the max frequency.
    let modes = [];
  
    for (let item in array) 
    {
      frequency[array[item]] = (frequency[array[item]] || 0) + 1; // increment frequency.
  
    // is this frequency > max so far 
    if(frequency[array[item]] > maxFreq)
         { 
        maxFreq = frequency[array[item]]; // update max.
         }
    }
  
    for (let num in frequency)
    {
    if(frequency[num] === maxFreq) 
        {
        modes.push(num);
        }
    }
  
    return modes;
  }

  

//function sound 
function sound(){
let audio = new Audio('images/sound/dice_shake-96201.mp3');
audio.play();
}

