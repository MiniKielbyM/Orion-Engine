var obj = new Array();
var objCount = 0;
var elemSelectName = "blank";
var elemIdNum = "0";
var ConfirmElem = null;
var npcText = "";
var npcTextConfirmed = true;
function confirmPlacementPlayer() {
    ConfirmElem = elemSelectName;
    document.getElementById(elemSelectName).removeChild(document.getElementById(elemSelectName).firstElementChild);
    elemSelectName = "blank"
    elemIdNum += "0";
    obj[objCount] = {
        "player": {
            "x": document.getElementById(ConfirmElem).style.left,
            "y": document.getElementById(ConfirmElem).style.top,
            "id": ConfirmElem
        }
    }
    objCount++;
}
function confirmPlacementWin() {
    ConfirmElem = elemSelectName;
    document.getElementById(elemSelectName).removeChild(document.getElementById(elemSelectName).firstElementChild);
    elemSelectName = "blank"
    elemIdNum += "0";
    obj[objCount] = {
        "win": {
            "x": document.getElementById(ConfirmElem).style.left,
            "y": document.getElementById(ConfirmElem).style.top,
            "id": ConfirmElem
        }
    }
    objCount++;
}
function confirmPlacementNpc() {
    ConfirmElem = elemSelectName;
    document.getElementById(elemSelectName).removeChild(document.getElementById(elemSelectName).firstElementChild);
    elemSelectName = "blank"
    elemIdNum += "0";
    document.getElementById("npcTextArea").style.visibility = "visible";
    npcTextConfirmed = false;
}
function confirmNpcText() {
    console.log(document.getElementById("npcText").value);
    npcText = document.getElementById("npcText").value;
    obj[objCount] = {
        "npc": {
            "x": document.getElementById(ConfirmElem).style.left,
            "y": document.getElementById(ConfirmElem).style.top,
            "id": ConfirmElem,
            "text": npcText
        }
    }
    objCount++;
    npcTextConfirmed = true;
    npcText = ""
    document.getElementById("npcTextArea").style.visibility = "hidden";
}
function confirmPlayer() {
    if (elemSelectName == "blank" && npcTextConfirmed == true) {
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

function confirmNpc() {
    if (elemSelectName == "blank" && npcTextConfirmed == true) {
        console.log("press confirmed")
        // Get the element
        var elem = document.querySelector('#npcObjBase');

        // Create a copy of it
        var clone = elem.cloneNode(true);

        // Update the ID and add a class
        clone.id = 'npcObj' + elemIdNum;

        // Inject it into the DOM
        elem.before(clone);
        elemSelectName = "npcObj" + elemIdNum;
        addAllCssNpc(elemSelectName)
        console.log(elemSelectName)
    }
}

function confirmWin() {
    if (elemSelectName == "blank" && npcTextConfirmed == true) {
        console.log("press confirmed")
        // Get the element
        var elem = document.querySelector('#winObjBase');

        // Create a copy of it
        var clone = elem.cloneNode(true);

        // Update the ID and add a class
        clone.id = 'winObj' + elemIdNum;

        // Inject it into the DOM
        elem.before(clone);
        elemSelectName = "winObj" + elemIdNum;
        addAllCssWin(elemSelectName)
        console.log(elemSelectName)
    }
}

function confirmWall() {
    if (elemSelectName == "blank" && npcTextConfirmed == true) {
        console.log("press confirmed")
        // Get the element
        var elem = document.querySelector('#wallObjBase');

        // Create a copy of it
        var clone = elem.cloneNode(true);

        // Update the ID and add a class
        clone.id = 'wallObj' + elemIdNum;

        // Inject it into the DOM
        elem.before(clone);
        elemSelectName = "wallObj" + elemIdNum;
        addAllCssWall(elemSelectName)
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
    document.getElementById(PlayerId).firstChild.id = "clientConfirm"
}

function addAllCssNpc(NpcId) {
    document.getElementById(NpcId).style.width = "50px";
    document.getElementById(NpcId).style.height = "50px";
    document.getElementById(NpcId).style.backgroundColor = "darkRed";
    document.getElementById(NpcId).style.position = "absolute";
    document.getElementById(NpcId).firstChild.id = "clientConfirm"
}

function addAllCssWin(WinId) {
    document.getElementById(WinId).style.width = "100px";
    document.getElementById(WinId).style.height = "100px";
    document.getElementById(WinId).style.backgroundColor = "rgb(0, 203, 0)";
    document.getElementById(WinId).style.position = "absolute";
    document.getElementById(WinId).firstChild.id = "clientConfirm"
}

function addAllCssWall(WinId) {
    document.getElementById(WinId).style.backgroundColor = "blue";
    document.getElementById(WinId).style.position = "absolute";
    document.getElementById(WinId).firstChild.id = "clientConfirm"
}

function downloadFile() {
    var filename = "Assets.json";
    var blob = new Blob([JSON.stringify(obj)], { type: 'text/plain' });
    if (window.navigator && window.navigator.msSaveOrOpenBlob) {
        window.navigator.msSaveOrOpenBlob(blob, filename);
    } else {
        var e = document.createEvent('MouseEvents'),
            a = document.createElement('a');
        a.download = filename
        a.href = window.URL.createObjectURL(blob);
        a.dataset.downloadurl = ['text/plain', a.download, a.href].join(':');
        e.initEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
        a.dispatchEvent(e);
    }
}

function DebugObj() {
    console.log(obj)
}