var array1 = ["a", "b", "c", "d", "e", "f","g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var myNum = document.getElementById("myNum").value;
var myText = document.getElementById("myText").value;
var shiftedStr = "";
function myFunction(myText, myNum) {
  arrayShifter(myNum);
  /*takeIndexArray(myText);*/
};
function arrayShifter(myNum) {
  for(var i = myNum; i > 0; i -- ){
    var array2 = array1;
      var x = array2.shift();
  array2.push(x);
  }
  console.log(array2);
  newFunction(array2);
}
function newFunction() {
 return document.getElementById("demo").innerHTML = array2;
 
}

  function takeIndexArray(){
     var neString = "lorem ipsum";  
  var y = neString[i];
  var z = "";
  for(var i = neString.length-1; i >= 0; i --){
  
   z + array1.indexOf(y);
    }
  };
 
 
