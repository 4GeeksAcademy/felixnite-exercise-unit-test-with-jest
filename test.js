
const { sum } = require('./app.js');


test('adds 14 + 9 to equal 23', () => {  
    let total = sum(14, 9);
    expect(total).toBe(23);
})

test("One euro should be 1.206 dollars", function(){
    const { fromEuroToDollar } = require('./app.js')

    const dollars = fromEuroToDollar(3.5)
    const expected = 3.5 * 1.2; 

     expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
})

test("One dolar should be 517.23 yenes", function(){
    const { fromDollarToYen } = require('./app.js')

    const dollars = fromDollarToYen(3.5)
    const expected = 3.5 * 147.78; 
    expect(fromDollarToYen(3.5)).toBe(517.23);  //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
})

test("One yen should be 0.01925 pounds", function(){
    const { fromYenToPound } = require('./app.js')
    const dollars = fromYenToPound(3.5)
    const expected = 3.5 * 0.0055; 

     expect(fromYenToPound(3.5)).toBe(0.01925); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
})

;