displayTitle();
function getColor()
{
  var colorString="";
  for(var i=0;i<6;i++)
  {
    var num = Math.floor(Math.random()*100);
    hexNum = num.toString(16);
    colorString += hexNum;
  }
  return colorString;
}
function displayTitle(){
    var x = document.getElementById("app-title"),
        txt = x.textContent,
        newText = "";
    for(var i=0, l=txt.length; i<l; i++)
    {
        newText += txt.charAt(i).fontcolor(getColor());
    }
    x.innerHTML = newText;
}