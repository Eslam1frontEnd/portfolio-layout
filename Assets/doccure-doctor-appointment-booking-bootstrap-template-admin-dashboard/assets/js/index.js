// localStorage.setItem("NAME", name);
// localStorage.setItem("SPECIALITY", speciality);
//============================================
//===========specialized filter===============
//============================================
let selection = document.querySelectorAll(".filter-widget label");
let checkMark = document.querySelectorAll("label input");
let items = document.querySelectorAll(".items .card");
let selectedCard = document.querySelectorAll(".items .card");


//===========Manage Active===============
checkMark.forEach((input) => {
  input.addEventListener("click", removeActive);
});

function removeActive() {
  for(var i = 0; i < checkMark.length; i++){
      checkMark[i].setAttribute("checked",false);
  }
  this.setAttribute("checked",true); 
}


//===========Manage filter===============
selection.forEach((label) => {
  label.addEventListener("click", manageCard);
});


function manageCard() {
  items.forEach((selectedCard) => {
    selectedCard.style.display = "none";
  });
  document.querySelectorAll(this.dataset.speciality).forEach((el) => {
    el.style.display = "block";
  });
  document.querySelectorAll(this.dataset.gender).forEach((el) => {
    el.style.display = "block";
    //el.setAttribute('checked',true);
  });
}
