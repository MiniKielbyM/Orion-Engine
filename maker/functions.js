var obj = new Array();
var objCount = 0;
var elemSelectName = "blank";
var elemIdNum = "0";
var ConfirmElem = null;
var npcText = "";
var doorElemId = 0
var playerPlaced = false
var doorFull = true
var doorId = "";
var buttonId = "";
var wallSizeConfirmed = true;
var npcTextConfirmed = true;
var Bclone
var fakeOn = false;
var sidebarOpen = true;
var bluePortalId;
var ColorPickerOpen = false
function confirmPlacementPlayer() {
    ConfirmElem = elemSelectName;
    document.getElementById(elemSelectName).removeChild(document.getElementById(elemSelectName).firstElementChild);
    elemSelectName = "blank"
    elemIdNum += "0";
    obj[objCount] = {
        "player": {
            "hasHitbox": !fakeOn,
            "x": document.getElementById(ConfirmElem).style.left,
            "y": document.getElementById(ConfirmElem).style.top,
            "id": ConfirmElem
        }
    }
    playerPlaced = true
    objCount++;
}
function confirmPlacementWin() {
    ConfirmElem = elemSelectName;
    document.getElementById(elemSelectName).removeChild(document.getElementById(elemSelectName).firstElementChild);
    elemSelectName = "blank"
    elemIdNum += "0";
    obj[objCount] = {
        "win": {
            "hasHitbox": !fakeOn,
            "x": document.getElementById(ConfirmElem).style.left,
            "y": document.getElementById(ConfirmElem).style.top,
            "id": ConfirmElem
        }
    }
    objCount++;
}
function confirmPlacementWall() {
    ConfirmElem = elemSelectName;
    document.getElementById(elemSelectName).removeChild(document.getElementById(elemSelectName).firstElementChild);
    elemSelectName = "blank"
    elemIdNum += "0";
    sizingWalls();
}

function confirmPlacementRep() {
    ConfirmElem = elemSelectName;
    document.getElementById(elemSelectName).removeChild(document.getElementById(elemSelectName).firstElementChild);
    elemSelectName = "blank"
    elemIdNum += "0";
    sizingReps();
}

function confirmPlacementRepulse() {
    ConfirmElem = elemSelectName;
    document.getElementById(elemSelectName).removeChild(document.getElementById(elemSelectName).firstElementChild);
    elemSelectName = "blank"
    elemIdNum += "0";
    sizingRepulse();
}

function confirmPlacementHazard() {
    ConfirmElem = elemSelectName;
    document.getElementById(elemSelectName).removeChild(document.getElementById(elemSelectName).firstElementChild);
    elemSelectName = "blank"
    elemIdNum += "0";
    doorFull = false
    sizingHazards();
}

function sizingHazards() {
    document.getElementById("sliders2").style.visibility = "visible";
    const inputH = document.querySelector("#inputH")
    inputH.addEventListener("input", (event) => { document.getElementById(ConfirmElem).style.width = inputH.value + "%" })
    const inputH2 = document.querySelector("#inputH2")
    inputH2.addEventListener("input", (event) => { document.getElementById(ConfirmElem).style.height = inputH2.value + "%" })
}

function confirmSizingHazards() {
    document.getElementById("sliders2").style.visibility = "hidden";
    obj[objCount] = {
        "hazard": {
            "hasHitbox": !fakeOn,
            "x": document.getElementById(ConfirmElem).style.left,
            "y": document.getElementById(ConfirmElem).style.top,
            "height": document.getElementById(ConfirmElem).style.height,
            "width": document.getElementById(ConfirmElem).style.width,
            "id": ConfirmElem
        }
    }
    objCount++;
    inputH.value = 1;
    inputH2.value = 1;
    doorFull = true
}

