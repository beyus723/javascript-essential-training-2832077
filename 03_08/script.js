/**
 * Create a Backpack object.
 */

const backpack = {
  
  name: "Everyday Backpack",
  volume: 30,
  color: "grey",
  pocketNum: 15,
  

  
  lidOpen: false,

  toggleLid: function (lidStatus) {
    this.lidOpen = lidStatus;
  },
  

  strapLength: {
    left: 26,
    right: 26,
  },

  newStrapLength: function (lengthLeft, lengthRight) {
    this.strapLength.left = lengthLeft;
    this.strapLength.right = lengthRight;
  },
};

console.log("The backpack object:", backpack);
console.log("The left strapLenght value:", backpack.strapLength.left);

console.log("dlugosc paskow lewej strony PRZED funkcja:", backpack.strapLength.left);

backpack.newStrapLength(10, 20);

console.log("dlugosc paskow lewej strony PO funkcja:", backpack.strapLength.left);
