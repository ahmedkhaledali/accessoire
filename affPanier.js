function mood() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}


localStorage.getItem("test")
console.log(localStorage.getItem("test"))
    let panierTab=JSON.parse(localStorage.getItem("test"))

console.log(panierTab)
var somme=0;
let total = document.querySelector('.total')
let cart = document.querySelector('.item1-card')
for (var i = 0; i < panierTab.length; i++){
    var tab = panierTab[i];
        let prix=Number(tab.prix)
        somme=somme+prix;

console.log(tab.nom)
cart.innerHTML+=` <div class="row mt-3 ">
<div class="col-md-3">
  <img src="${tab.img}" class="img"style="height:50px;width:50px" >
</div>
<div class="col-md-2">
  <strong>${tab.nom}</strong>
</div>
<div class="col-md-3">
  <strong>${tab.cat}</strong>
</div>
<div class="col-md-2 d-flex" >
<strong>${tab.prix}</strong>
</div>
</div>`
}

console.log(somme)
total.innerHTML=`<br><h1>Total tous les articles est ${somme}</h1>`


  function supp(){
    
    let total = document.querySelector('.total')
let cart = document.querySelector('.item1-card')
     localStorage.clear()
    cart.innerHTML=""
    total.innerHTML=""
  }

