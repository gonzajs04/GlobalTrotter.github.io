
const header = document.querySelector('.header');

document.addEventListener("DOMContentLoaded", iniciarApp);
const desktop = window.matchMedia("(max-width:1280px");
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    freeMode: !0,
    pagination: { el: ".swiper-pagination", clickable: !0 },
    breakpoints: { 0: { slidesPerView: 1 }, 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } },
});
const containerNav = document.querySelector(".container-nav"),
    nav = document.querySelector(".nav"),
    btns = document.querySelector(".container-buttons");
function iniciarApp() {
    desktop.addEventListener("change", () => {
        handleScreenResize(desktop);
    }),
        controlarClickNav(),
        handleClickLinks();
}
function handleClickLinks() {
    let e = document.querySelectorAll(".smooth");
    e.forEach((e) => {
        e && e.addEventListener("click", navegacionSmooth);
    });
}
function navegacionSmooth(e) {
    e.preventDefault();
    let s = document.querySelector(e.target.attributes.href.value);
    containerNav.classList.remove("visible"), containerNav.classList.remove("display-visible"), nav.classList.remove("display-visible"), btns.classList.remove("display-visible"), s.scrollIntoView({ behavior: "smooth" });

    if(window.matchMedia('(max-width:1023)')){

        
    }
      if(containerNav.classList.contains('visible')){
  
        header.style.zIndex=100;
    }else{
        header.style.zIndex=-1;
    }
}
function controlarClickNav() {
    let e = document.querySelector(".container-menu img");
    e &&
        e.addEventListener("click", () => {
            desplegarMenu();
        });
}
function desplegarMenu() {

        (containerNav && (containerNav.classList.toggle("visible"), containerNav.classList.toggle("display-visible")),
        nav && nav.classList.toggle("display-visible"),
        btns && btns.classList.toggle("display-visible"),
        containerNav.classList.contains("visible"))
   
    if(containerNav.classList.contains('visible')){
  
        header.style.zIndex=100;
    }else{
        header.style.zIndex=-1;
    }
   

}
function handleScreenResize(e) {
    e.matches
        ? ((document.querySelector(".container-map-access").style.order = "1"), (document.querySelector(".container-suscribe-acesss").style.order = "2"))
        : ((document.querySelector(".container-map-access").style.order = "2"), (document.querySelector(".container-suscribe-acesss").style.order = "1"));
}
