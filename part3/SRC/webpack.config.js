//引入一个包
const path = require('path');

module.exports = {
 //指定入口文件
    entry: "./src/index.ts",
 //打包文件目录   
    output: {
    
        path: path.resolve(__dirname, 'dist'),
        
        filename:"bundle.js"
    },
    module: {
        rules: [
         
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude:/node-modules/

            }
       ] 


    }


}