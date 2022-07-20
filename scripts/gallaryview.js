
// import {navbar,navjs,cross,features}  from "../components/navbar.js"
// document.getElementById("gallary-view-navbar").innerHTML = navbar()
// navjs()
// cross()
// features()


let GallaryData=JSON.parse(localStorage.getItem("gallaryimg"))
console.log(GallaryData.poster)


let prod_info=document.getElementById("prod-info")
let img_info=document.getElementById("prod-img")

let poster=document.createElement("img")
poster.src=GallaryData.poster

let title=document.createElement("h1")
title.innerText=GallaryData.title;

let info=document.createElement("p")
info.innerText=`${GallaryData.title} has the industry’s best bluetooth sports headphones and earbuds. ${GallaryData.title} uses email marketing to announce new products and accessories. Here, with Campaign Monitor, they revealed their revolutionary X2 earbuds.`

let btn1=document.createElement("button")
btn1.innerText="Let's get started"

let btn2=document.createElement("button")
btn2.innerText="See their story"

prod_info.append(title,info,btn1,btn2)
img_info.append(poster)


