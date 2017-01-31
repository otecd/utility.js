const UTIL = {};
UTIL.rndInt = (min, max) => Math.floor(Math.random() * (max - min + 1) ) + min;
UTIL.isEven = (num) => num/2 === Math.floor(num/2);
UTIL.isFloat = (num) => !(num === Math.floor(num));
UTIL.classList = function(el) {
    let ar = el.className.split(' ').filter((c) => c !== ''),
        ec = ' ' + el.className + ' ';
    return {
        show: ar,
        count: ar.length,
        indexOf: (clN) => ar.indexOf(clN),
        add: (clN) => (ar.indexOf(clN) === -1) ? el.className += ' ' + clN : el.className,
        remove: (clN) => (ar.indexOf(clN) === -1) ? el.className : el.className = ec.replace(' '+clN, '').replace(/^\s+|\s+$/gm, ''),
        toggle: (clN) => (ar.indexOf(clN) === -1) ? el.className = el.className.replace(/^\s+|\s+$/gm, '') + ' ' + clN : el.className = ec.replace(' '+clN, '').replace(/^\s+|\s+$/gm, '')
    };
};
UTIL.unitEndings = (num, un) => {
    // un = ['штук','штука','штуки'];
    let r = un[2];
    num = Math.abs(num);
    if (!UTIL.isFloat(num)) {
        if ((num % 10 === 0) || (num % 10 > 4) || ((num % 100 > 10) && (num % 100 < 20))) r = un[0];
        else if (num % 10 === 1) r = un[1];
    }
    return r;
};
