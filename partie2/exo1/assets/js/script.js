$(function() {
  var c = document.getElementById( "mon_canvas" );
  var ctx = c.getContext("2d");

//cône
  ctx.beginPath();
  ctx.moveTo(135,150);   // Le tracé part du point
  ctx.lineTo(200,380);  // Un segment est ajouté vers 200,200
  ctx.lineTo(270,150);  // Un segment est ajouté vers 200,200
  ctx.closePath();      // Fermeture du chemin (facultative)
  ctx.fillStyle = "#d88437"; // Définition de la couleur de remplissage
  ctx.fill();            // Application du remplissage

//boule de glace
  ctx.beginPath();
  ctx.lineWidth="3";
  ctx.fillStyle = "#8a0908"; // Définition de la couleur de remplissage
  ctx.strokeStyle="#8a0908";
  ctx.moveTo(135,150);
  ctx.quadraticCurveTo(200,0,270,150);
  ctx.stroke();
  ctx.fill();            // Application du remplissage
});
