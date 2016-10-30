/** //Section 1, Multi-line Comment
 *   @author Bates, Howard (hbates@northmen.org) //Name of the author, and contact details
 *   @version 0.0.2 //Version of the program
 *   @summary Project 4 demo code || created: 03.16.2016 //Describes the program, and states creation time
 *   @todo //A todo list. Self-explanatory
 */ //End of multi-line comment

"use strict"; //Section 2, sets strict mode
const PROMPT = require('readline-sync'); //Calls the method readline-sync when PROMPT is used

let continueResponse; //Section 3, Sets a global numeric variable
let currentMonth, currentGrade, currentClassroom, upperTuition; //Sets more global numeric variables
const MAX_GRADE = 8, //Creates and assigns a value to a global constant
    MAX_MONTH = 9, //Creates and assigns a value to a global constant
    MAX_CLASSROOM = 3, //Creates and assigns a value to a global constant
    KDG_TUITION = 80; //Creates and assigns a value to a global constant

function main() { //Section 4, creates an accessor method
    process.stdout.write('\x1Bc'); //Clears the screen
    setContinueResponse(); //Calls a method
    while (continueResponse === 1) { //If continueResponse is equal to one, then it will continue to...
        setCurrentMonth(); //Calls a method
        setCurrentGrade(); //Calls a method
        setCurrentClassroom(); //Calls a method
        processPaymentCoupons(); //Calls a method
        setContinueResponse(); //Calls a method
        for (let i = 0; i < MAX_CLASSROOM; i++) { //Three times, it...
            printGoodbye(); //Calls a method
        }
    }
}

main(); //Calls the main method

function setContinueResponse() { //Creates a mutator method
    if (continueResponse != null) { //If continueResponse has been set before, then...
        continueResponse = -1; //Sets continueResponse to -1
        while (continueResponse !== 0 && continueResponse !== 1) { //While continueResponse is equal to something it should not be equal to, then...
            continueResponse = Number(PROMPT.question(`\nDo you want to continue? [0=no, 1=yes]: `)); //Validates the user's input, and sets continueResponse equal to said input
        }
    } else {
        continueResponse = 1; //Sets continueResponse to 1
    }
}

function setCurrentMonth() { //Creates a mutator method
    if (currentMonth != null && currentMonth <= MAX_MONTH) { //If currentMonth has been set before, and it is less than 9, then...
        currentMonth++; //Increase currentMonth by one
    } else {
        currentMonth = 1; //Sets currentMonth to 1
    }
}

function setCurrentGrade() { //Creates a mutator method
    if (typeof currentGrade !=='undefined' && currentGrade <= MAX_GRADE) { //If currentGrade has a value, and it is less than 8, then...
        currentGrade++; //Increase currentGrade by one
    } else {
        currentGrade = 0; //Sets currentGrade to 0
    }
}

function setCurrentClassroom() { //Creates a mutator method
    if (typeof currentClassroom !=='undefined' && currentClassroom <= MAX_CLASSROOM) { //If currentClassroom has a value, and it is less than 3, then...
        currentClassroom++; //Increase currentClassroom by one
    } else {
        currentClassroom = 1; //Sets currentClassroom to 1
    }
}

function setUpperTuition() { //Creates a mutator method
    const BASE_TUITION = 60; //Creates and assigns a value to a local constant
    upperTuition = BASE_TUITION * currentGrade; //Sets upperTuition to the product of 60 and the variable currentGrade
}

function processPaymentCoupons() { //Creates an accessor method
    while (currentGrade <= MAX_GRADE) { //While currentGrade is less than or equal to 8, then...
        while (currentClassroom <= MAX_CLASSROOM) { //While currentClassroom is less than or equal to 3, then...
            while (currentMonth <= MAX_MONTH) { //While currentMonth is less than or equal to 9, then...
                if (currentGrade == 0) { //If currentGrade is equal to 0, then...
                    console.log(`\n\tThe tuition for month: ${currentMonth}, for classroom: ${currentClassroom}, of grade: ${currentGrade} is: \$${KDG_TUITION}.`); //Prints a statement detailing the cost of tuition for a student in a certain grade, during a certain month, in a certain classroom
                } else {
                    setUpperTuition(); //Calls a method
                    console.log(`\n\tThe tuition for month: ${currentMonth}, for classroom: ${currentClassroom}, of grade: ${currentGrade} is: \$${upperTuition}.`); //Prints a statement detailing the cost of tuition for a student in a certain grade, during a certain month, in a certain classroom
                }
                setCurrentMonth(); //Calls a method
            }
            setCurrentClassroom(); //Calls a method
            setCurrentMonth(); //Calls a method
        }
        setCurrentGrade(); //Calls a method
        setCurrentClassroom(); //Calls a method
    }
}

function printGoodbye() { //Creates a generic method
    console.log(`\tGoodbye.`); //Prints a statement bidding the user farewell.
}
