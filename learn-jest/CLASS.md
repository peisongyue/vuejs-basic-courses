# 指令
mkdir learn-jest 创建文件夹
cd learn-jest 进入文件夹
npm init -y 初始化

"test": "jest"

module.exports = (a, b) => {
    return a + b
}

const add = require('../add')

describe 分组

it test
toBe toContain toEqual

module.exports require 是node支持的导入导出

export import 是ES6 支持的导入导出