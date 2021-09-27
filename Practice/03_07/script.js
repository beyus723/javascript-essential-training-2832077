const kwiatek = {
    kolor: "Zielony",
    wielkosc: "Sredni",

    doniczka: false,
    statusDoniczki: function(doniczkaTakNie) {
        this.doniczka = doniczkaTakNie;
    },

    liczba: 2,
};

console.log("to jest kwiatek", kwiatek)
kwiatek.statusDoniczki(true)
console.log("To jest kwiatek po zmianie", kwiatek)