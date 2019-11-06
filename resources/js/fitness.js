//////////////////////////////
//  COLLAPSIBLE HEADINGS   //
////////////////////////////

var coll = document.getElementsByClassName("collapsible");

var i;

for(i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function(){
        this.classList.toggle("active");
        var content = this.nextElementSibling;
       
        if (content.style.display === "block") {
            content.style.display = "none";
         
        } else {
            content.style.display = "block";
            
        }
    });
}

//////////////////////////////
//    INFO TAG             //
////////////////////////////

function informMe() {

var x = document.getElementById("infoBox");

if(infoBox.style.display === "none") {
    infoBox.style.display = "block";
    } else {
    infoBox.style.display = "none";
    }
}
// //////////////////////////////
//   NAVIGATION FIXING   
// ////////////////////////////
// const nav = document.getElementById("#main");
// const topOfNav = nav.offsetTop;

// function fixNav(){
//     if(window.scrollY >= topOfNav){
//         document.body.style.paddingTop = nav.offsetHeight + "px";
//         document.body.classList.add("fixed-nav");
//     } else {
//         document.body.style.paddingTop = 0;
//         document.body.classList.remove("fixed-nav")
//     }
// }

// window.addEventListener("scroll", fixNav);

// //////////////////////////////
// //    SCROLL BACK UP       //
// ////////////////////////////

// var mybutton = document.getElementById("myBtn");

// window.onscroll = function() {scrollFunction()};

// function scrollFunction(){
//     if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
//         mybutton.style.visibility = "visible";
//     } else {
//         mybutton.style.visibility = "hidden";
//     }
// }

// function topFunction(){
//     document.body.scrollTop = 0;
//     document.documentElement.scrollTop = 0;
// }




//////////////////////////////
//    Mobile Nav Bar      //
////////////////////////////

// function myFunction(){
//     var x = document.getElementById("myLinks");
//     if (x.style.visibility === "hidden"){
//         x.style.visibility = "visible";
//     } else {
//         x.style.visibility = "hidden"
//     }
// }


//////////////////////////////
//    Sticky Navigation    //
////////////////////////////


function openNav() {
    document.getElementById("myNav").style.height = "100%";
  }

  function closeNav() {
    document.getElementById("myNav").style.height = "0%";
  }


