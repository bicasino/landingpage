// let dropdownBtn = document.querySelector("#btn-toggle");
// let menuContent = document.querySelector(".header-navlinks");
// let asideopen = document.querySelector("#aside");
// dropdownBtn.addEventListener("click", () => {
//   if (menuContent.style.display === "") {
//     asideopen.style.display = "block";
//   } else {
//     menuContent.style.display = "";
//   }
// });

$(function () {
  $("header .nav-toggle").click(function () {
    $(this).addClass("active");
    $("header .header-navlinks").addClass("open");
    $("#overlay").addClass("show");
  });
  $("#overlay").click(function () {
    $(this).removeClass("show");
    $("header .header-navlinks").removeClass("open");
    $("header .nav-toggle").removeClass("active");
  });
});
// document.getElementById("btn-toggle").onclick = function() {
//     console.log(1+1)
//   };

// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
