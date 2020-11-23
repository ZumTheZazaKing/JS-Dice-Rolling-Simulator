//the function for rolling the dice
function rollTheDice(){

    /*first, we make an array of numbers which will be the outcomes of our dice roll
    In this case, we want the outcome to be either from 1-6 because our dice has 6 sides*/
    const outcomes = [1, 2, 3, 4, 5, 6];

    /*Next, we make a variable that will act as a selector for our dice. This variable will
    pick and store an index of our 'outcomes' array*/
    const result = Math.floor(Math.random()*Math.floor(outcomes.length));

    /**Afterwards, we grab the text below our dice image which is currently hidden */
    const textOutcome = document.getElementById('result');

    /**We remove the class 'hidden' from our HTML element stored inside the 'textOutcome'
    variable, therefore making it visible to the interface
    */
    textOutcome.classList.remove('hidden');

    //We then changed what we just revealed to a text that tells the client what he got
    textOutcome.innerText = `You rolled a ${outcomes[result]}!`;
 
    //this if else statement does the same thing the switch statement below it does
    //However, a switch is much more cleaner and has more readabiltiy than the if statement 
    //so I decided to use the switch statement and close of this if statement.
    /*
    if (outcomes[result] === 1){
        document.getElementById('dice').src = 'Die(1).jpg';

    } else if (outcomes[result] === 2){
        document.getElementById('dice').src = 'Die(2).jpg';

    } else if (outcomes[result] === 3){
        document.getElementById('dice').src = 'Die(3).jpg';

    } else if (outcomes[result] === 4){
        document.getElementById('dice').src = 'Die(4).jpg';

    } else if (outcomes[result] === 5){
        document.getElementById('dice').src = 'Die(5).jpg';

    } else if (outcomes[result] === 6){
        document.getElementById('dice').src = 'Die(6).jpg';

    }
    */

    
    //this here is a switch statement that will display the image of the dice 
    //based on what number the client got. For example, if I got 4, it'll show the image
    //of the dice's 4
    switch (outcomes[result]){

        case 1:
            document.getElementById('dice').src = 'Die(1).jpg';
            break;

        case 2:
            document.getElementById('dice').src = 'Die(2).jpg';
            break;

        case 3:
            document.getElementById('dice').src = 'Die(3).jpg';
            break;

        case 4:
            document.getElementById('dice').src = 'Die(4).jpg';
            break;

        case 5:
            document.getElementById('dice').src = 'Die(5).jpg';
            break;

        case 6:
            document.getElementById('dice').src = 'Die(6).jpg';
            break;
    }
    

};