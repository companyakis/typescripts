interface BankLoan {
    (score: number, hasLoanGuarantee: boolean) : string
}

let credit: BankLoan;

credit = function(score: number, hasLoanGuarantee: boolean) : string {

    return score > 90 && hasLoanGuarantee ? "Customer credit approved" : "Customer credit not approved"
}

let result1 = credit(97, true)

console.log(result1) //Customer credit approved

let result2 = credit(91, false)

console.log(result2) //Customer credit not approved
