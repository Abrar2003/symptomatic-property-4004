import { navbar, nav2js} from "../components/navbar.js";
document.getElementById("navbar").innerHTML = navbar();
// navjs();
// cross();
// features();
nav2js();
let side_1 = document.querySelector("#side1")
let side_2 = document.querySelector("#side2")
let side_3 = document.querySelector("#side3")
let side_4 = document.querySelector("#side4")
let search=document.getElementById("search")
let select = document.querySelector("select");
let h4=document.querySelector("#h4")
let p=document.querySelector("#p")
// <!-- <h4>Sorry, no automations match this search term</h4>
//             <p>Try a different search term</p> -->
{/* <h4 class="msg-h4">You haven't create any automation</h4> */}
{/* <p class="msg-p">Once you create automation, they will appear here</p> */}

let overview=()=>{
    side_1.style.color="#428CF4"
    side_2.style.color="#434D5D"
    side_3.style.color="#434D5D"
    side_4.style.color="#434D5D"
    select.value = 'All campaigns'
    h4.innerHTML="You haven't create any email"
    p.innerHTML="Once you create automation, they will appear here"

}
side_1.addEventListener("click",overview)


let drafts=()=>{
    side_2.style.color="#428CF4"
    side_1.style.color="#434D5D"
    side_3.style.color="#434D5D"
    side_4.style.color="#434D5D"
    select.value = 'Drafts campaigns'
    h4.innerHTML="You don't have any draft campaigns"
    p.innerHTML="Once you create some draft campaigns they will appear here"

}
side_2.addEventListener("click",drafts)
let sent=()=>{
    side_3.style.color="#428CF4"
    side_2.style.color="#434D5D"
    side_1.style.color="#434D5D"
    side_4.style.color="#434D5D"
    select.value = 'Sent campaigns'
    h4.innerHTML="You haven't sent any campaigns"
    p.innerHTML="Once your campaign has been sent it will appear here"


}
side_3.addEventListener("click",sent)
let deleted=()=>{
    console.log(1);
    side_4.style.color="#428CF4"
    side_2.style.color="#434D5D"
    side_1.style.color="#434D5D"
    side_3.style.color="#434D5D"
    select.value = 'Deleted campaigns'
    h4.innerHTML="You don't have any deleted campaigns"
    p.innerHTML="Once you delete a campaign it will be available here for 30 days"


}
side_4.addEventListener("click",deleted)



let SeachAutomation=()=>{
    // serach_msg.append(document.createElement("img").src="https://thumbs.gfycat.com/GrimyEthicalAsianpiedstarling-max-1mb.gif")
    // search.style.border="1px solid "
    setTimeout(function(){
        h4.innerHTML="Sorry, no Campaings match this search term"
        p.innerHTML="Try a different search term"
    },2000)
}

search.addEventListener("input",SeachAutomation)




