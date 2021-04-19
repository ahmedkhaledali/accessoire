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

let a=myObj.nom
let b=myObj.prix
let c=myObj.cat 
let d=myObj.img

let obj=JSON.stringify(panier)
console.log(obj)


    var node1 = document.createElement("p");
    var node2 = document.createElement("p");
    var node3 = document.createElement("p");
    var node4 = document.createElement("img");
    node4.src=d
    node4.style.height="50px"
  
    
    var textnode1 = document.createTextNode(a);
    var textnode2 = document.createTextNode(b);
    var textnode3 = document.createTextNode(c);
    var textnode4 = document.createTextNode(d);
    
    node1.appendChild(textnode1);
    document.getElementById("nom").appendChild(node1);
    
    node2.appendChild(textnode2);
    document.getElementById("prix").appendChild(node2);

    node3.appendChild(textnode3);
    document.getElementById("Categories").appendChild(node3);

    node4.appendChild(textnode4);
    document.getElementById("image").appendChild(node4);
  

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



function recherche(){

  document.getElementById("Element_yahsrhom_lkol").innerHTML = ""

  var form = document.getElementById("filtreForm");
  let filtre= form.elements["flexFiltre"].value;
  var data_filter = mesArticles.filter( element => element.cat ==filtre);

 
  document.getElementById("Element_yahsrhom_lkol").innerHTML = 
  `<div class="col-md-3"><div class="card shadow p-3 mb-5 bg-white rounded"><img src="img22.jpg" class="card-img-top" alt="..." class="w-20 h-20">
       <div class="card-body">`+value[key]+
         `<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
       </div>
       <button class="touche" id="art-4" datalib="Africain-Bracletes" dataprix="100" datacategorie ="Bracelets" dataimg="http://127.0.0.1:5500/img22.jpg"onclick="ajoutPanier(this)">Click me</button></div></div>`;
  
     ///fin pour
 
   //afficher filtre selectionné
  //console.log(filtre);
 
 
  //ajouter quantité 
   //input number 3 4 wala tzyd  w tna9es
   //event js aal input wa9t tetbadel valeur 
   //tetbadel f objet mteek
 }

  
  


