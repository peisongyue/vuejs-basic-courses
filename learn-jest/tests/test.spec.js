const { add2 } = require("../add")

describe('add', () => {
    it("1 + 1 = 2", () => {
        // 准备数据 given
        const a = 1
        const b = 1
    
        // 触发测试动作 when
        const result = add2(a, b)
    
        // jest 断言
        // toBe -> jest 匹配器
        // then 验证
        expect(result).toBe(2)
    })
    
    it('2+2', () => {
        const a = 2
        const b = 2
    
        const result = add(a, b)
    
        expect(result).toBe(4)
    })
})

test("判断2个对象是否相等", () => {
    const objA = {
        name: "objA"
    }
    const objB = {
        name: 'objA'
    }
    expect(objA).toEqual(objB)
})

test("string contain str", () => {
    let str = 'string'
    expect(str).not.toContain('hello')
})