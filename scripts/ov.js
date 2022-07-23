import { navbar, navjs, cross, features} from "../components/navbar.js"

document.getElementById("skip").addEventListener("click",()=>{spopo()})
function spopo() {
    console.log("spopo")
    document.getElementById("opop").style.display="grid"
    
}
document.getElementById("ptrew").addEventListener("click",()=>{srrr()})
function srrr() { window.location.reload()}
document.getElementById("navbar").innerHTML = navbar();

navjs()
cross()
features()

