$(function() {
  var c = document.getElementById("mon_canvas");
  var ctx = c.getContext("2d");

  //créa du carré maison
  ctx.beginPath();      // Début du chemin
  // ctx.lineTo(x,y);  // Un segment est ajouté vers 200,200

  ctx.moveTo(50,380);   // Le tracé part du point
  ctx.lineTo(350,380);  // Un segment est ajouté vers 200,200
  ctx.lineTo(350,150);   // Puis on trace jusqu'à 50,200
  ctx.lineTo(50,150);   // Puis on trace jusqu'à 50,200
  ctx.lineTo(50,380);   // Puis on trace jusqu'à 50,200
  ctx.closePath();      // Fermeture du chemin (facultative)
  ctx.fillStyle = "#a0d7e6"; // Définition de la couleur de remplissage
  ctx.fill();            // Application du remplissage

//créa du triangle/toit
ctx.beginPath();      // Début du chemin
ctx.moveTo(50,150);   // Le tracé part du point
ctx.lineTo(200,10);  // Un segment est ajouté vers 200,200
ctx.lineTo(350,150);  // Un segment est ajouté vers 200,200
ctx.lineTo(50,150);  // Un segment est ajouté vers 200,200

ctx.closePath();      // Fermeture du chemin (facultative)
ctx.fillStyle = "#d88437"; // Définition de la couleur de remplissage
ctx.fill();            // Application du remplissage

//créa des fenetres/portes

ctx.beginPath();      // Début du chemin
ctx.moveTo(100,170);   // Le tracé part du point fenetre gauche
ctx.lineTo(140,170);  // Un segment est ajouté vers 200,200
ctx.lineTo(140,210);  // Un segment est ajouté vers 200,200
ctx.lineTo(100,210);  // Un segment est ajouté vers 200,200

ctx.moveTo(300,170);   // Le tracé part du point fenetre droite
ctx.lineTo(260,170);  // Un segment est ajouté vers 200,200
ctx.lineTo(260,210);  // Un segment est ajouté vers 200,200
ctx.lineTo(300,210);  // Un segment est ajouté vers 200,200

ctx.moveTo(150,380);   // Le tracé part du point porte
ctx.lineTo(150,250);  // Un segment est ajouté vers 200,200
ctx.lineTo(250,250);  // Un segment est ajouté vers 200,200
ctx.lineTo(250,380);  // Un segment est ajouté vers 200,200

ctx.closePath();      // Fermeture du chemin (facultative)
ctx.fillStyle = "#cacaca"; // Définition de la couleur de remplissage
ctx.fill();            // Application du remplissage



});
