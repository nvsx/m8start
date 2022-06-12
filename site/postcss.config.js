module.exports = {
  plugins: [
    require('postcss-import'),
    require('postcss-preset-env')({ stage: 1}),
    // require('postcss-nested'), -- stage 1 already gives nesting!
    require('autoprefixer'),
    require('cssnano'),
  ]
}
