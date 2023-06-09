// const header=document.querySelector(".header");document.addEventListener("DOMContentLoaded",iniciarApp);const desktop=window.matchMedia("(max-width:1280px");var swiper=new Swiper(".mySwiper",{slidesPerView:3,spaceBetween:30,freeMode:!0,pagination:{el:".swiper-pagination",clickable:!0},breakpoints:{0:{slidesPerView:1},768:{slidesPerView:2},1024:{slidesPerView:3}}});const containerNav=document.querySelector(".container-nav"),nav=document.querySelector(".nav"),btns=document.querySelector(".container-buttons");function iniciarApp(){desktop.addEventListener("change",()=>{handleScreenResize(desktop)}),controlarClickNav(),handleClickLinks()}function handleClickLinks(){document.querySelectorAll(".smooth").forEach(e=>{e&&e.addEventListener("click",navegacionSmooth)})}function navegacionSmooth(e){e.preventDefault();let i=document.querySelector(e.target.attributes.href.value);containerNav.classList.remove("visible"),containerNav.classList.remove("display-visible"),nav.classList.remove("display-visible"),btns.classList.remove("display-visible"),i.scrollIntoView({behavior:"smooth"}),window.matchMedia("(max-width:1023)"),containerNav.classList.contains("visible")?header.classList.add("zindex"):header.classList.remove("zindex")}function controlarClickNav(){let e=document.querySelector(".container-menu img");e&&e.addEventListener("click",()=>{desplegarMenu()})}function desplegarMenu(){containerNav&&(containerNav.classList.toggle("visible"),containerNav.classList.toggle("display-visible")),nav&&nav.classList.toggle("display-visible"),btns&&btns.classList.toggle("display-visible"),containerNav.classList.contains("visible"),containerNav.classList.contains("visible")?header.classList.add("zindex"):header.classList.remove("zindex")}function handleScreenResize(e){e.matches?(document.querySelector(".container-map-access").style.order="1",document.querySelector(".container-suscribe-acesss").style.order="2"):(document.querySelector(".container-map-access").style.order="2",document.querySelector(".container-suscribe-acesss").style.order="1")}
// const gifts = ['cat','game','socks'];
// const wrapped = wrapping(gifts)

// function wrapping(gifts) {
// const cantAsteriscos = gifts.length +2;
//  return gifts.forEach(gift=>{return "*".repeat(cantAsteriscos) +"\n*" + gift + "*\n" + "*".repeat(cantAsteriscos) })


// }

// console.log(wrapped );

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
        handleButtonsActive();
}

function handleButtonsActive(){
    const botones = document.querySelectorAll('.container-tipos-viaje button');
    if(botones){
        botones.forEach(boton=>{
            boton.addEventListener('click',()=>{
              const btnActivo = document.querySelector('.active');
              if(btnActivo){
                btnActivo.classList.remove('active');
                boton.classList.toggle('active')
              }
            })
        })
    }
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
        header.classList.add('zindex')
        
    }else{
        header.classList.remove('zindex')

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
        header.classList.add('zindex')
        
    }else{
        header.classList.remove('zindex')

    }
   

}
function handleScreenResize(e) {
    e.matches
        ? ((document.querySelector(".container-map-access").style.order = "1"), (document.querySelector(".container-suscribe-acesss").style.order = "2"))
        : ((document.querySelector(".container-map-access").style.order = "2"), (document.querySelector(".container-suscribe-acesss").style.order = "1"));
}
