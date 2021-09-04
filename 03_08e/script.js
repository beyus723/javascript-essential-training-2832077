/**
 * Create a Backpack object.
 */

const backpack = {
  name: "Everyday Backpack",
  volume: 30,
  color: "grey",
  pocketNum: 15,
  strapLength: {
    left: 26,
    right: 26,
  },
  lidOpen: false,
  toggleLid: function (lidStatus) {
    this.lidOpen = lidStatus;
  },
  newStrapLength: function (lengthLeft, lengthRight) {
    this.strapLength.left = lengthLeft;
    this.strapLength.right = lengthRight;
  },
};

console.log("The backpack object:", backpack);
console.log("The pocketNum value:", backpack.pocketNum);

console.log("Left before:", backpack.strapLength.left);

backpack.newStrapLength(10, 15);

console.log("Left after:", backpack.strapLength.left);


const car = {
  color: "white",
  age: 12,
  make: "peugeot",
  doorsNumb: 5,

  speakers: {
    front: 2,
    back: 2,
  },
  changeSpeakers: function(frontSpeakers, backSpeakers){
    this.speakers.front = frontSpeakers;
    this.speakers.back = backSpeakers;
  },



  wheels: {
    front: 2,
    back: 2,
  },
};

console.log("here is my car:", car);

const laptop = {
  color: "white",
  made: "apple",
  year: 2019,
  speaker: {
    front: 2,
    back: 2,
  },
  externals: {
    keybord: 1,
    mouse: 1,
    monitor: 1,
    harddrive: 1,
  },
  changeExternals: function (keybord, mouse){
    this.externals.keybord = keybord;
    this.externals.mouse = mouse;
  },

  batteryLife: "15h"
};

console.log("here is my laptop:", laptop);