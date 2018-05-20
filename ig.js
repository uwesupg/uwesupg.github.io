document.getElementById("button1").onclick = function()
{
    var cv = document.getElementById("cv");
    var w = document.getElementById("w").value;
    var h = document.getElementById("h").value;
    var cp = document.getElementById("cp").value;

    cv.width = w;
    cv.height = h;

    var cx = cv.getContext("2d");
    cx.fillStyle = cp;
    cx.fillRect(0,0,w,h);

    var png = cv.toDataURL();
    document.getElementById("img1").src = png;
}