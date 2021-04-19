function mood() {
    var element = document.body;
    element.classList.toggle("dark-mode");
  }

  let panier=[]
function ajoutPanier(x){
   var myObj = {
    "nom" : document.getElementById(x.id).getAttribute('datalib'),    //your artist variable
    "prix" : document.getElementById(x.id).getAttribute('dataprix'),  //your title variable
    "cat":document.getElementById(x.id).getAttribute('datacategorie'),
    "img":document.getElementById(x.id).getAttribute('dataimg')
};

panier.push( myObj )
console.log(panier)
let item = document.querySelector('.item-card')


let a=myObj.nom
let b=myObj.prix
let c=myObj.cat 
let d=myObj.img

let obj=JSON.stringify(panier)
console.log(obj)



  
item.innerHTML+=`
     <div class="row mt-3 ">
     <div class="col-md-3">
       <img src="${d}" class="img"style="height:50px;width:50px" >
     </div>
     <div class="col-md-2">
       <strong>${a}</strong>
     </div>
     <div class="col-md-3">
       <strong>${c}</strong>
     </div>
     <div class="col-md-2 d-flex" >
     <strong>${b}</strong>
     </div>
   </div>`


    localStorage.setItem("test",obj)
    localStorage.getItem("test")
    const local=JSON.parse(localStorage.getItem("test"))
  
}
//////////////////////////////////////////////////////////
let compt = document.querySelectorAll('.touche')
for(let i=0;i<compt.length;i++){
    compt[i].addEventListener("click", () => {
        kl()
    })
}
function kl(){
    let local=localStorage.getItem("kl")
    local=parseInt(local);
    if (local){
      localStorage.setItem("kl",local+1)
      document.getElementById('val').innerHTML=local+1
    }
    else{
        localStorage.setItem("kl",1)
        document.getElementById('val').innerHTML=1
    }
}


