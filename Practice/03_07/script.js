/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */

const hifiTower = {

    name: "wieza",
    size: "medium",
    color: "silver",
    numbersOfButtons: 15,

    speakers: {
        left: 1,
        right: 1,
    }
}


const tv = {

    name: "tele-box",
    size: "big",
    color: "black",
    channels: 23,
    screenize: "19 inch",

    speakers: {
        left: 1,
        right: 1,
    }

}


const dinnerTable = {

    color: "white",
    numbersOfLegs: 4,
    size: "1 sq meter",
}



console.log("The Hifi Tower Specification:", hifiTower["speakers"]);
console.log("Dinner Table:", dinnerTable);
console.log("TV specification:", tv);



