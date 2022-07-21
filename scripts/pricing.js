import { navbar, navjs, cross, features } from "../components/navbar.js";
document.getElementById("navbar1").innerHTML = navbar();
navjs();
cross();
features();
let range = () => {
  let contacts_value = document.getElementById("range").value;
  let contacts_num = document.querySelector("h3>div");
  contacts_num.innerText = contacts_value;
  return contacts_value;
};
let contacts_value=0;
document.querySelector('#range').addEventListener('input', ()=>{
  contacts_value = range();
  prices();
});

let prices = ()=>{
  let basic = document.getElementById('basic');
  let unlimited = document.getElementById('unlimited');
  let premier = document.getElementById('premier');
  if(contacts_value>15000 && contacts_value<25000){
    basic.innerHTML = null;
    basic.innerHTML = '199<span>/month</span>';
    unlimited.innerHTML = null;
    unlimited.innerHTML = '399<span>/month</span>';
    premier.innerHTML = null;
    premier.innerHTML = '499<span>/month</span>';
    localStorage.setItem('basic-plan', 199);
    localStorage.setItem('unlimited-plan', 399);
    localStorage.setItem('premier-plan', 499);
  }else if(contacts_value>25000){
    basic.innerHTML = null;
    basic.innerHTML = '299<span>/month</span>';
    unlimited.innerHTML = null;
    unlimited.innerHTML = '699<span>/month</span>';
    premier.innerHTML = null;
    premier.innerHTML = '989<span>/month</span>';
    localStorage.setItem('basic-plan', 299);
    localStorage.setItem('unlimited-plan', 699);
    localStorage.setItem('premier-plan', 989);
  }
}

//ADD THE PAYMENT PAGE LOCATION IN THE "#";

let payment = ()=>{
  window.location.href = '#';
}

let buttons = document.getElementsByClassName('buttons');
buttons.addEventListener('click', payment)