function sizingWalls() {
    document.getElementById("sliders").style.visibility = "visible";
    const input = document.querySelector("#input")
    input.addEventListener("input", (event) => { document.getElementById(ConfirmElem).style.width = input.value + "%" })
    const input2 = document.querySelector("#input2")
    input2.addEventListener("input", (event) => { document.getElementById(ConfirmElem).style.height = input2.value + "%" })
}

function confirmSizingWalls() {
    document.getElementById("sliders").style.visibility = "hidden";
    obj[objCount] = {
        "wall": {
            "hasHitbox": !fakeOn,
            "x": document.getElementById(ConfirmElem).style.left,
            "y": document.getElementById(ConfirmElem).style.top,
            "height": document.getElementById(ConfirmElem).style.height,
            "width": document.getElementById(ConfirmElem).style.width,
            "id": ConfirmElem
        }
    }
    objCount++;
    input.value = 1;
    input2.value = 1;
    doorFull = true
}

function sizingReps() {
    document.getElementById("sliders4").style.visibility = "visible";
    const input = document.querySelector("#inputR")
    input.addEventListener("input", (event) => { document.getElementById(ConfirmElem).style.width = input.value + "%" })
    const input2 = document.querySelector("#inputR2")
    input2.addEventListener("input", (event) => { document.getElementById(ConfirmElem).style.height = input2.value + "%" })
}

