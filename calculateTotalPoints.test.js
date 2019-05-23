const assert = require('assert');
const calculateTotalPoints = require('./calculateTotalPoints.js');

describe('calculateTotalPoints', () => {
    describe('distanceTotalPoints', () => {
        it('should return correct calculateTotalPoints', () => {
            const actual = calculateTotalPoints(99.5, "normal", 98, [20, 19, 16, 15, 18], 1, 1);
    
            const expected = '118';
    
            assert.equal(actual, expected);
        }); 
    });
}); 