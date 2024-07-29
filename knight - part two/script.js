// Prompt the user for their name
let name = prompt("Welcome to GC mini golf! What is your name?");
alert(`Hi, ${name}!`);

// Prompt the user if they want to play 3 or 6 holes
let numberOfHoles = parseInt(prompt("Would you like to play 3 or 6 holes?"));

// Validate user input
while (numberOfHoles !== 3 && numberOfHoles !== 6) {
    numberOfHoles = parseInt(prompt("Please enter either 3 or 6 holes."));
}

// Initialize variables
let totalPutts = 0;
const par = numberOfHoles * 3; // Total par for the course

// Loop to get putts for each hole
for (let i = 1; i <= numberOfHoles; i++) {
    let putts = parseInt(prompt(`How many putts for hole ${i}? (par: 3)`));
    // Validate putts input
    while (isNaN(putts) || putts < 0) {
        putts = parseInt(prompt(`Please enter a valid number of putts for hole ${i}.`));
    }
    totalPutts += putts;
}

// Calculate the total par
let totalPar = totalPutts - par;

// Output the result to the console
if (totalPar > 0) {
    console.log(`Nice try, ${name}... Your total par was: +${totalPar}.`);
} else if (totalPar < 0) {
    console.log(`Great job, ${name}! Your total par was: ${totalPar}.`);
} else {
    console.log(`Good game, ${name}. Your total par was: 0.`);
}
