module.exports = function() {
    return [
        //javascript
        {
            test: /\.js$/,
            exclude: /node_modules/,
            use: 'babel-loader',
        },
        //изображения. загрузчик для работы со статическими файлами
        {
            test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
            type: 'asset/resource',
        },
        //шрифты и SVG
        {
            test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
            type: 'asset/inline',
        },
        // CSS, PostCSS, Sass
        {
            test: /\.(scss|css)$/,
            use: [
                'style-loader', 
                'css-loader', 
                'postcss-loader', 
                'sass-loader'
            ],
        },
    ]
}