"use strict";
exports.__esModule = true;
var Kilimanjaro = { name: "Kilimanjaro", height: 19341 };
var Everest = { name: "Everest", height: 29029 };
var Denali = { name: "Denali", height: 20310 };
var mountains = [Kilimanjaro, Everest, Denali];
function findNameOfTallestMountain(mountains) {
    return mountains.sort(function (a, b) { return a.height > b.height ? -1 : 1; })[0];
}
console.log(findNameOfTallestMountain(mountains));
;
var cheese = { name: "cheese", price: 2 };
var milk = { name: "milk", price: 3 };
var cereal = { name: "cereal", price: 4 };
var products = [cheese, milk, cereal];
function calcAverageProductPrice(products) {
    var total = products.reduce(function (sum, current) { return sum + current.price; }, 0);
    var average = total / products.length;
    return average;
}
console.log(calcAverageProductPrice(products));
;
var motor = { name: "motor", price: 600 };
var sensor = { name: "sensor", price: 200 };
var LED = { name: "LED", price: 35 };
var Motor = { product: motor, quantity: 60 };
var Sensor = { product: sensor, quantity: 80 };
var LEDLight = { product: LED, quantity: 120 };
var inventory = [Motor, Sensor, LEDLight];
function calcInventoryValue(inventory) {
    return inventory.reduce(function (total, current) { return total + (current.product.price * current.quantity); }, 0);
}
console.log(calcInventoryValue(inventory));
