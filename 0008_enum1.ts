enum Areas1 {
    DeFi,
    Dapp,
    AI,
    AlgoTrade,
}

console.log(Areas1.Dapp) //1

console.log(Areas1[2]) //AI

enum Areas2 {
    DeFi = 10,
    Dapp,
    AI,
    AlgoTrade,
}

console.log(Areas2.Dapp) //11

console.log(Areas2[12]) //AI
