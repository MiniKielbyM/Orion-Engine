var elemSelectName = "blank";
function confirmPlacement() {
    elemSelectName = "blank";
    
}
function confirmPlayer() {
    if (elemSelectName == "blank") {
        console.log("press confirmed")
        // Get the element
        var elem = document.querySelector('#playerObjBase');

        // Create a copy of it
        var clone = elem.cloneNode(true);

        // Update the ID and add a class
        clone.id = 'playerObj';

        // Inject it into the DOM
        elem.before(clone);
        elemSelectName = "playerObj"
        console.log(elemSelectName)
    }
}
onmousemove = function (e) {
    //Logging purposes
    console.log("mouse location:", e.clientX, e.clientY);

    //meat and potatoes of the snippet
    var pos = e;
    var element;
    element = document.getElementById(elemSelectName)
    element.style.left = pos.x + "px";
    element.style.top = pos.y + "px";
}