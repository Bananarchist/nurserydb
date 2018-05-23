const path = require("path");
const VueLoaderPlugin = require("vue-loader/lib/plugin");

module.exports = {
    entry: "./public/viewVue.js",
    output: {
        path: path.resolve("public"),
        filename: "index.js"
    },
    module: {
        rules: [
            {test: /\.js$/, loader: "babel-loader", exclude: /node_modules/},
            {test: /\.vue$/, loader: "vue-loader", exclude: /node_modules/}
        ]
    },
    devtool: "source-map",
    plugins: [
        new VueLoaderPlugin()
    ]
}
