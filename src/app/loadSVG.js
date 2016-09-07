const svgXHR = require('webpack-svgstore-plugin/src/helpers/svgxhr');

module.exports = function loadSVG() {
    svgXHR({ path: '../assets/icons/*.svg', name: 'svg/[hash].icons.svg' });
};
