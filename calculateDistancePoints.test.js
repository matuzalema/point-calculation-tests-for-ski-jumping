const assert = require('assert');
const calculateDistancePoints = require('./calculateDistancePoints.js');

describe('calculateDistancePoints', () => {
    describe('distanceTotalPoints', () => {
        it('should return correct distanceTotalPoints form normall hill size', () => {
            const actual = calculateDistancePoints(99.5, "normal", 98);;
    
            const expected = '63';
    
            assert.equal(actual, expected);
        });

       	it('should return correct distanceTotalPoints form large hill size', () => {
            const actual = calculateDistancePoints(100, "large", 98);;
    
            const expected = '63.6';
    
            assert.equal(actual, expected);
        });

        it('should return correct distanceTotalPoints form mamucia', () => {
            const actual = calculateDistancePoints(100, "mamucia", 98); 
    
            const expected = '122.4';
    
            assert.equal(actual, expected);
        });
    });
});