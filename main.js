const tradeShows = document.querySelector(".trade");
const body = document.body
const ham = document.querySelector(".hamburger");



tradeShows.addEventListener("mouseover",()=>{
  body.classList.add("show-trades")
})
tradeShows.addEventListener("mouseout",()=>{
  body.classList.remove("show-trades")
})

ham.addEventListener("click",(event)=>{
  body.classList.toggle("active")
  body.classList.toggle("cross")

})

