const path = require('path');

function project(sub) {
    return path.resolve(__dirname + '/../', !sub ? '' : sub)
}
function src(sub) {
    return path.resolve(project(), 'src', !sub ? '' : sub)
}
function out(sub) {
    return path.resolve(project(), 'out', !sub ? '' : sub)
}
function dist(sub) {
    return path.resolve(out(), 'dist', !sub ? '' : sub)
}

exports.project = project;
exports.src = src;
exports.out = out;
exports.dist = dist;
