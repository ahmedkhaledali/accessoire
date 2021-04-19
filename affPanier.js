
localStorage.getItem("test")
console.log(localStorage.getItem("test"))
    let panierTab=JSON.parse(localStorage.getItem("test"))

console.log(panierTab)
var somme=0;

for (var i = 0; i < panierTab.length; i++){
    var tab = panierTab[i];
        let prix=Number(tab.prix)
        somme=somme+prix;



    var node1 = document.createElement("p");
    var node2 = document.createElement("p");
    var node3 = document.createElement("p");
    var node4 = document.createElement("img");
node4.src="http://127.0.0.1:5501/panier.html"
    node4.style.height="50px"
    var node5= document.createElement('input');
    var node6 = document.createElement("input");
    var node7 = document.createElement("p");



    var textnode = document.createTextNode(tab.nom);
    var textnode2 = document.createTextNode(tab.prix);
    var textnode1 = document.createTextNode(tab.cat);
    var textnode3 = document.createTextNode(tab.img);
    var textnode4 = document.createTextNode("Total"+" "+ somme);


        
    node5.setAttribute('type','button');
    node5.setAttribute('name','supprimer');
    node5.setAttribute('value','supprimer');
    document.getElementById("supp").appendChild(node5);
    node5.addEventListener('onclick',supp());


     
    node6.setAttribute("type", "number");
    node6.setAttribute("value", "1");
    document.getElementById("qte").appendChild(node6);
    node6.style.width="50px"

    node1.appendChild(textnode);
    document.getElementById("nom").appendChild(node1);
    
    node2.appendChild(textnode1);
    document.getElementById("cat").appendChild(node2);

    node3.appendChild(textnode2);
    document.getElementById("prix").appendChild(node3);

    node4.appendChild(textnode3);
    document.getElementById("img").appendChild(node4);


  }
  node7.appendChild(textnode4)
  document.querySelector("h1").appendChild(node7);
  
function supp(){
    
    console.log()
}










  //document.getElementById('dd').innerHTML=`<h1>${tab.nom}</h1>`
  
  //for (var key in tab){
    //var value = tab[key];
    
      //console.log(value+" "+key);} pour verifier votre tableaux
  