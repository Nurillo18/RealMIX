let hamburgerBtn = document.querySelector(".header__hamburger-btn")
let modal = document.querySelector(".header__modal")
let siteMain = document.querySelector(".site-main")
let links = document.querySelector(".modal__item-link")
let link1 = document.querySelector(".link1")
let link2 = document.querySelector(".link2")
let link3 = document.querySelector(".link3")
let elForm = document.querySelector(".form")
let elModal = document.querySelector(".modal-form")
let elDel = document.querySelector(".modal__Delete")
let elServicesHambur = document.querySelector(".services-hamburger")
let elSerModal = document.querySelector(".services-modal")
let elOpasitySer = document.querySelector(".services-main-part")

let moreHamburger = document.querySelector(".more-hamburger")
let moreModal = document.querySelector(".more-modal")
let moreMain = document.querySelector(".more-main-section")

moreHamburger.addEventListener("click" , function() {
  moreHamburger.classList.toggle("black")
})
moreHamburger.addEventListener("click", function() {
  moreModal.classList.toggle("block")
})
moreMain.addEventListener("click", function() {
  moreHamburger.classList.remove("black")
  moreModal.classList.remove("block")
})


elServicesHambur.addEventListener("click", function() {
  elServicesHambur.classList.toggle("black")
  elSerModal.classList.toggle("block")
})
elOpasitySer.addEventListener("click", function() {
  elSerModal.classList.remove("block")
  elServicesHambur.classList.remove("black")
})


// let elBody = document.querySelector(".body")
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

elForm.addEventListener("submit", function() {
  elModal.classList.add("blocks")
})
elDel.addEventListener("click", function(){
  elModal.classList.remove("blocks")
})
hamburgerBtn.addEventListener("click", function() {

  hamburgerBtn.classList.toggle("black");
  function clickedElements() {
    modal.classList.toggle("block");
    siteMain.classList.toggle("opasity");
    // elBody.classList.toggle(".bodys")

  }
  clickedElements()
})

siteMain.addEventListener("click", function() {
  modal.classList.remove("block")
  siteMain.classList.remove("opasity")
  hamburgerBtn.classList.remove("black")
  elModal.classList.remove("blocks")
  elDel.classList.remove("blocks")

})
links.addEventListener("click", function() {
  modal.classList.remove("block")
  siteMain.classList.remove("opasity");
  modal.classList.remove("block");

})
link1.addEventListener("click", function() {
  modal.classList.remove("block")
  siteMain.classList.remove("opasity");
  modal.classList.remove("block");

})
link2.addEventListener("click", function() {
  modal.classList.remove("block")
  siteMain.classList.remove("opasity");
  modal.classList.remove("block");

})
link3.addEventListener("click", function() {
  modal.classList.remove("block")
  siteMain.classList.remove("opasity");
  modal.classList.remove("block");

})
