
function myFunction() {
  var elmnt = document.createElement("li");
  var textnode = document.createTextNode("BMW-320I");
  elmnt.appendChild(textnode);

  var item = document.getElementById("myList");
  item.replaceChild(elmnt, item.childNodes[0]);

var elmnt = document.createElement("li");
var textnode = document.createTextNode("Ferrari");
elmnt.appendChild(textnode);

var item = document.getElementById("myList");
item.replaceChild(elmnt, item.childNodes[1]);

var elmnt = document.createElement("li");
var textnode = document.createTextNode("Lander-Rover");
elmnt.appendChild(textnode);

var item = document.getElementById("myList");
item.replaceChild(elmnt, item.childNodes[2]);
}
