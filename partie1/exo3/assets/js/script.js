$(function() {
  var c = document.getElementById("mon_canvas");
  var ctx = c.getContext("2d");

//roues
ctx.beginPath();
ctx.strokeStyle = "#369";
ctx.fillStyle = "#369";
ctx.arc(100,380,15,0,Math.PI*2,false);
ctx.stroke();
ctx.fill();

ctx.beginPath();
ctx.strokeStyle = "#369";
ctx.fillStyle = "#369";
ctx.arc(300,380,15,0,Math.PI*2,false);
ctx.stroke();
ctx.fill();

ctx.beginPath();      // Début du chemin
ctx.globalCompositeOperation = "destination-over";
ctx.moveTo(100,375);   // Le tracé part du point
ctx.lineTo(325,375);  // Un segment est ajouté vers 200,200
ctx.lineTo(325,355);  // Un segment est ajouté vers 200,200
ctx.lineTo(300,355);  // Un segment est ajouté vers 200,200
ctx.lineTo(250,325);  // Un segment est ajouté vers 200,200
ctx.lineTo(155,325);  // Un segment est ajouté vers 200,200
ctx.lineTo(100,355);  // Un segment est ajouté vers 200,200
ctx.lineTo(80,375);  // Un segment est ajouté vers 200,200


ctx.strokeStyle = "red";
ctx.fillStyle = "red"; // Définition de la couleur de remplissage

ctx.stroke();
ctx.fill();            // Application du remplissage
ctx.closePath();      // Fermeture du chemin (facultative)

// ctx.beginPath();
// ctx.strokeStyle = "green";
// ctx.fillStyle = "green";
// ctx.arc(155,320,30,0,Math.PI*2,false);
// ctx.stroke();
// ctx.fill();
});
