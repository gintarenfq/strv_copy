const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractCss = new ExtractTextPlugin('app.css');

module.exports = {
    entry: [
        './src/scss/app.scss'
    ],

    output: {
        path: path.resolve(__dirname, 'dist/'),
        filename: 'app.js'
    },
    module: {
        loaders: [
            {
                test: /\.scss$/,
                use: extractCss.extract({
                    use: ['css-loader?url=false', 'sass-loader', 'import-glob-loader']
                })
            }

        ]
    },
    plugins: [
        extractCss
    ]
};
