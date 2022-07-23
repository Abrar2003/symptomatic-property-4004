import { navbar, navjs, cross, features } from "../components/navbar.js";
import {footer} from "../components/footer.js";
document.getElementById("navbar1").innerHTML = navbar();
navjs();
cross();
features();
document.querySelector('#footer').innerHTML = footer();

let range = () => {
  let contacts_value = document.getElementById("range").value;
  let contacts_num = document.querySelector("h3>div");
  contacts_num.innerText = contacts_value;
  return contacts_value;
};
let contacts_value = 0;
document.querySelector("#range").addEventListener("input", () => {
  contacts_value = range();
  prices();
});

let basic_price = 0;
let unlimited_price = 0;
let premier_price = 0;

let prices = () => {
  let basic = document.getElementById("basic");
  let unlimited = document.getElementById("unlimited");
  let premier = document.getElementById("premier");
  if (contacts_value < 15000) {
    basic.innerHTML = null;
    basic.innerHTML = "9<span>/month</span>";
    unlimited.innerHTML = null;
    unlimited.innerHTML = "29<span>/month</span>";
    premier.innerHTML = null;
    premier.innerHTML = "149<span>/month</span>";
    basic_price = 9;
    unlimited_price = 29;
    premier_price = 149;
  } else if (contacts_value > 15000 && contacts_value < 25000) {
    basic.innerHTML = null;
    basic.innerHTML = "129<span>/month</span>";
    unlimited.innerHTML = null;
    unlimited.innerHTML = "399<span>/month</span>";
    premier.innerHTML = null;
    premier.innerHTML = "499<span>/month</span>";
    basic_price = 129;
    unlimited_price = 399;
    premier_price = 499;
  } else if (contacts_value > 25000) {
    basic.innerHTML = null;
    basic.innerHTML = "299<span>/month</span>";
    unlimited.innerHTML = null;
    unlimited.innerHTML = "699<span>/month</span>";
    premier.innerHTML = null;
    premier.innerHTML = "989<span>/month</span>";
    basic_price = 299;
    unlimited_price = 699;
    premier_price = 989;
  }
};

//ADD THE PAYMENT PAGE LOCATION IN THE "#";

let basicPlan = ()=>{
  localStorage.setItem('plan-price', basic_price);
  window.location.href = "#";
}

let unlimitedPlan = ()=>{
  localStorage.setItem('plan-price', unlimited_price);
  window.location.href = "#";
}
let premierPlan = ()=>{
  localStorage.setItem('plan-price', premier_price);
  window.location.href = "#";
}
prices();
document.querySelector('#basic_plan>div:last-child').addEventListener('click', basicPlan);
document.querySelector('#unlimited_plan>div:last-child').addEventListener('click', unlimitedPlan);
document.querySelector('#premier_plan>div:last-child').addEventListener('click', premierPlan);