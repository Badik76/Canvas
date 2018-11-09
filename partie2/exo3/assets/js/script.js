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
  ctx.fillStyle="#ec0b43";
  ctx.arc(180,80,10,0,Math.PI*2,false);
  ctx.fill();
  ctx.beginPath();
  ctx.arc(220,80,10,0,Math.PI*2,false);
  ctx.fill();

  ctx.beginPath();
  ctx.fillStyle="#ec0b43";
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
  ctx.quadraticCurveTo(380,140,350,155); //pointe bras droit
  ctx.lineTo(350, 155);
  ctx.lineTo(250, 155);
  ctx.lineTo(220, 255); // taille droite
  ctx.lineTo(250, 355); //pied droit
  ctx.lineTo(210, 355);
  ctx.lineTo(200, 265); //Couicouilles
  ctx.lineTo(190, 355); //pied gauche
  ctx.lineTo(150, 355);
  ctx.lineTo(180, 255); //taille gauche
  ctx.lineTo(150, 155); //bras gauche
  ctx.lineTo(50, 155);
  ctx.quadraticCurveTo(20,140,50,125); //pointe bras gauche
  ctx.lineTo(50, 125);
  ctx.fill();

//fucks
ctx.beginPath();
ctx.lineWidth="4";
ctx.strokeStyle = "#7a2976"; // Définition de la couleur de remplissage
ctx.moveTo(50, 140);
ctx.lineTo(10, 140);
ctx.stroke();
ctx.beginPath();
ctx.lineWidth="4";
ctx.strokeStyle = "#7a2976"; // Définition de la couleur de remplissage
ctx.moveTo(350, 140);
ctx.lineTo(390, 140);
ctx.stroke();

//Ornement corps
 //boutons
  ctx.beginPath();
  ctx.lineWidth="1.5"
  ctx.fillStyle="black";
  ctx.strokeStyle="#ec0b43";
  ctx.arc(200,150,10,0,Math.PI*2,false);
  ctx.fill();
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(200,190,10,0,Math.PI*2,false);
  ctx.fill();
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(200,230,10,0,Math.PI*2,false);
  ctx.fill();
  ctx.stroke();
 //ceinture
  ctx.beginPath();
  ctx.lineWidth="1.5"
  ctx.strokeStyle="black";
  ctx.moveTo(180, 255);
  ctx.lineTo(220, 255);
  ctx.stroke();

});
