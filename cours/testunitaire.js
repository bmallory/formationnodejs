var assert = require('assert');

describe('Basic mocha string test', function(){
    it('should return number of charachters in a string', function(){
        assert.equal('Hello'.length, 4);
    });
    it('sould return the first character of the string', function(){
        assert.equal('Hello'.charAt(0), 'H');
    });
});