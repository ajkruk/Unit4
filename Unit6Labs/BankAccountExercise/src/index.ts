
export class BankAccount {
    static addInterest(): any {
        throw new Error("Method not implemented.");
    }
    balance: number; 
    interestRate: number = 0.05;

    constructor(balance: number) {
        this.balance = balance;
    }

    addInterest() : number {
        return ((this.balance * this.interestRate) + this.balance);
    };
};

export class BankAccountWithFee extends BankAccount {
    fee: number = 5.99;

    applyFee() : number {
        return this.balance - this.fee
};

};