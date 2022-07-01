

let elServicesHambur = document.querySelector(".services-hamburger")
let elSerModal = document.querySelector(".services-modal")
let elOpasitySer = document.querySelector(".services-main-part")


elServicesHambur.addEventListener("click", function() {
    elServicesHambur.classList.toggle("black")
    elSerModal.classList.toggle("block")
  })
  elOpasitySer.addEventListener("click", function() {
    elSerModal.classList.remove("block")
    elServicesHambur.classList.remove("black")
  })