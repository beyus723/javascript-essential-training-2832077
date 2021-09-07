/**
 * Practice: Making methods
 *
 * - Create a method for each object property.
 * - The method receives a value to match the property to be changed.
 * - Create a simple function to replace the current property value with the received value.
 * - Test the method by sending new values and checking the properties in the console.
 */

const backpack = {
  name: "Everyday Backpack",
  volume: 33,
  color: "grey",  
  pocketNum: 15,
  strapLength: {
    left: 26,
    right: 26,
  },
  toggleLid: function (lidStatus) {
    this.lidOpen = lidStatus;
  },
  newStrapLength: function (lengthLeft, lengthRight) {
    this.strapLength.left = lengthLeft;
    this.strapLength.right = lengthRight;
  },
};


const house = {
  floors: 4,
  color: "Magnolia",
  location: "Wisla",

  windows: {
    front: 4,
    back: 6,
    rightSide: 3,
    leftSide: 3,
  },
  changeWindows: function(frontWindow, backWindow, rightSideWindows, leftSideWindows) {
    this.windows.front = frontWindow;
    this.windows.back = backWindow;
    this.windows.rightSide = rightSideWindows;
    this.windows.leftSide = leftSideWindows;
  },

  doors: {
    front: 1,
    back: 2,
  },
  changeDoors: function(frontDoor, backDoor) {
    this.doors.front = frontDoor;
    this.doors.back = backDoor;
  },
};

console.log("here is my house:", house);


const szafa = {
  kolor: "czarny",
  rozmiar: {
    dlugosc: 20,
    szerokosc: 30,
    glebokosc: 70
  },
  zmienRozmiar: function(zmienDlugosc, zmienSzerokosc, zmienGlebokosc) {
    this.rozmiar.dlugosc = zmienDlugosc;
    this.rozmiar.szerokosc = zmienSzerokosc;
    this.rozmiar.glebokosc = zmienGlebokosc;
  },
  rokProdukcji: 2019,
  miastoProdukcji: "Katowice",
};

console.log("Szafa:", szafa);
