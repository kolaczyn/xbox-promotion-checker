// stolen from https://github.com/kolaczyn/fpts/blob/eb344a3d1af0cf34676fc445565097d186e90543/src/arr/range/range.ts
export const range = (n: number) => [...Array(n)].map((_, i) => i)
