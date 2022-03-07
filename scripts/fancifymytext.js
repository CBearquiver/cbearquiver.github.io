
function clickBoring() 
{
  document.getElementById("fancyArea").style.fontSize="24pt";
}

function clickMoo() 
{
  let fancyArea = document.getElementById("fancyArea").value;
  fancyArea = fancyArea.toUpperCase();

  fancyArea = fancyArea.split(".");
  fancyArea = fancyArea.join("MOO. ");

  document.getElementById("fancyArea").value = fancyArea;
}

function boringChange()
{
  document.getElementById("fancyArea").style.fontWeight="normal";
  document.getElementById("fancyArea").style.color="black";
  document.getElementById("fancyArea").style.textDecoration="none";
}

function fancyChange()
{
  document.getElementById("fancyArea").style.fontWeight="bold";
  document.getElementById("fancyArea").style.color="blue";
  document.getElementById("fancyArea").style.textDecoration="underline";
}