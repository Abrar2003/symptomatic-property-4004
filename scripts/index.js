import { navbar, navjs, cross, features } from "../components/navbar.js"
import{footer} from "../components/footer.js"
// console.log("hello")
document.getElementById("footer").innerHTML = footer();
// document.getElementById("navbar1").style.backgroundColor="red"

document.getElementById("navbar").innerHTML = navbar();
document.getElementById("footer").innerHTML = footer();

navjs()
cross()
features()
let userdata = JSON.parse(localStorage.getItem('userdata'))||[];
let name = userdata[0].name || "";
    
document.getElementById("usename").innerText = name;