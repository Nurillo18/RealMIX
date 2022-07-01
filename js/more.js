
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