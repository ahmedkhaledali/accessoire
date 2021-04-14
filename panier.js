function mood() {
    var element = document.body;
    element.classList.toggle("dark-mode");
  }

  let panier=[]
function ajoutPanier(x){
   var myObj = {
    "nom" : document.getElementById(x.id).getAttribute('datalib'),    //your artist variable
    "prix" : document.getElementById(x.id).getAttribute('dataprix'),  //your title variable
    "qte":document.getElementById(x.id).getAttribute('dataqte')
};

let a=myObj.nom
let b=myObj.prix
let c=myObj.qte 

let obj=JSON.stringify(myObj)

var node1 = document.createElement("p");
    var node2 = document.createElement("p");
    var node3 = document.createElement("p");
    
    
    var textnode = document.createTextNode(a);
    var textnode1 = document.createTextNode(b);
    var textnode2 = document.createTextNode(c);
    
    node1.appendChild(textnode);
    document.getElementById("tab").appendChild(node1);
    
    node2.appendChild(textnode1);
    document.getElementById("tab").appendChild(node2);

    node3.appendChild(textnode2);
    document.getElementById("tab").appendChild(node3);

    
  

    localStorage.setItem("test",obj)
    localStorage.getItem("test")

    

    const local=JSON.parse(localStorage.getItem("test"))
  
panier.push( myObj )
console.log(panier)
}

