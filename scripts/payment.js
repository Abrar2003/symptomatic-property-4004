

//<----------------------------------------For Div Display none and Block-------------------------------------->

let Add_card=document.querySelector("#pay-add-card")
let pay_card=document.getElementById("pay-card")
let body=document.querySelector("body")

let payCardinfo=()=>{
Add_card.style.display="none"
pay_card.style.display="block"
body.style.backgroundColor="rgba(214, 199, 199, 0.689)"
let pay_card_num=document.getElementById("pay_card_number_m")
pay_card_num.focus()

}

Add_card.addEventListener("click",payCardinfo)


//<----------------------------------------For Addind a Card Details--------------------------------------------------------------------->


let CarrDEtails=JSON.parse(localStorage.getItem("card_details"))||[];

let payAddCard=document.querySelector(".pay-add-card-btn")

class CardData{
    constructor(cardNumber,cardMonth,cardYear,cardCVV,cardName,cardCountry,cardBank){
        this.Number=cardNumber
        this.Month=cardMonth
        this.Year=cardYear
        this. CVV=cardCVV
        this.Name=cardName
        this.Country=cardCountry
        this.Bank=cardBank
    }

}

let form=document.getElementById("pay_card_form_m")
let CardInfoSave=(event)=>{
event.preventDefault()

let cardNumber=form.pay_card_number_m.value
let cardMonth=form.pay_card_exp_m.value
let cardYear=form.pay_card_exp_y.value
let cardCVV=form.pay_card_exp_c.value
let cardName=form.pay_card_name_m.value
let cardCountry=form.pay_card_country.value
let cardBank=form.pay_bank_card.value

let Card1=new CardData(cardNumber,cardMonth,cardYear,cardCVV,cardName,cardCountry,cardBank)
    // console.log('Card1:', Card1)


CarrDEtails.push(Card1)

localStorage.setItem("card_details",JSON.stringify(CarrDEtails))
    
console.log('CarrDEtails:', CarrDEtails)  

}

payAddCard.addEventListener("click",CardInfoSave)

//<----------------------------Bank Apppend On main page---------------------------------------------------------------------------->

let BankDetail=document.getElementById("pay-div-bank")
console.log(CarrDEtails)

let BankCard=(CarrDEtails)=>{

    CarrDEtails.forEach((el)=>{
        let div=document.createElement("div")
        div.setAttribute("class","bankInfo")
        let checkbox=document.createElement("input")
        checkbox.type="checkbox"
        let num=document.createElement("p")
        num.innerText=el.Number
        console.log('el.Number:', el.Number)
        let bank=document.createElement("p")
        bank.innerText=el.Bank
        let name=document.createElement("h5")
        name.innerText=`(${el.Name})`
        div.append(checkbox,num,bank,name)
        BankDetail.append(div)
       
    })
    
}
BankCard(CarrDEtails)

let AddCard=document.getElementById("Addbank")
AddCard.addEventListener("click",function(){
    BankCard(CarrDEtails)
})


//<------------------------------------Server Connecting------------------------------------------------------------->

let pay_otp=document.getElementById("pay-otp")
let server_connecting=document.getElementById("server_connecting")

let serverConnecting =()=>{

    setTimeout(function(){

        alert("congratualation Plan Activate succesfully")
        window.location.href="payment.html"

    },3000)
    pay_otp.style.display="none"
    server_connecting.style.display="block"
    body.style.backgroundColor="rgba(214, 199, 199, 0.689)"
}



// <--------------------------------OTP formation-------------------------------------------------------------------->


let otp = Math.floor(Math.random()*100000);

let verifyOtp = ()=>{
    event.preventDefault()
    let otpInputs = document.querySelectorAll(".otpContainer>#verifyOtpForm>.pass");
    // console.log('otpInputs:', otpInputs)
    let bag = '';
    for(let i=0 ; i<otpInputs.length ; i++){
        bag += otpInputs[i].value;
    }
    if(otp == bag ){
        alert("OTP verified connecting to bank server")
        serverConnecting()

    }else{
        alert("Wrong Otp")
        genrateOtp();
    }
}

let genrateOtp = ()=>{
    
   alert(`Your one time password is ${otp}`)
   let first_input = document.getElementById("first_input")
   first_input.focus()
    let verifyOtpForm = document.getElementById('verifyOtpForm'); 
    verifyOtpForm.addEventListener('submit',verifyOtp);
    
}


let StartPlans=document.getElementById("pay-start-plan").addEventListener("click",function(){

    setTimeout(function(){
        genrateOtp()

    },1500)
    pay_otp.style.display="block"
    body.style.backgroundColor="rgba(214, 199, 199, 0.689)"  
}
)

let moveNext = document.getElementsByClassName('pass')
Array.from(moveNext).forEach((el)=>{
  el.addEventListener("keyup",(event)=> {
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13 || el.value.length == 1) {
      // Focus on the next sibling
      el.nextElementSibling.focus()
    }
  })
})




//<-----------------------------------Payment Counter----------------------------------------------------->

let payoffer_1=document.getElementById("pay-offer-1")
let payoffer_2=document.getElementById("pay-offer-2")
let payoffer_3=document.getElementById("pay-offer-3")

function secCounter(){
    let count=3;
    {
     let id=setInterval(function(){
            if(count===0){
                alert("Oop's sorry Offer ended ")
                clearInterval(id);
                window.location="payment.html"
                
            }

            payoffer_1.innerText=`offer exprires in ${count} m  `
            
            count--
        },60000);
    }    
}
secCounter()
function minCounter(){
    let count=59;
    {
     let id=setInterval(function(){
            if(count===0){
                clearInterval(id);
                minCounter()
            }

            payoffer_2.innerText=`${count} s`
            
            count--
        },1000);
    }    
}
minCounter()
function msecCounter(){
    let count=9;
    {
     let id=setInterval(function(){
            if(count===0){
                clearInterval(id);
                msecCounter()
            }

            payoffer_3.innerText=`${count} ms`
            
            count--
        },100);
    }    
}
msecCounter()

//<---------------------------Amount Deduction And Append------------------------------->

let last_amount=document.getElementById("last_amount")
let pay_amount=document.getElementById("pay-amount")
let offer = Math.floor(Math.random()*50);
console.log('offer:', offer)
let pay_discount=document.querySelector(".pay-discount")
let payAmount=40

pay_amount.innerText=`${payAmount} $`

let total=payAmount*offer/100

last_amount.innerText=`${payAmount-total} $ `
pay_discount.innerText=`${total} % discount applied`
