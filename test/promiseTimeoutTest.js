import assert from "assert";

function timeout(ms, promise) {
    // TODO: implement
}

describe('promise timeout utility', function () {
    it.skip('times out when promise does not resolve', function () {
        return timeout(1, new Promise(() => {
        })).catch(function (err) {
            assert.equal(err, 'Timeout');
        });
    });

    it.skip('does not time out when promise resolves earlier', function () {
        return timeout(100, Promise.resolve('data')).then(function (data) {
            assert.equal(data, 'data');
        });
    });

    it.skip('does not time out when promise rejects earlier', function () {
        return timeout(100, Promise.reject('error')).catch(function (err) {
            assert.equal(err, 'error');
        });
    });
});
