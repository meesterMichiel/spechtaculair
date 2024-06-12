const navBtn = document.getElementById('navBtn');
const dropDown = document.getElementById('dropDown');

navBtn.addEventListener('click', function(){
    dropDown.parentElement.classList.toggle('open');
});


const mode = document.getElementById("mode");
const footerImg = document.querySelector('footer div img');
const headerImg = document.querySelector('header>img');
const aImg = document.querySelector('header nav a img');
const buttonImg = document.querySelector('header nav button img');
const navImg = document.querySelector('header nav div div a img');

mode.addEventListener("click", 
function toggle() {
    var element = document.getElementById("body");
    if (element.classList.contains("dark")) {
      element.classList.remove("dark");
      footerImg.src = "./img/Ground.png";
      headerImg.src = "./img/cloud_header_W2.png";
      aImg.src = "./img/Bird_Logo_black.png";
      buttonImg.src = "./img/arrow_button_gray.png";
      navImg.src = "./img/FontAwesome-Brands-Discord-icon.png"
    } 
    else {
      element.classList.add("dark");
      footerImg.src = "./img/Ground_Night.png";
      headerImg.src = "./img/cloud_header_D3.png";
      aImg.src = "./img/Bird_Logo_white.png";
      buttonImg.src = "./img/arrow_button_white.png";
      navImg.src = "./img/pnghq.com-discord-icon-black-transp-5.png"
    }
});