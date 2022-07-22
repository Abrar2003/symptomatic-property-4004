import { navbar, navjs, cross, features } from "../components/navbar.js"
import{footer} from "../components/footer.js"
console.log("hello")
// document.getElementById("navbar1").style.backgroundColor="red"
document.getElementById("navbar1").innerHTML = navbar();
document.getElementById("footer").innerHTML = footer();
navjs()
cross()
features()
