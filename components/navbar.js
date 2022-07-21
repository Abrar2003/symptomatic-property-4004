let navbar = () => {
    let login = localStorage.getItem('log') || false;
    // login = true;
  if(login==false)  {
        return `
      <div id="logo">
      <a href="index.html">
                <img src="https://gdm-catalog-fmapi-prod.imgix.net/ProductLogo/069606d3-94ab-4d43-8e87-7ebcb8e57923.png?auto=format&size=50" alt=""/>
                <p>Campaing Monitor</p>
                </a>
            </div>

            <div id="options">
                <div href="#" id="features" class="primary-nav-link" role="menuitem" aria-label="Features">
                    <h3 id="see">Features <span>^</span></h3>
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
                <a href="#"> Gallery</a>
                <a href="#">Agencies</a>
            </div>
            <div id="op">
                <a href="#">Contact Us</a>
                <a href="#">Log in</a>
                <a href="#">Try it free</a>
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
                <a href="#">Pricing</a>
                <a href="#">Resources</a>
                <a href="#"> Customers</a>
                <a href="#"> Gallery</a>
                <a href="#">Agencies</a>
                <a href="#"> Customers</a>
                <a href="#">Support</a>
                <a href="#">Sales</a>
                <a href="#">Try  it free</a>
            </div>
        </div>`}
    else{return ``}
}
 function navjs() {
    //  document.getElementById('slide-bar').style.display = 'flex'
// document.getElementById('slide-bar').style.display = 'flex'
     let slideBar = document.getElementById('slide-btn').addEventListener('click', sld)
    //  return slideBar
}
function sld() { 
     document.getElementById('slide-bar').style.display = 'flex', slideBar = document.getElementById('slide-btn').style.display = 'none';
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

function drop() {
     if(document.getElementById('dropdown1').style.display =='none'){return document.getElementById('dropdown1').style.display = 'grid',document.getElementById('options1').style.top = '480'
}else {return document.getElementById('dropdown1').style.display="none",document.getElementById('options1').style.top = '300'}
}
export  {navbar,navjs,cross,features}