//coins to cash
// const piggyBank = {
//     "quarters" : 67,
//     "nickels" : 59,
//     "dimes" : 2,
//     "pennies" : 19
// }

// let dollarAmount = 0

// const totalMoney = (currentObject) => {
//     for (let key in currentObject) {
//         if (key === "quarters") {
//             dollarAmount += currentObject[key] * .25
//         } else if (key === "nickels") {
//             dollarAmount += currentObject[key] * .05
//         } else if (key === "dimes") {
//             dollarAmount += currentObject[key] * .1
//         } else if (key === "pennies") {
//             dollarAmount += currentObject[key] * .01
//         } 

//     } 
// }
// totalMoney(piggyBank)
// console.log(dollarAmount)

//cash to coins
const piggyBank = {}
const dollarAmount = 45.88

const totalMoney = (money) => {
    let leftOver = 0
    let dollars = 0
    let cents = 0
    const wholeNumber = (num) => {
        let number = num
        number *= 100
        console.log(number)
        while (cents < 99)
            if (number % 100 === 00) {
                dollars = number
                break
            } else {
                cents += 1
                number -= 1
            }
    }
    wholeNumber(money)
    // dollars /= 100
    // cents /= 100
    console.log(dollars)
    console.log(cents)
    
    let quartersFromDollars = dollars / 25
    let quartersFromCents   = Math.floor(cents / 25)
    leftOver = cents - (quartersFromCents * 25)
    let dimes = Math.floor(leftOver / 10)
    leftOver -= dimes * 10
    let nickels = Math.floor(leftOver / 5)
    leftOver -= nickels * 5
    let pennies = Math.floor(leftOver / 1)
    leftOver -= pennies * 1
    let quarters = quartersFromCents +  quartersFromDollars
    piggyBank.quarters = quarters
    piggyBank.dimes = dimes
    piggyBank.nickels = nickels
    piggyBank.pennies = pennies
    console.log(piggyBank)

}
totalMoney(dollarAmount)

