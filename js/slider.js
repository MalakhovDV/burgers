const left = document.querySelector("#left");
const right = document.querySelector("#right");
const item1 = document.querySelector("#item1");
const item2 = document.querySelector("#item2");
const item3 = document.querySelector("#item3");
const item4 = document.querySelector("#item4");

const minRight = 0;
const maxRight = 2820;
const step = 940;
let currentRight = 0;

item1.style.right = currentRight;
item2.style.right = currentRight;
item3.style.right = currentRight;
item4.style.right = currentRight;

right.addEventListener("click", function(e) {
  e.preventDefault();
  if (currentRight < maxRight) {
    currentRight += step;
    item1.style.right = currentRight + "px";
    item2.style.right = currentRight + "px";
    item3.style.right = currentRight + "px";
    item4.style.right = currentRight + "px";
  }
});

left.addEventListener("click", function(e) {
  e.preventDefault();
  if (currentRight > minRight) {
    currentRight -= step;
    item1.style.right = currentRight + "px";
    item2.style.right = currentRight + "px";
    item3.style.right = currentRight + "px";
    item4.style.right = currentRight + "px";
  }
});
