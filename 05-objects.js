//Literal
const vehicle = {
    type : "Car",
    "+company" : "Ford",
    color : "Black"
};
 console.log(vehicle);
// console.log(vehicle.color);
// vehicle.color = "White";
// console.log(vehicle.color);
// console.log(vehicle);
 console.log(vehicle["+company"]);

//Class
class Vehicle
{
   constructor(type, company, color)
   {
    this.type = type ;
    this.company = company;
    this.color = color;
   } 
}
const myVehicle = new Vehicle("Car","Kia","Black");
console.log(myVehicle);
console.log(myVehicle.company);
