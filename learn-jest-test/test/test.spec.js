const add = require("../add")

describe('add', () => {
    it('1+1=2', () => {
        const a = 1
        const b = 1
        const res = add(a, b)
        expect(res).toBe(2)
    })
})


it('string contain str', () => {
    let str = 'string'
    expect(str).toContain('str')
})

it('obj equal obj', () => {
    const objA = {
        name: 'objA'
    }
    const objB = {
        name: 'objA'
    }
    expect(objA).toEqual(objB)
})