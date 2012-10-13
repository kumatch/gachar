var gachar = require('../');

describe('create sync', function () {
    var result;

    describe('run default', function () {
        before(function () {
            result = gachar.run();
        });

        it('should get 32 characters', function () {
            result.length.should.equal(32);
        });

        it('should get randdom characters', function () {
            result.should.match(/^[a-z0-9]+$/i);
        });
    });

    describe('run with 256', function () {
        before(function () {
            result = gachar.run(256);
        });

        it('should get 256 characters', function () {
            result.length.should.equal(256);
        });

        it('should get randdom characters', function () {
            result.should.match(/^[a-z0-9]+$/i);
        });
    });
});

describe('create async', function () {
    var result;

    describe('run default', function () {
        before(function (done) {
            gachar.run(function (s) {
                result = s;
                done();
            });
        });

        it('should get 32 characters', function () {
            result.length.should.equal(32);
        });

        it('should get randdom characters', function () {
            result.should.match(/^[a-z0-9]+$/i);
        });
    });

    describe('run with 4096', function () {
        before(function (done) {
            gachar.run(4096, function (s) {
                result = s;
                done();
            });
        });

        it('should get 4096 characters', function () {
            result.length.should.equal(4096);
        });

        it('should get randdom characters', function () {
            result.should.match(/^[a-z0-9]+$/i);
        });
    });
});
