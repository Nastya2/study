import { isInArray } from './homework';
import { summator } from './homework';
import { getUnique } from './homework';

describe('function isInArray',() => {
    it('false to be',() => {
        expect(isInArray([1,2],1,2,3)).toBe(false);
    });

    it('true to be',() => {
        expect(isInArray([1,2,3],1,2,3)).toBe(true);
    });
});

describe('function summator',() => {
    it('summator to be 3 - 1',() => {
        expect(summator(NaN,'1',1,1,NaN)).toBe(3);
    });

    it('summator to be 3.4 - 2',() => {
        expect(summator(1,'1.4','1','1.2px')).toBe(3.4);
    });
});

describe('function getUnique',() => {
    it('getUnique',() => {
        expect(getUnique(1,2,-1,3,true,true,true,1,2,3)).toEqual([1,2,-1,3,true]);
    });
});