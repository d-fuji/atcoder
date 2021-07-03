export const solveRepression = (input: string): number => {
    const array: number[] = input.split(" ").map(i => parseInt(i))
    const sums: number[] = []
    for (let left = 0; left < (array.length - 1); left++) {
        for (let right = left + 1; right < array.length; right++) {
            sums.push(array[left] + array[right])
        }
    }
    return Math.max(...sums)
}

export const solveRepression2 = (input: string): number => {
    const array: number[] = input.split(" ").map(i => parseInt(i))
    array.sort((a, b) => b - a)
    return array[0] + array[1]
}

