
document.addEventListener('DOMContentLoaded',iniciarApp);
const desktop = window.matchMedia("(max-width:1280px");

         var swiper = new Swiper(".mySwiper", {
      slidesPerView: 3,
      spaceBetween: 30,
      freeMode: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },

      breakpoints:{
        0:{
            slidesPerView:1,
        },

        768:{
            slidesPerView:2,
        },

        1024:{
            slidesPerView:3
        },
      }
    });
    
    
    const containerNav = document.querySelector('.container-nav');
    const nav = document.querySelector('.nav')
    const btns = document.querySelector('.container-buttons')
function iniciarApp(){

desktop.addEventListener("change",()=>{ //LLAMA A UNA FUNCION PARA CAMBIAR DE POSICION LOS DIVS DE MAPA Y SUSCRIBE DE LA SECCION ACCESS
  handleScreenResize(desktop) //LE PASO LA RESOLUCION DE 1280PX

});


controlarClickNav();

handleClickLinks();




}


function handleClickLinks(){
  const links = document.querySelectorAll('.smooth');
  links.forEach(link=>{
    if(link){
      link.addEventListener('click',navegacionSmooth)

    }

  })
}

function navegacionSmooth(e){
  e.preventDefault();
  const sectionHref = document.querySelector(e.target.attributes.href.value);
  containerNav.classList.remove('visible') 
  containerNav.classList.remove('display-visible') 
  nav.classList.remove('display-visible')
  btns.classList.remove('display-visible')

    sectionHref.scrollIntoView({behavior:'smooth'});

    const header = document.querySelector('.header');
    header.style.zIndex=="100" ? header.style.zIndex="-1" :  header.style.zIndex="100";

}

function controlarClickNav(){
  const menu = document.querySelector('.container-menu img');
  if(menu)   menu.addEventListener('click',()=>{
    desplegarMenu()
  })

}

function desplegarMenu(){


  if(containerNav){ 
    containerNav.classList.toggle('visible') 
    containerNav.classList.toggle('display-visible') 
  };

    if(nav){
      nav.classList.toggle('display-visible')
    }

if(btns){
  btns.classList.toggle('display-visible')
}

const header = document.querySelector('.header');
header.style.zIndex=="100" ? header.style.zIndex="-1" :  header.style.zIndex="100";

}


function handleScreenResize(e){
  
  if(e.matches){
   document.querySelector('.container-map-access').style.order="1";
    document.querySelector('.container-suscribe-acesss').style.order="2";
  }else{
    document.querySelector('.container-map-access').style.order="2";
    document.querySelector('.container-suscribe-acesss').style.order="1";

  }
}

