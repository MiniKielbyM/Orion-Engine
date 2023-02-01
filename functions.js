var elemSelectName = "blank0";
var elemIdNum = "0";
function confirmPlacement() {
    document.getElementById(elemSelectName).removeChild(document.getElementById(elemSelectName).firstElementChild);
    document.getElementById("blank" + elemIdNum).id = 
    elemIdNum += "0";
    elemSelectName = "blank" + elemIdNum;
}
function confirmPlayer() {
    if (elemSelectName == "blank") {
        console.log("press confirmed")
        // Get the element
        var elem = document.querySelector('#playerObjBase');

        // Create a copy of it
        var clone = elem.cloneNode(true);

        // Update the ID and add a class
        clone.id = 'playerObj' + elemIdNum;

        // Inject it into the DOM
        elem.before(clone);
        elemSelectName = "playerObj" + elemIdNum;
        console.log(elemSelectName)
    }
}
onmousemove = function (e) {
    //Logging purposes
    console.log("mouse location:", e.clientX, e.clientY);

    //meat and potatoes of the snippet
    var pos = e;
    var element;
    element = document.getElementById(elemSelectName + elemIdNum)
    element.style.left = pos.x + "px";
    element.style.top = pos.y + "px";
}