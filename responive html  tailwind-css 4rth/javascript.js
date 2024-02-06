
let hamburger = document.querySelector("#hamBurger");
let hamburgerItems = document.querySelector("#burgerItems");
let closeHamburger = document.querySelector(".ri-close-line");

hamburger.addEventListener("click", function () {
  hamburgerItems.style.display = "block";
});

closeHamburger.addEventListener("click", function () {
  hamburgerItems.style.display = "none";
});



  // js for custome cursore in updates section////////////////////////
var elem = document.querySelectorAll(".elem");

elem.forEach(function(walue){
 walue.addEventListener("mouseenter",function(){
  walue.childNodes[5].style.opacity = 1;
  walue.childNodes[5].style.transform = 'translate(-50%, -0%)';
  walue.childNodes[5].style.transition = 'all 0.3s linear';

 });

 walue.addEventListener("mouseleave",function(){
  walue.childNodes[5].style.opacity = 0;
});
walue.addEventListener("mousemove",function(dets){
  // walue.childNodes[5].style.top = dets.y+"px";
  walue.childNodes[5].style.left = dets.x+"px";

})
})




//   let karsar = document.querySelector("#cursur");
// let body = document.querySelector("body");
// body.addEventListener("mousemove", function(dtails){
// karsar.style.top = dtails.y+"px";
// karsar.style.left = dtails.x+"px";
// })
