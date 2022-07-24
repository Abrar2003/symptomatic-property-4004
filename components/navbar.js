

  let login = localStorage.getItem('log') || false;

let navbar = () => {

  if(login==false)  {
      return `
<div id="navbar1">
      <div id="logo">
                <img src="https://gdm-catalog-fmapi-prod.imgix.net/ProductLogo/069606d3-94ab-4d43-8e87-7ebcb8e57923.png?auto=format&size=50" alt=""/>
                <h1>Campaing Monitor</h1>
            </div>

            <div id="options">
                <div href="#" id="features" class="primary-nav-link" role="menuitem" aria-label="Features">
                    <h4 id="see">Features <span>^</span></h4>
                    <div id="dropdown">
                        <li class="dropdown_item">
                            <a href="">Features Overview</a>
                        </li>
                        <li class="dropdown_item">
                            <a href="#">Email Template Builder</a>
                        </li>
                        <li class="dropdown_item">
                            <a href="#">Segmentation</a>
                        </li>
                        <li class="dropdown_item">
                            <a href="#">Personalization</a>
                        </li>
                        <li class="dropdown_item">
                            <a href="#">Marketing Automation</a>
                        </li>
                        <li class="dropdown_item">
                            <a href="#">Transactional Email</a>
                        </li>
                        <li class="dropdown_item">
                            <a href="#">Analytics</a>
                        </li>
                        <li class="dropdown_item">
                            <a href="#">Integrations</a>
                        </li>
                        <li class="dropdown_item">
                            <a href="#">Signup Forms</a>
                        </li>
                        <li class="dropdown_item"><a href="#">SMS</a></li>
                        <li class="dropdown_item">
                            <a href="#">Expert Services</a>
                        </li>
                        <li class="dropdown_item">
                            <a href="#">What's New</a>
                        </li>
                    </div>
                </div>
                <a href="pricing-page.html">Pricing</a>
                <a href="#">Resources</a>
                <a href="#"> Customers</a>
                <a href="gallary.html"> Gallery</a>
                <a href="#">Agencies</a>
            </div>
            <div id="op">
                <a href="#">Contact Us</a>
                <a href="login.html">Log in</a>
                <a href="signup.html">Try it free</a>
            </div>
            <div id="slide-btn">
                <div></div>
                <div></div>
                <div></div> 
            </div>
            <div id="slide-bar">
                   <div id="options1">
                    <div id="x">X</div>
                <div href="#" id="features1" id="primary" role="menuitem" aria-label="Features">
                   
                    <h4>Features <span>^</span></h4>
                    
                    <div id="dropdown1">
                        <li class="dropdown_item1">
                            <a href="">Features Overview</a>
                        </li>
                        <li class="dropdown_item1">
                            <a href="#">Email Template Builder</a>
                        </li>
                        <li class="dropdown_item1">
                            <a href="#">Segmentation</a>
                        </li>
                        <li class="dropdown_item1">
                            <a href="#">Personalization</a>
                        </li>
                        <li class="dropdown_item1">
                            <a href="#">Marketing Automation</a>
                        </li>
                        <li class="dropdown_item1">
                            <a href="#">Transactional Email</a>
                        </li>
                        <li class="dropdown_item1">
                            <a href="#">Analytics</a>
                        </li>
                        <li class="dropdown_item1">
                            <a href="#">Integrations</a>
                        </li>
                        <li class="dropdown_item1">
                            <a href="#">Signup Forms</a>
                        </li>
                        <li class="dropdown_item1"><a href="#">SMS</a></li>
                        <li class="dropdown_item1">
                            <a href="#">Expert Services</a>
                        </li>
                        <li class="dropdown_item1">
                            <a href="#">What's New</a>
                        </li>
                    </div>
                </div>
                <a href="./pricing-page.html">Pricing</a>
                <a href="#">Resources</a>
                <a href="#"> Customers</a>
                <a href="./gallary.html"> Gallery</a>
                <a href="#">Agencies</a>
                <a href="#"> Customers</a>
                <a href="#">Support</a>
                <a href="#">Sales</a>
                <a href="./signup.html">Try  it free</a>
            </div>
        </div>
        </div>`}
    else{return ` <div id="nav2">
            <div  id="main-nav2">
               <a aria-label="home" class="cmds-header-direct-logo" href="#">
                    <img src="https://gdm-catalog-fmapi-prod.imgix.net/ProductLogo/069606d3-94ab-4d43-8e87-7ebcb8e57923.png?auto=format&size=50" alt="">
                </a>
               <a class="cmds-site-navigation__link"
                        href="./overview.html" title="Overview"><span>Overview</span></a>
                <a class="cmds-site-navigation__link"
                        href="#" title="Campaigns"><span>Campaigns</span></a>
               <a class="cmds-site-navigation__link"
                        href="automation.html" title="Automation"><span>Automation</span></a>
               <a class="cmds-site-navigation__link"
                        href="#"
                        title="Transactional"><span>Transactional</span></a>
               <a class="cmds-site-navigation__link"
                        href="#" title="Lists &amp; subscribers"><span>Lists &amp;
                            subscribers</span></a></l>
                <a class="cmds-site-navigation__link"
                        href="#" title="Insights"><span>Insights</span></a>
                <a class="cmds-site-navigation__link"
                        href="#" title="Integrations"><span>Integrations</span></a>
            </div>
        
        <nav aria-label="MyAccount navigation" id="acc">
            
                <l><a class="cmds-header__pill"
                        href="./pricing-page.html">View Plans</a>
                </l>
               <l>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRscSc9C-eNLyH-rVg7077mcQcrfXIDjAd_XQ&usqp=CAU" alt="">
               </l>
               <l id="acc-nav">
                 
                <h3 id="username"></h3>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjWKm9ewt97xp3BtV-wo8DBVXYt_7l92MZ4Q&usqp=CAU" alt="">
                    
            </l>
                   
                    </div>
               
            
        </nav>
    </div>
 <div id="pro-drop">
      <a href="">Account settings</a>
       <a href="">Billing</a>
        <a href="">Manage team</a>
        <hr>
         <a href="">Integrations</a>
          <a href="">My templates</a>
          <hr>
           <a href="">Help</a>
            <a id="out">Log out</a>
    </div>
    `}
}
if(login!==false){namefun()}
function namefun() {
   
    setTimeout(() => { 
        let nameo = JSON.parse(localStorage.getItem('user'))||"";
    let name =nameo.name||""
    // name="Pratyay"
        document.getElementById("username").innerText = name;
        
    }, 50);
    
}
function navjs() {
    //  document.getElementById('slide-bar').style.display = 'flex'
// document.getElementById('slide-bar').style.display = 'flex'
     let slideBar = document.getElementById('slide-btn').addEventListener('click', sld)
     return slideBar
}
function sld() { 
    return document.getElementById('slide-bar').style.display = 'flex', slideBar = document.getElementById('slide-btn').style.display = 'none';
}
function cross() {
    // let slideBarr = document.getElementById('x').addEventListener('click', sld2)
     let slideBarr = document.getElementById('x').addEventListener('click', re)
    return slideBarr
}
function re() { 
    return window.location.reload()
}
function sld2() { 
    return document.getElementById('slide-bar').style.display = 'none'

}
function features() { 
    // let dro = document.getElementById('options1>features').addEventListener('click', drop)
    // return 
    let dro= document.getElementById('features1').addEventListener('click',drop)
    
    return dro
}
// namefun()
function drop() {
     if(document.getElementById('dropdown1').style.display =='none'){return document.getElementById('dropdown1').style.display = 'grid',document.getElementById('options1').style.top = '480'
}else {return document.getElementById('dropdown1').style.display="none",document.getElementById('options1').style.top = '300'}
}
function nav2js() {
    return document.getElementById('out').addEventListener('click', () => { logout() }),document.getElementById('acc-nav').addEventListener('click', () => { prodropfun() })
    
}
function logout() { 
    localStorage.removeItem("user")
    localStorage.removeItem("log")
    window.location.href="./index.html"
}
function prodropfun() { 
    let disprop = document.getElementById("pro-drop").style.display
    if (document.getElementById("pro-drop").style.display== "none"){document.getElementById("pro-drop").style.display="grid"}
    else{document.getElementById("pro-drop").style.display = "none"}
}
export { navbar, navjs, cross, features,nav2js}
