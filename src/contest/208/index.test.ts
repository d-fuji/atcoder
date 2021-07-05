import { solveRollingDice, solveFactorialYenCoin } from "."


describe('Rolling Dice', () => {
    test('example 1', () => {
        expect(solveRollingDice("2 11")).toBe("Yes")
    })
    
    test('example 2', () => {
        expect(solveRollingDice("2 13")).toBe("No")
    })
    
    test('example 3', () => {
        expect(solveRollingDice("100 600")).toBe("Yes")
    })
})

describe('Factorial Yen Coin', () => {
    test('example 1', () => {
        expect(solveFactorialYenCoin("9")).toBe(3)
    })
    
    test('example 2', () => {
        expect(solveFactorialYenCoin("119")).toBe(10)
    })
    
    test('example 3', () => {
        expect(solveFactorialYenCoin("10000000")).toBe(24)
    })
})
