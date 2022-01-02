componentContainer = document.getElementById("components-container-id");
navbar = document.getElementById("navbar-id");
componentDisplayed = false

function myFunction(btn) {
  btn.classList.toggle("change");
  if(!componentDisplayed){
    componentContainer.style.opacity = "1";
    navbar.style.height = "270px"
      componentContainer.style.transform = "translate(0%, 0%)";
      componentDisplayed = true
  }
  else if(componentDisplayed == true){
    componentContainer.style.transform = "translate(0%, -150%)";
    navbar.style.height = "55px"
    componentContainer.style.opacity = "0";
    componentDisplayed = false
  }
}
