import { solution } from './a';

test('basic', () => {
    expect(solution(["daiki", "kyokai"])).toBe("daiki")
})

test('basic again', () => {
    expect(solution(["shin", "kyokai"])).toBe("")
})

test('normal', () => {
    expect(solution([])).toBe("")
})
