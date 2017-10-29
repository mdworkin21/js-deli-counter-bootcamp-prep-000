//First Task

var katzDeli = [];
var katzDeliLine = [];

function takeANumber(array, name){
  array.push(name)
  return "Welcome, " + name + ". You are number " + array.length + " in line.";

}

//Second Task

function nowServing(array){
  if (array.length === 0){
   return "There is nobody waiting to be served!"
 } else {
   var serving = array[0]
   array.shift();
   return "Currently serving " + serving + "."
 }

}



//Third Task

function currentLine(array){
  var deliLine = [];
  if (array.length === 0){
    return "The line is currently empty."
  } else {
      for( var i = 0; i < deliLine.length; i++){
      var name = array[i];
      var position = (i + 1) + ". "
      return "The line is currently: " + position + name + ", "

    }
  }
}
