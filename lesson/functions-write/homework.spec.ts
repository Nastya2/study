import { isInArray } from './homework';

describe('function isInArray',() => {
    it('false be',() => {
        expect(isInArray([1,2],1,2,3)).toBe(false);
    });

    it('true be',() => {
        expect(isInArray([1,2,3],1,2,3)).toBe(true);
    });
});