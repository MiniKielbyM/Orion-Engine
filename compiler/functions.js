var f;
var reader;
var upload;
var result;
var arrLength;
window.addEventListener('load', function () {
  upload = document.getElementById('fileInput');

  // Make sure the DOM element exists
  if (upload) {
    upload.addEventListener('change', function () {
      // Make sure a file was selected
      if (upload.files.length > 0) {
        reader = new FileReader(); // File reader to read the file 

        // This event listener will happen when the reader has read the file
        reader.addEventListener('load', function () {
          console.log(reader.result)
          result = JSON.parse(reader.result); // Parse the result into an object 
          console.log(result.length)
          arrLength = result.length
          console.log(result);
          loadObjects(result)
        });
        reader.readAsText(upload.files[0])
      }
    });
  }
});

function loadObjects(result) {
  var arrnum = 0;
  while (arrnum < result.length) {
    let res = new String;
    res = JSON.stringify(result[arrnum])
    var arr = new Array;
    arr = res.split(":")
    console.log(arr[0])
    if (arr[0] == '{"player"') {
      console.log("1")
      const newDiv = document.createElement("div");
      newDiv.className += "player";
      newDiv.style.width = "50px";
      newDiv.style.height = "50px";
      newDiv.id = result[arrnum].player.id
      newDiv.style.position = "absolute"
      newDiv.style.top = result[arrnum].player.y
      newDiv.style.left = result[arrnum].player.x
      newDiv.style.backgroundColor = "red";
      document.body.insertBefore(newDiv, document.getElementById("blank"));
      console.log(result);
    }
    else if (arr[0] == '{"win"') {
      console.log("2")
      const newDiv = document.createElement("div");
      newDiv.className += "win";
      newDiv.style.width = "100px";
      newDiv.style.height = "100px";
      newDiv.id = result[arrnum].win.id
      newDiv.style.position = "absolute"
      newDiv.style.top = result[arrnum].win.y
      newDiv.style.left = result[arrnum].win.x
      newDiv.style.backgroundColor = "rgb(0, 203, 0)";
      document.body.insertBefore(newDiv, document.getElementById("blank"));
      console.log(result);
    }
    else if (arr[0] == '{"npc"') {
      console.log("2")
      const newDiv = document.createElement("div");
      const newText = document.createElement("div");
      const newTextP = document.createElement("h1");
      newText.className += "npcText";
      var newTextArr = new Array;
      let resNum = new String;
      resNum = JSON.stringify(result[arrnum].npc.id);
      newTextArr = resNum.split("j")
      newText.id = "npcTextBox" + newTextArr[1]
      newText.style.visibility = "hidden"
      newText.style.position = "absolute"
      newText.style.width = "80%"
      newText.style.height = "300px"
      newText.style.bottom = "0px"
      newText.style.left = "10%"
      newText.style.backgroundColor = "gray"
      newText.style.borderRadius = "25px"
      newText.style.borderWidth = "100px"
      newText.style.borderColor = "red"
      newTextP.innerText = result[arrnum].npc.text;
      newTextP.id = "npcText" + newTextArr[1]
      newTextP.className += "npcText"
      newText.appendChild(newTextP)
      newDiv.className += "npc";
      newDiv.style.width = "50px";
      newDiv.style.height = "50px";
      newDiv.id = result[arrnum].npc.id
      newDiv.style.position = "absolute"
      newDiv.style.top = result[arrnum].npc.y
      newDiv.style.left = result[arrnum].npc.x
      newDiv.style.backgroundColor = "darkred";
      document.body.insertBefore(newDiv, document.getElementById("blank"));
      document.body.insertBefore(newText, document.getElementById("textBlank"))
      console.log(result);
    }
    else if (arr[0] == '{"wall"') {
      console.log("1")
      const newDiv = document.createElement("div");
      newDiv.className += "wall";
      newDiv.style.width = result[arrnum].wall.width;
      newDiv.style.height = result[arrnum].wall.height;
      newDiv.id = result[arrnum].wall.id
      newDiv.style.position = "absolute"
      newDiv.style.top = result[arrnum].wall.y
      newDiv.style.left = result[arrnum].wall.x
      newDiv.style.backgroundColor = "blue";
      document.body.insertBefore(newDiv, document.getElementById("blank"));
      console.log(result);
    }
    else if (arr[0] == '{"hazard"') {
      console.log("1")
      const newDiv = document.createElement("div");
      newDiv.className += "wall";
      newDiv.style.width = result[arrnum].hazard.width;
      newDiv.style.height = result[arrnum].hazard.height;
      newDiv.id = result[arrnum].hazard.id
      newDiv.style.position = "absolute"
      newDiv.style.top = result[arrnum].hazard.y
      newDiv.style.left = result[arrnum].hazard.x
      newDiv.style.backgroundColor = "rgb(255, 111, 0)";
      document.body.insertBefore(newDiv, document.getElementById("blank"));
      console.log(result);
    }
    else if (arr[0] == '{"UnlockDoor"') {
      console.log("1")
      const newDiv = document.createElement("div");
      const newTop = document.createElement("div");
      const newLeft = document.createElement("div");
      const newBottom = document.createElement("div");
      const newRight = document.createElement("div");
      newTop.className = "top"
      newLeft.className = "left"
      newBottom.className = "bottom"
      newRight.className = "right"
      newDiv.className += "door";
      newTop.style.width = result[arrnum].UnlockDoor.doorWidth;
      newRight.style.height = result[arrnum].UnlockDoor.doorHeight;
      newLeft.style.width = result[arrnum].UnlockDoor.doorWidth;
      newBottom.style.height = result[arrnum].UnlockDoor.doorHeight;
      newTop.style.height = "10px";
      newRight.style.width = "10px";
      newLeft.style.height = "10px";
      newBottom.style.width = "10px";
      newTop.style.position = "absolute";
      newRight.style.position = "absolute";
      newLeft.style.position = "absolute";
      newBottom.style.position = "absolute";
      newTop.style.right = "0px"
      newRight.style.top = "0px"
      newLeft.style.top = "0px"
      newBottom.style.right = "0px"
      newTop.style.top = "-5px"
      newRight.style.right = "-5px"
      newLeft.style.left = "-5px"
      newBottom.style.bottom = "-5px"
      newTop.style.backgroundColor = "rgba(255, 255, 0, 0)"
      newRight.style.backgroundColor = "rgba(255, 255, 0, 0)"
      newLeft.style.backgroundColor = "rgba(255, 255, 0, 0)"
      newBottom.style.backgroundColor = "rgba(255, 255, 0, 0)"
      newDiv.appendChild(newBottom);
      newDiv.appendChild(newLeft);
      newDiv.appendChild(newRight);
      newDiv.appendChild(newTop);
      newDiv.style.width = result[arrnum].UnlockDoor.doorWidth;
      newDiv.style.height = result[arrnum].UnlockDoor.doorHeight;
      newDiv.id = result[arrnum].UnlockDoor.doorId
      newDiv.style.position = "absolute"
      newDiv.style.top = result[arrnum].UnlockDoor.doorY
      newDiv.style.left = result[arrnum].UnlockDoor.doorX
      newDiv.style.backgroundColor = "aqua";
      document.body.insertBefore(newDiv, document.getElementById("blank"));
      console.log(result);
    }
    arrnum++;
  }
}