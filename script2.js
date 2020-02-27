


function calculFact(givennumber) {

  var givennumber = prompt("Donne moi un nombre stp");
  var count;
  var result = 1;

  for ( var count = 1; count <= givennumber; count ++  ){

    result = result * count
  }

  console.log(`Merci pour ton nombre... Laisses moi deviner, tu a choisis le ${givennumber} ?  De tête je peux calculer sa factorielle et ça fait ${result} !`); 
  console.log("Amazing!")

}

calculFact();

