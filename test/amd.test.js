
describe('gachar AMD', function () {
    it('load by AMD', function (done) {
        if (typeof define !== 'function') { var define = require('amdefine')(module); }

        define(['../'], function (gachar) {
            gachar.should.a('object');
            gachar.run.should.a('function');
            gachar.run().should.match(/^[a-z0-9]+$/i);

            done();
        });
    });
});