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

