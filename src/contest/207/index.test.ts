import { solveRepression, solveRepression2 } from '.';

test('example 1', () => {
    expect(solveRepression("3 4 5")).toBe(9)
})

test('example 2', () => {
    expect(solveRepression("6 6 6")).toBe(12)
})

test('example 3', () => {
    expect(solveRepression("99 99 98")).toBe(198)
})

test('example 1', () => {
    expect(solveRepression2("3 4 5")).toBe(9)
})

test('example 2', () => {
    expect(solveRepression2("6 6 6")).toBe(12)
})

test('example 3', () => {
    expect(solveRepression2("99 99 98")).toBe(198)
})