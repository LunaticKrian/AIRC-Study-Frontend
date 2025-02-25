const path = require('path');

module.exports = {
    // 设置webpack运行模型
    mode: 'development',
    // 指定项目入口文件
    entry: './src/index.ts',
    // 指定项目输出文件目录
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.[contenthash].js',
        publicPath: '/dist/bundle.[contenthash]',
    },
    // 配置调试工具
    devtool: 'source-map',
    // 配置模块化处理规则（配置loader：指定webpack如何处理这些文件）
    module: {
        rules: [
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                loader: 'ts-loader',
            }
        ]
    },
    // 配置webpack文件解析
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    }
}