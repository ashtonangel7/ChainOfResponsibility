import LoanApprover = require("./LoanApprover");
import Loan = require("./Loan");

class Consultant extends LoanApprover {
    protected _nextApprover: LoanApprover;
    Approve(loan: Loan): void {
        if (loan.LoanAmount <= 1000) {
            console.log("Loan approved by Consultant.");
        }
        else {
            this._nextApprover.Approve(loan);
        }
    }
    SetNextApprover(approver: LoanApprover): void {
        this._nextApprover = approver;
    }
}

export = Consultant;