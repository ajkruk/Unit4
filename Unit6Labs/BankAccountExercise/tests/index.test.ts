import { BankAccount } from "../src";

describe("addInterest", () => {
    test("add interest to bank account", () => {
        new BankAccount(2000);
        expect(BankAccount.addInterest()).toBe(2100);
    });
});