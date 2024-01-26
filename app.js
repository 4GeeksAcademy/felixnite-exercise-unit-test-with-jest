const sum = (a,b) => {
    return a + b
}


const fromEuroToDollar = (euro) => {
    return euro * 1.2;
}

const fromDollarToYen = (dolar) => {
    return dolar * 147.78
} 

const fromYenToPound = (yen) => {
    return yen * 0.0055
} 

module.exports = { sum , fromEuroToDollar, fromDollarToYen, fromYenToPound };

