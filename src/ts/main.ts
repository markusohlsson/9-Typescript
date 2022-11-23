// let x: number = 17;
// console.log(x);

// function add(x:number, y:number):number {
// return x + y;
// }

// let sum = add(10,20);
// console.log(sum);

// console.log("test");


class Car {
    constructor(public color:string, public speed:number){
    }
}

let cars:Car[]=[new Car ("blue",125), new Car ("Red",150), new Car("green",80)];
// console.log(cars[0]);
// console.log(cars[1]);
// console.log(cars[2]);

let container:HTMLDivElement = document.createElement("div");
let pTag:HTMLParagraphElement = document.createElement("p");

for (let i = 0; i < cars.length; i++) {
    
container.appendChild(pTag);
document.body.appendChild(container);
pTag.innerHTML=cars[i].color;
console.log(cars[i]);
}

