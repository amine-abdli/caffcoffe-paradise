const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");

menuOpenButton.addEventListener("click",()=>{
    // togle mobil menu visibilit
    document.body.classList.toggle("show-mobile-menu")
})
menuCloseButton.addEventListener("click",()=>menuOpenButton.click())