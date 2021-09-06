/**
 * Practice: Making classes and objects
 *
 * - Find a type of object you have more than one of in your house (eg. clothing, writing tools, etc).
 * - Create a class describing this object type - its properties and methods.
 * - Create several objects using the class.
 * - Test the objecs by calling their properties and using their methods in the console.
 */


 const elmo = {
    type: "doggo",
    color: "Czorny Blond",
    changeColor: function(colorChange) {  
      this.elmo.color = colorChange;
    },
    size: "Medium",
    age: 4,
    paws: {
      front: 2,
      back: 2,
    },
  
  };
  
  console.log("my dog Elmo: ", elmo);



  const laptopElko = {

    color: "white",
    batteryLife: "15h",
    weight: "1kg",
    powerStatus: true,
    changeStatus: function(powerONOff){
      this.laptop.powerStatus = powerONOff;
    },

  };

  console.log("this is my laptop Elko: ", laptopElko);