// 构建目标是否为库
module.exports = {
    publicPath: '',
    
    css: {
        loaderOptions: {
            sass: {
                prependData: `@import "src/assets/scss/variables.scss";`
            }
        }
    }
}