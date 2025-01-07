module.exports = {
    entry: './script/index.js',
    output: {
        filename: 'bundle.js',
    },
    mode: 'development',

    module: {
        rules: [{
            test: /\.css$/,
            use: 'css-loader',
        }]
    }
}