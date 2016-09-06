module.exports = function () {
    var __sprite__ = { path: './icons/*.svg', name: 'svg/[hash].icons.svg' };
    require('webpack-svgstore-plugin/src/helpers/svgxhr')(__sprite__);
};