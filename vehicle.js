/**
 You’ve been hired to help a logistics company build a system to manage its fleet of
vehicles. The system should be able to:
1. Create individual vehicles with properties like type, make, model, year, and
mileage.
2. Add a method to update the mileage of a vehicle when it is used.
3. Add a method to display the details of the vehicle in a user-friendly format.
4. Instantiate multiple vehicles from the class and test your methods.
Tasks
1. Define the Vehicle Class:
○ The constructor should include properties: type, make, model, year,
and mileage.
○ Use default values for mileage (e.g., 0).
2. Add Methods:
○ drive(distance): Increases the vehicle’s mileage by the given
distance (in kilometers or miles).
○ getDetails(): Returns a formatted string describing the vehicle’s
details.
3. Create and Use Vehicle Objects:
○ Instantiate at least three vehicle objects with different properties (e.g.,
a car, a truck, and a motorcycle).
○ Use the drive method to simulate trips and update mileage.
○ Use the getDetails method to print each vehicle’s updated
informatio
 */

//1.Define the Vehicle Class:
class Vehicle {
    constructor(type, make, model, year, mileage = 0) {
        this.type = type;
        this.make = make;
        this.model = model;
        this.year = year;
        this.mileage = mileage;
    }


//2.Add Methods:
drive(distance) {
    this.mileage = this.mileage + distance;
}
getDetails() {
    return `Type: ${this.type}, Make: ${this.make}, Model: ${this.model}, Year: ${this.year}, Mileage: ${this.mileage} km`;
}
}
//3.Create and Use Vehicle Objects:
//Instantiate at least three vehicle objects with different properties (e.g.a car, a truck, and a motorcycle).
const car = new Vehicle('Car', 'Tesla', 'Y', 2023, 29000);
const truck = new Vehicle('Truck', 'Ford', 'F-150', 2020, 50000);
const motorcycle = new Vehicle('Motorcycle', 'Harley-Davidson', 'Street 750', 2021, 15000);

//Use the drive method to simulate trips and update mileage.
car.drive(150);
truck.drive(300);
motorcycle.drive(100);

//Use the getDetails method to print each vehicle’s updated information.
const carDetails = car.getDetails();
console.log(carDetails);
const truckDetails = truck.getDetails();
console.log(truckDetails);
const motorcycleDetails = motorcycle.getDetails();
console.log(motorcycleDetails);