class Loan {
    private readonly _loanAmount: number;
    constructor(loanAmount: number) {
        this._loanAmount = loanAmount
    }
    
    public get LoanAmount() : number {
        return this._loanAmount;
    }
    
}

export = Loan;