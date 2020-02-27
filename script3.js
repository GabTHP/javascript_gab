
function buildPyramid(givennumber) {

  var givennumber = prompt("Donne moi un nombre stp");
  var count;
  var result = 1;
  var espace = ' '
  var diese = '#'

  for ( var count = givennumber; count >= 1; count --  ){

    console.log(espace.repeat(count - 1) + diese.repeat(givennumber - count + 1));

  }

 

}

buildPyramid();
