

/*=============== MUDAR FUNDO  DE HEADER ================*/

function rolagemHeader(){
    const header = document.getElementById('header' )
    //quando a rolagen for maior que 50 vh adicione
    if( this.scrolly >= 50) header.classList.add('rolagemHeader')

}
window.addEventListener('scroll',rolagemHeader)
/*=============== MODAL  SERVIÇOS ===============*/

const modalViews = document.querySelectorAll('.servicos-modal'),
      modalBtns =document.querySelectorAll('.servicos-button'),
      modalClose = document.querySelectorAll('.servicos-modal-close')


      //active modal

let modal = function(modalClick){
    modalViews[modalClick].classList.add('active-modal') //active-modal = levar para o css
}      
modalBtns.forEach((mb, i) =>{
    mb.addEventListener('click',() =>{
        modal(i)
    })
})

//fechar modal

modalClose.forEach((mc)=> {
    mc.addEventListener('click', () => {
        modalViews.forEach((mv)=>{
            mv.classList.remove('active-modal')
        
    })
})
})
/*===============  FILTRO  ================*/
// https://www.kunkalabs.com/mixitup/
/*Uma biblioteca de alto desempenho e livre de dependências para filtragem animada, classificação, inserção, remoção e muito mais.*/

const mixerPortfolio = mixitup('.work-container', {
    selectors: {
        target: '.work-card'
    },
    animation: {
        duration: 300
    }
});

/*ativar  Link trabalho ativo */ 
 
const LinkWork = document.querySelectorAll('.work-item')

function ativarWork(){
    LinkWork.forEach(l => l.classList.remove('active-work'))
    this.classList.add('active-work')

}
LinkWork.forEach( l => l.addEventListener('click', ativarWork))

/*===============  certificações ================*/

let swiperCertificacoes = new Swiper(".certificacoes-container", {
    spaceBetween: 24,
    loop:true,
    grabCursor:true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    breakpoints: {
       575 : {
          slidesPerView: 2,
         
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 48,
        },
      
      },
  });

/*===============seção  para ativar os links ===============*/


const sections =document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current=>{
        const sectionHeight = current.offsetHeight,
               sectionTop = current.offsetTop - 20,
               sectionId =current.getAttribute('id')

        if(scrollY >  sectionTop && scrollY <= sectionTop +sectionHeight) {
            document.querySelector('.nav-menu a[href*='  + sectionId +']').classList.add('active-link')
         } else{
            document.querySelector('.nav-menu a[href*='+ sectionId +']') .classList.remove('active-link')
        


        } 
    })

}
window.addEventListener('scroll', scrollActive)
/*=============== TEMA CLARO ESCURO ================*/ 


/*=============== ROLAGEM DE ANIMAÇÃO DE REVELAÇÃO ================*/