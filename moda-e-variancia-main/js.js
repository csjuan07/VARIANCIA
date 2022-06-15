function calculate() {
  //Creating Array
  var string = document.getElementById("numeros").value;
  var array = string.split(" ")
  var total = array.reduce(function(a,b){
    return a+b;
  });
  for(var x=0; x < array.length; x++) { array[x] = +array[x]; }
  
  //Sequencia
  var sequencia = array.sort(function(a, b){return a-b});

  //Moda
  var moda = [];
  for(x=0; x < array.length; x += 1) {if(array[x] === array[x + 1]) {
   moda.push(array[x]);
  }}

  
  //Variancia
var media = total/array.length;
function var_numerator(value){
  return ((value-media)*(value-media))
};
var vari = array.reduce(function(a,b){
return a+b;
});

var ancia = vari/array.length;
  
  if (moda == "") {
    moda = "invalido";
  }

  if (ancia == "") {
      ancia = "invalido";
  }
  
  
  alert("Sequencia: " + sequencia);
  alert("Moda: " + moda);
  alert("Variancia: " + ancia);
}

document.getElementById("numeros").value = "";
