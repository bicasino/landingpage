let dropdownBtn = document.querySelector("#menu-slide");
let menuContent = document.querySelector("#menu-respon");
dropdownBtn.addEventListener("click", () => {
  if (menuContent.style.display === "") {
    menuContent.style.display = "block";
  } else {
    menuContent.style.display = "";
  }
});



// 
// $('.carousel').carousel({
//   interval: 2000
// })
// document.getElementById("menu-slide").onclick = function() {
//   alert("Ok !");
// };
