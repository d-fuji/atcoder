export const solveRollingDice = (input: string): string => {
    const array: number[] = input.split(" ").map(i => parseInt(i))
    if (1 * array[0] <= array[1] && array[1] <= 6 * array[0]) return "Yes"
    return "No"
}

export const solveFactorialYenCoin = (input: string): number => {
    let price: number = parseInt(input)
    let coins: number[] = []
    let factorical: number = 1
    for (let i = 1; price > sum(coins); i++) {
        factorical *= i
        if (factorical >= price) {
            coins.push(factorical / i)
            factorical = 1
        }
    }
    return coins.length
}

const sum = (coins: number[]): number => {
    if (coins = []) {
        coins.push(0)
    }
    return coins.reduce((a: number, b: number) => a + b , 0);
}