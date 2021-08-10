var topPosition = 200;
var leftPosition = -200;

function runPuppy() {

    var puppy = document.getElementById("puppy");
    puppy.style.position = "absolute";
    puppy.style.left = leftPosition + "px";
    puppy.style.top = topPosition + "px";
    puppy.style.visibility = "visible";
    leftPosition += 20;
    topPosition += 5;
    if (leftPosition >= screen.availWidth) {
        topPosition = 200;
        leftPosition = -200;
    }
}