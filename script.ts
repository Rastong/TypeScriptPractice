export{}

interface Mountain {
    name: string,
    height: number
}
let Kilimanjaro: Mountain = { name: "Kilimanjaro", height: 19341};
let Everest: Mountain = { name: "Everest", height: 29029};
let Denali: Mountain = { name: "Denali", height: 20310};
let mountains: Mountain[] = [Kilimanjaro, Everest, Denali];

function findNameOfTallestMountain(mountains:Mountain[]) {
    return mountains.sort((a,b) => a.height > b.height ? -1:1)[0]
}

console.log(findNameOfTallestMountain(mountains));

interface Product {
    name: string,
    price: number
};
let cheese: Product = { name: "cheese", price: 2 };
let milk: Product = {name:"milk", price: 3};
let cereal: Product = {name:"cereal", price: 4};

let products: Product[] = [cheese, milk, cereal];

function calcAverageProductPrice(products: Product[]){
    let total:number = products.reduce((sum, current) => sum + current.price, 0);
    let average:number = total/products.length;
    return average;
}

console.log(calcAverageProductPrice(products));

interface Inventory {
    product: Product,
    quantity: number
};
let motor: Product = {name: "motor", price: 600};
let sensor: Product = {name: "sensor", price: 200};
let LED: Product = {name: "LED", price: 35};
let Motor: Inventory = {product: motor, quantity: 60}
let Sensor: Inventory = {product: sensor, quantity: 80}
let LEDLight: Inventory = {product: LED, quantity: 120}

let inventory: Inventory[] = [Motor, Sensor, LEDLight];

function calcInventoryValue(inventory: Inventory[]){
    return inventory.reduce((total,current) => total + (current.product.price*current.quantity),0 );
}
console.log(calcInventoryValue(inventory));