$(function() {
  var c = document.getElementById( "mon_canvas" );
  var ctx = c.getContext("2d");


  ctx.beginPath();
  // ctx.globalCompositeOperation = "destination-over";
  ctx.lineWidth="3";
  ctx.fillStyle = "white"; // Définition de la couleur de remplissage
  ctx.strokeStyle = "white";
  ctx.moveTo(135,150);
  ctx.quadraticCurveTo(200,0,270,150);
  ctx.stroke();
  ctx.fill();            // Application du remplissage

  ctx.beginPath();
  ctx.lineWidth="3";
  ctx.fillStyle = "grey"; // Définition de la couleur de remplissage
  ctx.strokeStyle = "grey";
  ctx.moveTo(75,200);
  ctx.quadraticCurveTo(200,50,330,200);
  ctx.stroke();
  ctx.fill();            // Application du remplissage

  ctx.beginPath();
  ctx.lineWidth="3";
  ctx.fillStyle = "grey"; // Définition de la couleur de remplissage
  ctx.strokeStyle = "grey";
  ctx.moveTo(75,200);
  ctx.quadraticCurveTo(200,350,330,200);
  ctx.stroke();
  ctx.fill();            // Application du remplissage
});
