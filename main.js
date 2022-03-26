const menuBlock = document.querySelector(".header__menu");

function openMenu(){
    menuBlock.classList.add("showMenu");
    document.body.style.overflow = "hidden";    
    document.querySelector(".menu-open").style.display = "none";
    document.querySelector(".menu-close").style.display = "block";
}

function closeMenu(){
    menuBlock.classList.remove("showMenu");
    document.body.style.overflow = "auto"; 
    document.querySelector(".menu-open").style.display = "block";
    document.querySelector(".menu-close").style.display = "none";   
}