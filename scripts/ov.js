import { navbar, navjs, cross, features,nav2js} from "../components/navbar.js"

document.getElementById("skip").addEventListener("click",()=>{spopo()})
function spopo() {
    console.log("spopo")
    document.getElementById("opop").style.display="grid"
    
}
document.getElementById("ptrew").addEventListener("click",()=>{srrr()})
function srrr() { window.location.reload()}
document.getElementById("navbar").innerHTML = navbar();

let user = JSON.parse(localStorage.getItem('user'))
document.getElementById("name").innerText=user.name
document.getElementById("disemail").innerText=user.email

nav2js()
// console.log( name)
// navjs()
// cross()
// features()


