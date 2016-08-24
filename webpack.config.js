
module.exports = {
    context: __dirname,
    entry: "./app-client",
    output: {
        path: __dirname + "/public",
        filename: "bundle.js"
    },
    module: {
        loaders: [{
           exclude: /(node_modules|server|public)/,
            loader: 'babel'
            
        }]
    }
}