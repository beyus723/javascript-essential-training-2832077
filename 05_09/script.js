/**
 * Traverse the DOM tree using querySelector() and querySelectorAll()
 * @link https://developer.mozilla.org/en-US/docs/Web/API/Element/querySelector
 * @link https://developer.mozilla.org/en-US/docs/Web/API/Element/querySelectorAll
 */


import Backpack from "./Backpack.js";

const everydayPack = new Backpack(
  "Everyday green",
  23,
  "grey",
  15,
  26,
  26,
  false,
  "December 5, 2018 15:00:00 PST",
  "../assets/images/everyday.svg"
);

const content = `
    <figure class="backpack__image">
      <img src=${everydayPack.image} alt="" />
    </figure>

    <h1 class="backpack__name">${everydayPack.name}</h1>

    <ul class="backpack__features">

      <li class="packprop backpack__volume">Volume:<span> ${
        everydayPack.volume}l</span></li>

      <li class="packprop backpack__color">Color:<span> ${everydayPack.color}</span></li>

      <li class="backpack__age">Age:<span> ${everydayPack.backpackAge()} days old</span></li>
      <li class="packprop backpack__pockets">Number of pockets:<span> ${everydayPack.pocketNum}</span></li>

      <li class="packprop backpack__strap">Left strap length:<span> ${everydayPack.strapLength.left} inches</span></li>

      <li class="packprop backpack__strap">Right strap length:<span> ${everydayPack.strapLength.right} inches</span></li>

      <li class="packprop backpack__lid">Lid status:<span> ${everydayPack.lidOpen}</span></li>
      
    </ul>
`;

const main = document.querySelector(".maincontent");

var newArticle = document.createElement("article");
newArticle.classList.add("backpack");
newArticle.setAttribute("id", "everyday");
newArticle.innerHTML = content;

 main.append(newArticle);
// main.innerHTML = content;



const linki = `
        <li><a href>HOME</a></li>
        <li><a href>SHOP</a></li>
        <li><a href>ELO23</a></li>
        <li><a href>IDZIE DOBRZE</a></li>
        <li><a href>Siemano</a></li>
`;



const nawigacja = document.createElement("nav");
nawigacja.classList.add("styloweczka")

const lista = document.createElement("ul");
lista.innerHTML = linki
nawigacja.append(lista)

document.querySelector(".siteheader").append(nawigacja)