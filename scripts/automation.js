

let side_1=document.querySelector(".side-1")
let side_2=document.querySelector(".side-2")
let side_3=document.querySelector(".side-3")
let search=document.getElementById("auto-search")
let search_1_msg=document.getElementById("search-1-msg")
let serach_msg=document.querySelector(".serach-msg")
let h4=document.querySelector(".msg-h4")
let p=document.querySelector(".msg-p")

let resultAllauto=()=>{
    side_1.style.color="#428CF4"
    side_2.style.color="#434D5D"
    side_3.style.color="#434D5D"
    h4.innerHTML="You haven't create any automation"
    p.innerHTML="Once you create automation, they will appear here"

}
side_1.addEventListener("click",resultAllauto)


let resultJourneyauto=()=>{
    side_2.style.color="#428CF4"
    side_1.style.color="#434D5D"
    side_3.style.color="#434D5D"
    h4.innerHTML="You haven’t created any journeys"
    p.innerHTML="Once you create journeys, they will appear here Get started and turn on a welcome journey for new subscribers or try a custom journey."

}
side_2.addEventListener("click",resultJourneyauto)
let resultRSSauto=()=>{
    side_3.style.color="#428CF4"
    side_2.style.color="#434D5D"
    side_1.style.color="#434D5D"
    h4.innerHTML="You haven’t created any RSS workflows"
    p.innerHTML="Once you create RSS workflows, they will appear here."


}
side_3.addEventListener("click",resultRSSauto)



let SeachAutomation=()=>{
    setTimeout(function(){
        h4.innerHTML="Sorry, no automations match this search term"
        p.innerHTML="Try a different search term"
    },2000)
}

search.addEventListener("input",SeachAutomation)

import { navbar, nav2js } from "../components/navbar.js"

document.getElementById("navbar").innerHTML = navbar();
// navjs()
// cross()
// features()
nav2js();

