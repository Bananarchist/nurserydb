const path = require("path");
const VueLoaderPlugin = require("vue-loader/lib/plugin");

var config = {
    entry: "./public/viewVue.js",
    output: {
        path: path.resolve("public"),
        filename: "index.js"
    },
    module: {
        rules: [
            {test: /\.js$/, loader: "babel-loader", exclude: /node_modules/},
            {test: /\.vue$/, loader: "vue-loader", exclude: /node_modules/},
            {test: /\.css$/, use: ["vue-style-loader", "css-loader"], exclude: /node_modules/}
        ]
    },
    devtool: "source-map",
    plugins: [
        new VueLoaderPlugin()
    ]
};

module.exports = (env, argv) => {
    if(argv.mode === "development") {
        //config.devtool = "source-map";
    }

    if(argv.mode === "production") {
        delete config.devtool;
    }

    return config;
};
