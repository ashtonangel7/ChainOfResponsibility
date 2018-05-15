import Loan = require("./Loan");

abstract class LoanApprover {
    protected _nextApprover: LoanApprover;
    Approve(loan: Loan): void { };
    SetNextApprover(approver: LoanApprover): void { };
}

export = LoanApprover;