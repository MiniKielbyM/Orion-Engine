var elemSelectName = null;
function confirmPlayer() {
    console.log("press confirmed")
    // Get the element
    var elem = document.querySelector('#playerObjBase');

    // Create a copy of it
    var clone = elem.cloneNode(false);

    // Update the ID and add a class
    clone.id = 'playerObj';

    // Inject it into the DOM
    elem.before(clone);
    elemSelectName = "playerObj"
}
onmousemove = function (e) {
    if (!elemSelectName === null)
    {
        //Logging purposes
        console.log("mouse location:", e.clientX, e.clientY);

        //meat and potatoes of the snippet
        var pos = e;
        var element;
        element = document.getElementById(elemSelectName)
        element.style.left = pos.x + "px";
        element.style.top = pos.y + "px";
    }
}      

function stopMove()
{
    elemSelectName = null;
}