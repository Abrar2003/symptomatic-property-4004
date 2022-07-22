import { navbar, navjs, cross, features } from "../components/navbar.js"
import{footer} from "../components/footer.js"
// console.log("hello")
document.getElementById("footer").innerHTML = footer();
// document.getElementById("navbar1").style.backgroundColor="red"
document.getElementById("navbar1").innerHTML = navbar();

navjs()
cross()
features()
