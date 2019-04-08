// const enhancer = require('./enhancer.js');
const { repair, succeed, fail } = require('./enhancer.js');

// test away!

describe('enhancer', () => {
    const item = {
        name: 'Lambda',
        durability: 1,
        enhancement: 2,
    };
    describe('repair', () => {
        it('should repair durability to 100', () => {            
            expect(repair(item).durability).toBe(100);
        });
    });
    describe('succeed', () => {
        it('should increase enhancement by 1 if less than 20', () => {
            expect(succeed(item).enhancement).toBe(3);
            expect(succeed(item).durability).toBe(1);
        });

        it('should not increase enhancement by 1 if already 20 or more', () => {
            const item2 = {
                name: 'Lambda',
                durability: 1,
                enhancement: 20,
            };
            expect(succeed(item2).enhancement).toBe(20); 
            expect(succeed(item2).durability).toBe(1);           
        });
    });
})