function confirmSizingReps() {
    document.getElementById("sliders4").style.visibility = "hidden";
    obj[objCount] = {
        "rep": {
            "hasHitbox": !fakeOn,
            "x": document.getElementById(ConfirmElem).style.left,
            "y": document.getElementById(ConfirmElem).style.top,
            "height": document.getElementById(ConfirmElem).style.height,
            "width": document.getElementById(ConfirmElem).style.width,
            "id": ConfirmElem
        }
    }
    objCount++;
    input.value = 1;
    input2.value = 1;
    doorFull = true
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
            "hasHitbox": !fakeOn,
            "x": document.getElementById(ConfirmElem).style.left,
            "y": document.getElementById(ConfirmElem).style.top,
            "id": ConfirmElem,
            "text": npcText
        }
    }
    objCount++;
    npcTextConfirmed = true;
    npcText = ""
    document.getElementById("npcText").value = "";
    document.getElementById("npcTextArea").style.visibility = "hidden";
}
function confirmPlayer() {
    if (elemSelectName == "blank" && npcTextConfirmed == true && playerPlaced == false && wallSizeConfirmed == true && doorFull == true && ColorPickerOpen == false) {
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

function confirmDoor() {
    if (elemSelectName == "blank" && npcTextConfirmed == true && wallSizeConfirmed == true && doorFull == true && ColorPickerOpen == false) {
        doorFull = false;
        console.log("press confirmed")
        // Get the element
        var elem = document.querySelector('#doorObjBase');

        // Create a copy of it
        var clone = elem.cloneNode(true);

        // Update the ID and add a class
        clone.id = 'doorObj' + doorElemId;

        // Inject it into the DOM
        elem.before(clone);
        elemSelectName = "doorObj" + doorElemId;
        addAllCssDoor(elemSelectName)
        console.log(elemSelectName)
    }
}

function confirmPlacementDoor() {
    ConfirmElem = elemSelectName;
    doorId = elemSelectName;
    document.getElementById(elemSelectName).removeChild(document.getElementById(elemSelectName).firstElementChild);
    elemSelectName = "blank"
    sizingDoor()
}

function sizingDoor() {
    document.getElementById("sliders3").style.visibility = "visible";
    const input = document.querySelector("#inputD")
    input.addEventListener("input", (event) => { document.getElementById(ConfirmElem).style.width = input.value + "%" })
    const input2 = document.querySelector("#inputD2")
    input2.addEventListener("input", (event) => { document.getElementById(ConfirmElem).style.height = input2.value + "%" })
}

function confirmSizingDoor() {
    document.getElementById("sliders3").style.visibility = "hidden";
    document.querySelector("#inputD").value = 1
    document.querySelector("#inputD2").value = 1
    confirmButton()
}

function confirmButton() {
    if (elemSelectName == "blank" && npcTextConfirmed == true && wallSizeConfirmed == true) {
        console.log("press confirmed")
        // Get the element
        var elem = document.querySelector('#buttonObjBase');

        // Create a copy of it
        var clone = elem.cloneNode(true);
        elem.before(clone);
        // Update the ID and add a class
        clone.id = 'buttonObj' + doorElemId;
        clone.querySelector("#confirmButton").id = "clientConfirmButton";
        // Inject it into the DOM
        elemSelectName = "buttonObj" + doorElemId;
        addAllCssButton(elemSelectName)
        console.log(elemSelectName)
    }
}

function confirmPlacementButton() {
    ConfirmElem = elemSelectName;
    buttonId = elemSelectName;
    elemSelectName = "blank";
    document.getElementById("clientConfirmButton").remove();
    confirmBox();
}

function confirmBox() {
    console.log("press confirmed")
    // Get the element
    var elem = document.querySelector('#boxObjBase');

    // Create a copy of it
    Bclone = elem.cloneNode(true);

    // Update the ID and add a class
    Bclone.id = 'boxObj' + doorElemId;

    // Inject it into the DOM
    elem.before(Bclone);
    elemSelectName = "boxObj" + doorElemId;
    console.log(elemSelectName)
    addAllCssBox(elemSelectName)
    console.log(elemSelectName)
}

function confirmPlacementBox() {
    ConfirmElem = elemSelectName;
    document.getElementById(elemSelectName).removeChild(document.getElementById(elemSelectName).firstElementChild);
    elemSelectName = "blank"
    obj[objCount] = {
        "UnlockDoor": {
            "hasHitbox": !fakeOn,
            "doorId": doorId,
            "doorX": document.getElementById(doorId).style.left,
            "doorY": document.getElementById(doorId).style.top,
            "doorHeight": document.getElementById(doorId).style.height,
            "doorWidth": document.getElementById(doorId).style.width,
            "buttonId": buttonId,
            "buttonX": document.getElementById(buttonId).style.left,
            "buttonY": document.getElementById(buttonId).style.top,
            "buttonIdNum": doorElemId,
            "boxId": ConfirmElem,
            "boxX": document.getElementById(ConfirmElem).style.left,
            "boxY": document.getElementById(ConfirmElem).style.top
        }
    }
    objCount++;
    doorElemId += "0"
    buttonElemId = "blank";
    doorFull = true;
}

function addAllCssButton(buttonId) {
    document.getElementById(buttonId).style.visibility = "visible";
    document.getElementById(buttonId).style.position = "absolute";
    document.getElementById(buttonId).style.backgroundColor = "gray";
    document.getElementById(buttonId).style.width = "70px";
    document.getElementById(buttonId).style.height = "70px";
}

function addAllCssBox(boxID) {
    document.getElementById(boxID).style.width = "40px";
    document.getElementById(boxID).style.height = "40px";
    document.getElementById(boxID).style.position = "absolute";
    document.getElementById(boxID).style.backgroundColor = "deepSkyBlue"
    document.getElementById(boxID).firstChild.id = "clientConfirm"
}

function confirmNpc() {
    if (elemSelectName == "blank" && npcTextConfirmed == true && wallSizeConfirmed == true && doorFull == true && ColorPickerOpen == false) {
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
    if (elemSelectName == "blank" && npcTextConfirmed == true && wallSizeConfirmed == true && doorFull == true && ColorPickerOpen == false) {
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

function confirmPortal1() {
    if (elemSelectName == "blank" && npcTextConfirmed == true && wallSizeConfirmed == true && doorFull == true && ColorPickerOpen == false) {
        console.log("press confirmed")
        // Get the element
        var elem = document.querySelector('#portalObjBase');

        // Create a copy of it
        var clone = elem.cloneNode(true);

        // Update the ID and add a class
        clone.id = 'portalObj' + elemIdNum;
        // Inject it into the DOM
        elem.before(clone);
        elemSelectName = "portalObj" + elemIdNum;
        addAllCssPortal1(elemSelectName)
        console.log(elemSelectNa / me)
    }
}

function addAllCssPortal1(portalId) {
    document.getElementById(portalId).style.position = "absolute"
    document.getElementById(portalId).style.backgroundColor = "darkBlue"
    document.getElementById(portalId).style.width = "10px"
    document.getElementById(portalId).style.height = "60px"
    document.getElementById(portalId).firstChild.id = "clientConfirm"
}

function confirmPlacementPortal1() {
    ConfirmElem = elemSelectName;
    portalId = elemSelectName;
    document.getElementById(elemSelectName).removeChild(document.getElementById(elemSelectName).firstElementChild);
    elemSelectName = "blank"
    confirmPortal2();
}

function confirmPortal2() {
    if (elemSelectName == "blank" && npcTextConfirmed == true && wallSizeConfirmed == true && doorFull == true && ColorPickerOpen == false) {
        console.log("press confirmed")
        // Get the element
        var elem = document.querySelector('#portalObjBase2');

        // Create a copy of it
        var clone = elem.cloneNode(true);

        // Update the ID and add a class
        clone.id = 'portalObj2' + elemIdNum;
        // Inject it into the DOM
        elem.before(clone);
        elemSelectName = "portalObj2" + elemIdNum;
        addAllCssPortal2(elemSelectName)
        console.log(elemSelectName)
    }
}

function addAllCssPortal2(portalId) {
    document.getElementById(portalId).style.position = "absolute"
    document.getElementById(portalId).style.backgroundColor = "orangered"
    document.getElementById(portalId).style.width = "10px"
    document.getElementById(portalId).style.height = "60px"
    document.getElementById(portalId).firstChild.id = "clientConfirm"
}

function confirmPlacementPortal2() {
    ConfirmElem = elemSelectName;
    document.getElementById(elemSelectName).removeChild(document.getElementById(elemSelectName).firstElementChild);
    elemSelectName = "blank"
    obj[objCount] = {
        "portal": {
            "hasHitbox": !fakeOn,
            "x1": document.getElementById(portalId).style.left,
            "y1": document.getElementById(portalId).style.top,
            "id1": portalId,
            "x2": document.getElementById(ConfirmElem).style.left,
            "y2": document.getElementById(ConfirmElem).style.top,
            "id2": ConfirmElem
        }
    }
    objCount++;
}

function confirmHazard() {
    if (elemSelectName == "blank" && npcTextConfirmed == true && wallSizeConfirmed == true && doorFull == true && ColorPickerOpen == false) {
        console.log("press confirmed")
        // Get the element
        var elem = document.querySelector('#hazardObjBase');

        // Create a copy of it
        var clone = elem.cloneNode(true);

        // Update the ID and add a class
        clone.id = 'hazardObj' + elemIdNum;
        // Inject it into the DOM
        elem.before(clone);
        elemSelectName = "hazardObj" + elemIdNum;
        addAllCssHazard(elemSelectName)
        console.log(elemSelectName)
    }
}

function confirmWall() {
    if (elemSelectName == "blank" && npcTextConfirmed == true && wallSizeConfirmed == true && doorFull == true && ColorPickerOpen == false) {
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
        doorFull = false;
        addAllCssWall(elemSelectName)
        console.log(elemSelectName)
    }
}

function confirmPlacementRep() {
    ConfirmElem = elemSelectName;
    document.getElementById(elemSelectName).removeChild(document.getElementById(elemSelectName).firstElementChild);
    elemSelectName = "blank"
    elemIdNum += "0";
    sizingReps();
}

function confirmRepulse() {
    if (elemSelectName == "blank" && npcTextConfirmed == true && wallSizeConfirmed == true && doorFull == true && ColorPickerOpen == false) {
        console.log("press confirmed")
        // Get the element
        var elem = document.querySelector('#repObjBase');

        // Create a copy of it
        var clone = elem.cloneNode(true);

        // Update the ID and add a class
        clone.id = 'repulseObj' + elemIdNum;

        // Inject it into the DOM
        elem.before(clone);
        elemSelectName = "repulseObj" + elemIdNum;
        doorFull = false;
        addAllCssRepulse(elemSelectName)
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

function addAllCssWall(WallId) {
    document.getElementById(WallId).style.width = "50px";
    document.getElementById(WallId).style.height = "50px";
    document.getElementById(WallId).style.backgroundColor = "blue";
    document.getElementById(WallId).style.position = "absolute";
    document.getElementById(WallId).firstChild.id = "clientConfirm"
}

function addAllCssRepulse(RepId) {
    document.getElementById(RepId).style.width = "50px";
    document.getElementById(RepId).style.height = "50px";
    document.getElementById(RepId).style.backgroundColor = "rgb(219, 0, 128)";
    document.getElementById(RepId).style.position = "absolute";
    document.getElementById(RepId).firstChild.id = "clientConfirm"
}

function addAllCssHazard(HazardId) {
    document.getElementById(HazardId).style.width = "50px";
    document.getElementById(HazardId).style.height = "50px";
    document.getElementById(HazardId).style.backgroundColor = "rgb(255, 111, 0)";
    document.getElementById(HazardId).style.position = "absolute";
    document.getElementById(HazardId).firstChild.id = "clientConfirm"
}

function addAllCssDoor(DoorId) {
    document.getElementById(DoorId).style.width = "50px";
    document.getElementById(DoorId).style.height = "50px";
    document.getElementById(DoorId).style.backgroundColor = "aqua";
    document.getElementById(DoorId).style.position = "absolute";
    document.getElementById(DoorId).firstChild.id = "clientConfirm"
}

function downloadFile() {
    if (elemSelectName == "blank" && npcTextConfirmed == true && wallSizeConfirmed == true && doorFull == true && ColorPickerOpen == false) {
        obj[objCount++] = {
            "bgColor": {
                "color": document.getElementById("color").value
            }
        }
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
        obj[objCount++] = null
    }
}

function DebugObj() {
    console.log(obj)
}

function hideSidebar() {
    if (sidebarOpen === true) {
        document.getElementById("sidebar").style.visibility = "hidden"
        sidebarOpen = false;
    }
    else if (sidebarOpen === false) {
        document.getElementById("sidebar").style.visibility = "visible"
        sidebarOpen = true;
    }
}

window.addEventListener('keydown', function (e) {
    if (`${e.key}` == "Enter") {
        hideSidebar();
    }
    if (`${e.key}` == "b") {
        if (ColorPickerOpen == false) {
            document.getElementById("colorPicker").style.visibility = "visible"
            ColorPickerOpen = true
        }
    }
}, false);

function confirmBG() {
    document.getElementById("colorPicker").style.visibility = "hidden"
    ColorPickerOpen = false;
    document.body.style.backgroundColor = document.getElementById("color").value
}


$(function () {
    var splashes = ["Subtitle!", "Play HAIL!", "Not bad on purpose!", "Michael trapped me here!", "AAAAAAAAAAA!"];
    $("#subtitle").html($("#subtitle").html().replace("Loading...", splashes[Math.floor(Math.random() * splashes.length)]));
});

function toCompSeq() {
    if (confirm("You will lose ALL unsaved work!\nAre you sure you want to continue?") == true) {
        window.location.replace('/Orion-Engine/compiler')
    }
}

function changeHitStatus() {
    if (fakeOn == false)
    {
        fakeOn = true
        document.getElementById("decompiler").innerText = "hitbox: off"
        return;
    }
    if (fakeOn == true)
    {
        fakeOn = false
        document.getElementById("decompiler").innerText = "hitbox: on"
        return;
    }
}