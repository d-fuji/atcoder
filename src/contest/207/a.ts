export const solution = (people: string[]): string => {
    const personIncludesD: any = people.find(person => person.includes("d"))
    if (personIncludesD === undefined) {
        return ""
    }
    return personIncludesD
}

console.log(solution(["a"]))