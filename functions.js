const fileSystem = require("browserify-fs")
var elemSelectName = "blank";
var elemIdNum = "0";
function confirmPlacement() {
    document.getElementById(elemSelectName).removeChild(document.getElementById(elemSelectName).firstElementChild);
    elemSelectName = "blank"
    elemIdNum += "0";
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
        addAllCssPlayer(elemSelectName)
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

function addAllCssPlayer(PlayerId) {
    document.getElementById(PlayerId).style.width = "50px";
    document.getElementById(PlayerId).style.height = "50px";
    document.getElementById(PlayerId).style.backgroundColor = "red";
    document.getElementById(PlayerId).style.position = "absolute";
}

function writeToJson() {
    const client = {
        "Name": "Mini Corp.",
        "Order_count": 83,
        "Address": "Little Havana"
    }
    const data = JSON.stringify(client)
    fileSystem.writeFile("output/assets.json", data, err => {
        if (err) {
            console.log("Error writing file", err)
        } else {
            console.log('JSON data is written to the file successfully')
        }
    })
}