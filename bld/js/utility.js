'use strict';

var UTIL = {};
UTIL.rndInt = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
UTIL.isEven = function (num) {
    return num / 2 === Math.floor(num / 2);
};
UTIL.isFloat = function (num) {
    return !(num === Math.floor(num));
};
UTIL.classList = function (el) {
    var ar = el.className.split(' ').filter(function (c) {
        return c !== '';
    }),
        ec = ' ' + el.className + ' ';
    return {
        show: ar,
        count: ar.length,
        indexOf: function indexOf(clN) {
            return ar.indexOf(clN);
        },
        add: function add(clN) {
            return ar.indexOf(clN) === -1 ? el.className += ' ' + clN : el.className;
        },
        remove: function remove(clN) {
            return ar.indexOf(clN) === -1 ? el.className : el.className = ec.replace(' ' + clN, '').replace(/^\s+|\s+$/gm, '');
        },
        toggle: function toggle(clN) {
            return ar.indexOf(clN) === -1 ? el.className = el.className.replace(/^\s+|\s+$/gm, '') + ' ' + clN : el.className = ec.replace(' ' + clN, '').replace(/^\s+|\s+$/gm, '');
        }
    };
};
UTIL.unitEndings = function (num, un) {
    // un = ['штук','штука','штуки'];
    var r = un[2];
    num = Math.abs(num);
    if (!UTIL.isFloat(num)) {
        if (num % 10 === 0 || num % 10 > 4 || num % 100 > 10 && num % 100 < 20) r = un[0];else if (num % 10 === 1) r = un[1];
    }
    return r;
};