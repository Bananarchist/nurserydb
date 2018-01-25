const path = require("path");

module.exports = {
    entry: "./public/js/index.jsx",
    output: {
        path: path.resolve("public"),
        filename: "index.js"
    },
    module: {
        loaders: [
            {test: /\.js$/, loader: "babel-loader", exclude: /node_modules/},
            {test: /\.jsx$/, loader: "babel-loader", exclude: /node_modules/}
        ]
    },
    devtool: "source-map"
}
