let data = JSON.parse(localStorage.getItem("userData")) || [];

class User {
  constructor(name, comp, email, pass) {
    this.name = name;
    this.company = comp;
    this.email = email;
    this.password = pass;
  }
  checkData = (email) => {
    if (
      this.name.length <= 0 ||
      this.company.length <= 0 ||
      this.email.length <= 0 ||
      this.password.length <= 0
    ) {
      alert("fill the correct info");
      return 0;
    }
    let flag = false;
    data.forEach((el) => {
      if (el.email == email) {
        flag = true;
        return flag;
      }
    });
    return flag;
  };
}

let form = document.querySelector("form");
let addUser = (event) => {
  event.preventDefault();
  let name = form.name.value;
  let comp = form.company.value;
  let email = form.email.value;
  let pass = form.password.value;

  let user = new User(name, comp, email, pass);
  let flag = user.checkData(email);
  if (flag) {
    alert("User already exist!");
    window.location.reload();
    return;
  }
  if (flag !== 0) {
    alert("Sign Up successful!")
    data.push(user);
    localStorage.setItem("userData", JSON.stringify(data));
    window.location.href="./login.html";
  }
};
form.addEventListener("submit", addUser);
