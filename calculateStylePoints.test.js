const assert = require('assert');
const calculateStylePoints = require('./calculateStylePoints.js');

describe('calculateStylePoints', () => {
    describe('styleTotalPoints', () => {
        it('should return correct sum', () => {
            const actual = calculateStylePoints([16, 18, 19, 20 ,17]);
    
            const expected = '54';
    
            assert.equal(actual, expected);
        });
        it('should return correct sum fot the same min values', () => {
            const actual = calculateStylePoints([16, 18, 19, 20 ,16]);
    
            const expected = '53';
    
            assert.equal(actual, expected);
        });
        it('should return correct sum fot the same max values', () => {
            const actual = calculateStylePoints([20, 18, 19, 20 ,16]);
    
            const expected = '57';
    
            assert.equal(actual, expected);
        });
    }); 
});