// const enhancer = require('./enhancer.js');
const { repair, succeed, fail } = require('./enhancer.js');

// test away!

describe('enhancer', () => {
    describe('repair', () => {
        it('should repair durability to 100', () => {
            const item = {
                name: 'Lambda',
                durability: 1,
                ehancement: 2,
            };
            expect(repair(item).durability).toBe(100);
        })
    })
})
