const path = require ('path')
const HtmlWebpackPlugin = require ('html-webpack-plugin')

module.exports = {
    entry: './src/js/index.js', // entry point is where webpack will look for dependencies to start bundling. 
    output: { // Tells Webpack here to save bundle file
        path: path.resolve(__dirname, 'dist'), //joining dist folder with "dist" path name.
        filename: 'js/bundle.js'
    },
    devServer: {
        contentBase: './dist' //speciy folder from which Webpack should serve files. Kind of like the output
    },
    plugins: {
        new HtmlWebpackPlugin ({  //used for copying src html to dist html
            filename: 'index.html',
            template: './src/index.html'
        })
    }
}