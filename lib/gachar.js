var LENGTH = 32;
var items = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'.split('');
var tick = (typeof setImmediate === 'function ') ? setImmediate : process.nextTick;

exports.run = gachar;

function gachar(length, callback) {

    if (arguments.length == 0) {
        length = LENGTH;
    } else if (arguments.length == 1) {
        if (typeof arguments[0] === 'function') {
            callback = arguments[0];
            length = LENGTH;
        }
    }

    if (callback) {
        createRandomStringTick(length, '', callback);
    } else {
        return createString(length);
    }
}

function createRandomStringTick (length, base, callback) {
    var max = 100;

    tick(function () {
        if (length > max) {
            base += createString(max);
            createRandomStringTick(length - max, base, callback);
        } else {
            base += createString(length);
            callback(base);
        }
    });
}

function createString (length) {
    var result = '';
    for (var i = 0; i < length; i++) {
        result += items[ Math.floor( Math.random() * items.length ) ];
    }

    return result;
}