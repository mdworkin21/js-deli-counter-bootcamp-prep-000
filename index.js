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
    if (array.length === 0){
    return "The line is currently empty."
  } else {
      //for( var i = 0; i < array.length; i++){
      var i = 0
      var name = array[i];
      var position = (array[i] + 1) + ". "
      while(i < array.length)
      return "The line is currently: " + position + name + ", "

    }
  }
