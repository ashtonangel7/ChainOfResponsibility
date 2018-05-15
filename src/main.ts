const readline = require('readline');

import Loan = require("./Loan");
import Consultant = require("./Consultant");
import Manager = require("./Manager");

const readLine = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

readLine.question("What is the loan amount? :",(answer => {

    if (isNaN(Number(answer))) {
        console.log("Not a number.");
        readLine.close();
        return;
    }

    let loan = new Loan(answer);
    let consultant = new Consultant();
    consultant.SetNextApprover(new Manager());
    consultant.Approve(loan);

    readLine.close();
}));

