import LoanApprover = require("./LoanApprover");
import Loan = require("./Loan");

class Manager extends LoanApprover {
    protected _nextApprover: LoanApprover;
    Approve(loan: Loan): void {
        if (loan.LoanAmount > 1000) {
            console.log("Loan approved by Manager");
        }
        else {
            this._nextApprover.Approve(loan);
        }
    }
    SetNextApprover(approver: LoanApprover): void {
        this._nextApprover = approver;
    }
}

export = Manager;