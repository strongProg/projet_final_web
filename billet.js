var img = document.createElement("img");

img.src = "image/billet-avion.jpg";
img.setAttribute("style", "border: 1px solid black", "height: 200", "width:300px", "margin-top: 5px");

var div = document.getElementById("recipient");
div.appendChild(img);

div.setAttribute("style", "text-align: center")


