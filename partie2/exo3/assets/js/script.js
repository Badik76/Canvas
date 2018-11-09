$(function() {
  var c = document.getElementById( "mon_canvas" );
  var ctx = c.getContext("2d");
  ctx.lineWidth="3";
  //tete de Dark'PtitBiscuiiiit
  ctx.beginPath();
  ctx.fillStyle = "#7a2976"; // Définition de la couleur de remplissage
  ctx.arc(200,80,50,0,Math.PI*2,true);
  ctx.fill();

  //Yeux de Dark'PtitBiscuiiiit
  ctx.beginPath();
  ctx.fillStyle="red";
  ctx.arc(180,80,10,0,Math.PI*2,false);
  ctx.fill();
  ctx.beginPath();
  ctx.arc(220,80,10,0,Math.PI*2,false);
  ctx.fill();

  ctx.beginPath();
  ctx.fillStyle="red";
  ctx.arc(180,70,10,0,Math.PI,false);
  ctx.fill();
  ctx.beginPath();
  ctx.arc(220,70,10,0,Math.PI,false);
  ctx.fill();

  //sourcils de Dark'PtitBiscuiiiit
  ctx.beginPath();
  ctx.strokeStyle="black";
  ctx.arc(180,68,10,0,Math.PI,true);
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(220,68,10,0,Math.PI,true);
  ctx.stroke();

  //bouche de Dark'PtitBiscuiiiit
  ctx.beginPath();
  ctx.strokeStyle = "#5d0505";
  ctx.moveTo(180, 100);
  ctx.quadraticCurveTo(200,75,220,100);
  ctx.moveTo(180, 100);
  ctx.quadraticCurveTo(200,85,220,100);
  ctx.stroke();

 //corps de Dark'PtitBiscuiiiit
  ctx.beginPath();
  ctx.fillStyle = "#7a2976"; // Définition de la couleur de remplissage
  ctx.moveTo(200, 125);
  ctx.lineTo(350, 125);
  ctx.lineTo(350, 155);
  ctx.fill();









});
