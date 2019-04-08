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
    describe('fail', () => {        
        it('should decrease durability by 5 if enhancement is less than 15', () => {
            const item3 = {
                name: 'Lambda',
                durability: 19,
                enhancement: 14,
            };
            expect(fail(item3).durability).toBe(14);
            expect(fail(item3).enhancement).toBe(14);
        });
        it('should decrease durability by 10 if enhancement is 15 or more', () => {
            const item4 = {
                name: 'Lambda',
                durability: 19,
                enhancement: 15,
            };
            expect(fail(item4).durability).toBe(9);
            expect(fail(item4).enhancement).toBe(15);
        });
        // it('should decrease durabiltiy by 10 but NOT less than 0 if enhancement is 15 or more', () => {
        //     const item = {
        //         name: 'Lambda',
        //         durability: 9,
        //         enhancement: 15,
        //     };
        //     expect(fail(item).durability).toBe(0);
        //     expect(fail(item).enhancement).toBe(15);
        // });
        it('should decrease durabiltiy by 10 but NOT less than 0 if enhancement is 15 or more', () => {
            const item = {
                name: 'Lambda',
                durability: 9,
                enhancement: 17,
            };            
            expect(fail(item).enhancement).toBe(16);
        });
    })
})
