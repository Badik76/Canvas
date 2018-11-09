$(function() {
  var c = document.getElementById("mon_canvas");
  var ctx = c.getContext("2d");

  // maison
  ctx.fillStyle = "#a0d7e6";
  ctx.fillRect(60,145,290,310);
  ctx.fill();            // Application du remplissage

  // fenetre porte.
  ctx.fillStyle = "red";
  ctx.fillRect(100,160,50,50);
  ctx.fillRect(250,160,50,50);
  ctx.fillRect(150,250,100,150);
  ctx.fill();            // Application du remplissage

  // toit
  ctx.globalCompositeOperation = "destination-over";
	ctx.rotate(45 * Math.PI /180);
  ctx.fillStyle = "#d88437";
  ctx.fillRect(145,-145,205,205);
  ctx.fill();            // Application du remplissage
});
