
var menuToggle = document.querySelector("#menu-toggle");
var activeElements = document.querySelectorAll(".active-element");
var toggleMenu = menuToggle.addEventListener("click", function(){
    // forEch not supported in IE11
    for(var activated = 0; activated < activeElements.length; activated++){
        activeElements[activated].classList.toggle("active"); 
    
    }
      //activeElements.forEach(function(e){ e.classList.toggle("active");});
})