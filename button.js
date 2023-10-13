function ChangeLiked()
{
var button = document.getElementsByClassName("Favorito");
  for (var i = 0; i < button.length; i++) {
    if (button.item(i).style.visibility == 'hidden') {
      button.item(i).style.visibility = 'visible';
    }
    else button.item(i).style.visibility = 'hidden';
  }
}
function ChangeDisliked()
{
    var button = document.getElementsByClassName("Menos (aunque igual muy favoritos)");
    for (var i = 0; i < button.length; i++) {
      if (button.item(i).style.visibility == 'hidden') {
        button.item(i).style.visibility = 'visible';
      }
      else button.item(i).style.visibility = 'hidden';
    }
}
function ChangeColors()
{
    var elemmento =document.getElementById("myspan");
   elemmento.style="color:green";S
}
