var img = document.createElement("img");

img.src = "image/ticket.jpg";
img.setAttribute("style", "border: 1px solid black", "height: 20", "width:20px", "margin-top: 5px");

var div = document.getElementById("recipient");
div.appendChild(img);

div.setAttribute("style", "text-align: center")


