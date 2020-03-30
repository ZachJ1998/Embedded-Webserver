//var txt;

function loadFile()
{
  loadStrings("test.txt",fileLoaded);
}

function fileLoaded(data)
{
  createP(join(data, "<br/>"));
}

function setup()
{
  noCanvas();
  //console.log(txt);
  //createFileInput();
  var button = select("#loadfile");
  button.mousePressed(loadFile);
}
