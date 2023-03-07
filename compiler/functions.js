var reader;
var upload;
var result;
var arrLength;
var playerId;
var playerNum;
var boxX = new Array
var boxY = new Array
var boxArrCounter = 0
const npcDiv = document.createElement("div");
var playerExists = false
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
          document.getElementById("buttonUpload").style.visibility = "hidden"
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
      playerNum = arrnum;
      newDiv.id = result[arrnum].player.id
      playerId = result[arrnum].player.id
      newDiv.style.position = "absolute"
      newDiv.style.top = result[arrnum].player.y
      newDiv.style.left = result[arrnum].player.x
      newDiv.style.backgroundColor = "red";
      document.body.insertBefore(newDiv, document.getElementById("blank"));
      console.log(result);
      playerExists = true
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
      const newTop = document.createElement("div");
      const newLeft = document.createElement("div");
      const newBottom = document.createElement("div");
      const newRight = document.createElement("div");
      newTop.className = "topNpc"
      newLeft.className = "leftNpc"
      newBottom.className = "bottomNpc"
      newRight.className = "rightNpc"
      newTop.style.width = "100%";
      newRight.style.height = "100%";
      newLeft.style.height = "100%";
      newBottom.style.width = "100%";
      newTop.style.height = "10px";
      newRight.style.width = "10px";
      newLeft.style.width = "10px";
      newBottom.style.height = "10px";
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
      newText.className += "npcTextBox";
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
      newDiv.style.width = "50px";
      newDiv.style.height = "50px";
      newDiv.id = result[arrnum].npc.id
      newDiv.style.position = "absolute"
      newDiv.style.top = result[arrnum].npc.y
      newDiv.style.left = result[arrnum].npc.x
      newDiv.style.backgroundColor = "darkred";
      newDiv.className += "npc";
      npcDiv.appendChild(newDiv)
      npcDiv.appendChild(newText)
      console.log(result);
    }
    else if (arr[0] == '{"wall"') {
      console.log("1")
      const newDiv = document.createElement("div");
      newDiv.className += "wall";
      const newTop = document.createElement("div");
      const newLeft = document.createElement("div");
      const newBottom = document.createElement("div");
      const newRight = document.createElement("div");
      newTop.className = "topWall"
      newLeft.className = "leftWall"
      newBottom.className = "bottomWall"
      newRight.className = "rightWall"
      newTop.style.width = "100%";
      newRight.style.height = "100%";
      newLeft.style.height = "100%";
      newBottom.style.width = "100%";
      newTop.style.height = "10px";
      newRight.style.width = "10px";
      newLeft.style.width = "10px";
      newBottom.style.height = "10px";
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
      newDiv.className += "hazard";
      const newTop = document.createElement("div");
      const newLeft = document.createElement("div");
      const newBottom = document.createElement("div");
      const newRight = document.createElement("div");
      newTop.className = "topHazard"
      newLeft.className = "leftHazard"
      newBottom.className = "bottomHazard"
      newRight.className = "rightHazard"
      newTop.style.width = "100%";
      newRight.style.height = "100%";
      newLeft.style.height = "100%";
      newBottom.style.width = "100%";
      newTop.style.height = "10px";
      newRight.style.width = "10px";
      newLeft.style.width = "10px";
      newBottom.style.height = "10px";
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
      newTop.className = "topDoor"
      newLeft.className = "leftDoor"
      newBottom.className = "bottomDoor"
      newRight.className = "rightDoor"
      newDiv.className += "door";
      newTop.style.width = "100%";
      newRight.style.height = "100%";
      newLeft.style.height = "100%";
      newBottom.style.width = "100%";
      newTop.style.height = "10px";
      newRight.style.width = "10px";
      newLeft.style.width = "10px";
      newBottom.style.height = "10px";
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
      newDiv.style.width = result[arrnum].UnlockDoor.doorWidth;
      newDiv.style.height = result[arrnum].UnlockDoor.doorHeight;
      newDiv.id = result[arrnum].UnlockDoor.doorId
      newDiv.style.position = "absolute"
      newDiv.style.top = result[arrnum].UnlockDoor.doorY
      newDiv.style.left = result[arrnum].UnlockDoor.doorX
      newDiv.style.backgroundColor = "aqua";
      newDiv.appendChild(newBottom);
      newDiv.appendChild(newLeft);
      newDiv.appendChild(newRight);
      newDiv.appendChild(newTop);
      document.body.insertBefore(newDiv, document.getElementById("blank"));
      const buttonBack = document.createElement("div")
      const buttonMid = document.createElement("div")
      const buttonFront = document.createElement("div")
      buttonMid.style.backgroundColor = "red"
      buttonMid.style.width = "60px"
      buttonMid.style.height = "60px"
      buttonMid.style.position = "absolute"
      buttonMid.style.top = "5px"
      buttonMid.style.left = "5px"
      buttonBack.appendChild(buttonMid)
      buttonFront.style.backgroundColor = "rgb(212, 0, 0)"
      buttonFront.style.width = "50px"
      buttonFront.style.height = "50px"
      buttonFront.style.position = "absolute"
      buttonFront.style.top = "5px"
      buttonFront.style.left = "5px"
      buttonFront.id = result[arrnum].UnlockDoor.buttonId
      buttonFront.className += "button"
      buttonMid.appendChild(buttonFront)
      buttonBack.style.backgroundColor = "gray"
      buttonBack.style.width = "70px"
      buttonBack.style.height = "70px"
      buttonBack.style.position = "absolute"
      buttonBack.style.top = result[arrnum].UnlockDoor.buttonY
      buttonBack.style.left = result[arrnum].UnlockDoor.buttonX
      document.body.insertBefore(buttonBack, document.getElementById("buttonBlank"));
      const newBox = document.createElement("div")
      const newTop2 = document.createElement("div");
      const newLeft2 = document.createElement("div");
      const newBottom2 = document.createElement("div");
      const newRight2 = document.createElement("div");
      newTop2.className = "topBox"
      newLeft2.className = "leftBox"
      newBottom2.className = "bottomBox"
      newRight2.className = "rightBox"
      newTop2.style.width = "100%";
      newRight2.style.height = "100%";
      newLeft2.style.height = "100%";
      newBottom2.style.width = "100%";
      newTop2.style.height = "10px";
      newRight2.style.width = "10px";
      newLeft2.style.width = "10px";
      newBottom2.style.height = "10px";
      newTop2.style.position = "absolute";
      newRight2.style.position = "absolute";
      newLeft2.style.position = "absolute";
      newBottom2.style.position = "absolute";
      newTop2.style.right = "0px"
      newRight2.style.top = "0px"
      newLeft2.style.top = "0px"
      newBottom2.style.right = "0px"
      newTop2.style.top = "-5px"
      newRight2.style.right = "-5px"
      newLeft2.style.left = "-5px"
      newBottom2.style.bottom = "-5px"
      newTop2.style.backgroundColor = "rgba(255, 255, 0, 0)"
      newRight2.style.backgroundColor = "rgba(255, 255, 0, 0)"
      newLeft2.style.backgroundColor = "rgba(255, 255, 0, 0)"
      newBottom2.style.backgroundColor = "rgba(255, 255, 0, 0)"
      newBox.style.position = "absolute"
      newBox.style.width = "40px"
      newBox.style.height = "40px"
      newBox.style.backgroundColor = "deepskyblue"
      newBox.style.top = result[arrnum].UnlockDoor.boxY
      newBox.style.left = result[arrnum].UnlockDoor.boxX
      newBox.appendChild(newBottom2)
      newBox.appendChild(newTop2)
      newBox.appendChild(newLeft2)
      newBox.appendChild(newRight2)
      newBox.className += "box"
      newBox.id = result[arrnum].UnlockDoor.boxId
      boxX[boxArrCounter] = parseInt(result[arrnum].UnlockDoor.boxX)
      boxY[boxArrCounter] = parseInt(result[arrnum].UnlockDoor.boxY)
      document.body.insertBefore(newBox, document.getElementById("boxBlank"))
      console.log(result);
      boxArrCounter++
    }
    arrnum++;
  }
  document.body.insertBefore(npcDiv, document.getElementById("divBlank"))
  if (playerExists === true) {
    (function () {
      //assorted functions code begin
      function collide(div1ID, div2) {
        const domRect1 = document.getElementById(div1ID).getBoundingClientRect();
        const domRect2 = div2.getBoundingClientRect();
        return !(
          domRect1.top > domRect2.bottom ||
          domRect1.right < domRect2.left ||
          domRect1.bottom < domRect2.top ||
          domRect1.left > domRect2.right
        );
      }
      function checkCollisionWithCondition(div1, div2, condition, check) {
        if (collide(div1, div2) === true && condition == check) {
          return true;
        }
        else {
          return false;
        }
      }
      function checkCollision(div1, div2) {
        if (collide(div1, div2) === true) {
          console.log("collision detected between " + div1 + " and " + div2)
          return true;
        }
        else {
          console.log("no collision detected")
          return false;
        }
      }
      var xAxisGet = result[playerNum].player.x;
      var yAxisGet = result[playerNum].player.y;
      var moveSpeed = 10;
      var xAxis = parseFloat(xAxisGet);
      var checkNumCollide = 0;
      var checkBoolWall = false;
      var npcText;
      var yAxis = parseFloat(yAxisGet);
      var npcIdBreak = new Array;
      const div = document.getElementById(playerId);
      const wallLefts = document.querySelectorAll(".leftWall");
      const wallRights = document.querySelectorAll(".rightWall");
      const wallTops = document.querySelectorAll(".topWall");
      const wallBottoms = document.querySelectorAll(".bottomWall");
      const hazardLefts = document.querySelectorAll(".leftHazard");
      const hazardRights = document.querySelectorAll(".rightHazard");
      const hazardTops = document.querySelectorAll(".topHazard");
      const hazardBottoms = document.querySelectorAll(".bottomHazard");
      const npcLefts = document.querySelectorAll(".leftNpc");
      const npcRights = document.querySelectorAll(".rightNpc");
      const npcTops = document.querySelectorAll(".topNpc");
      const npcs = document.querySelectorAll(".npc");
      const npcBottoms = document.querySelectorAll(".bottomNpc");
      const doorRights = document.querySelectorAll(".rightDoor");
      const doorLefts = document.querySelectorAll(".leftDoor");
      const doorTops = document.querySelectorAll(".topDoor");
      const doorBottoms = document.querySelectorAll(".bottomDoor");
      const boxRights = document.querySelectorAll(".rightBox");
      const boxLefts = document.querySelectorAll(".leftBox");
      const boxTops = document.querySelectorAll(".topBox");
      const boxBottoms = document.querySelectorAll(".bottomBox");
      const boxs = document.querySelectorAll(".box");
      const buttons = document.querySelectorAll(".button")
      const doors = document.querySelectorAll(".door")
      console.log(hazardRights.length)
      document.onkeydown = function (event) {
        switch (event.key) {
          case 'ArrowLeft':
          case 'a':
            while (checkNumCollide < wallRights.length) {
              if (wallRights.length > 0) {
                if (checkCollision(playerId, wallRights[checkNumCollide]) == true) {
                  xAxis += moveSpeed;
                  break;
                }
                checkNumCollide++
              }
            }
            checkNumCollide = 0
            while (checkNumCollide < hazardRights.length) {
              if (hazardRights.length > 0) {
                if (checkCollision(playerId, hazardRights[checkNumCollide]) == true) {
                  xAxis = parseFloat(xAxisGet)
                  yAxis = parseFloat(yAxisGet)
                  div.style.left = parseFloat(xAxisGet) + "px";
                  div.style.top = parseFloat(yAxisGet) + "px";
                  break;
                }
              }
              checkNumCollide++
            }
            checkNumCollide = 0;
            while (checkNumCollide < npcRights.length) {
              if (npcRights.length > 0) {
                if (checkCollision(playerId, npcRights[checkNumCollide])) {
                  console.log(npcIdBreak[1])
                  console.log(npcText)
                  xAxis += moveSpeed
                  break;
                }
                if (!checkCollision(playerId, npcRights[checkNumCollide]) && !checkCollision(playerId, npcBottoms[checkNumCollide]) && !checkCollision(playerId, npcLefts[checkNumCollide]) && !checkCollision(playerId, npcTops[checkNumCollide])) {
                  npcs[checkNumCollide].nextSibling.style.visibility = "hidden"
                }
                if (checkCollision(playerId, npcRights[checkNumCollide]) || checkCollision(playerId, npcBottoms[checkNumCollide]) || checkCollision(playerId, npcLefts[checkNumCollide]) || checkCollision(playerId, npcTops[checkNumCollide])) {
                  npcs[checkNumCollide].nextSibling.style.visibility = "visible"
                }
              }
              checkNumCollide++
            }
            checkNumCollide = 0;
            while (checkNumCollide < doorRights.length) {
              if (doorRights.length > 0) {
                if (checkCollisionWithCondition(playerId, doorRights[checkNumCollide], doorRights[checkNumCollide].parentNode.style.backgroundColor, "aqua")) {
                  xAxis += moveSpeed
                  break;
                }
              }
              checkNumCollide++
            }
            checkNumCollide = 0
            while (checkNumCollide < boxRights.length) {
              if (boxRights.length > 0) {
                if (checkCollision(playerId, boxRights[checkNumCollide])) {
                  boxX[checkNumCollide] -= 10
                  boxs[checkNumCollide].style.left = boxX[checkNumCollide] + "px"
                  if (checkCollision(boxRights[checkNumCollide].parentNode.id, buttons[checkNumCollide])) {
                    doors[checkNumCollide].style.backgroundColor = "rgba(0, 255, 255, 0.408)"
                  }
                  else {
                    doors[checkNumCollide].style.backgroundColor = "aqua"
                  }
                }
              }
              checkNumCollide++
            }
            if (!checkBoolWall == true) {
              xAxis -= moveSpeed;
              div.style.left = xAxis + 'px';
              checkNumCollide = 0;
            }
            break;
          case 'ArrowUp':
          case 'w':
            while (checkNumCollide < wallBottoms.length) {
              if (wallBottoms.length > 0) {
                if (checkCollision(playerId, wallBottoms[checkNumCollide]) == true) {
                  yAxis += moveSpeed;
                  break;
                }
                checkNumCollide++
              }
            }
            checkNumCollide = 0
            while (checkNumCollide < hazardBottoms.length) {
              if (hazardBottoms.length > 0) {
                if (checkCollision(playerId, hazardBottoms[checkNumCollide]) == true) {
                  xAxis = parseFloat(xAxisGet)
                  yAxis = parseFloat(yAxisGet)
                  div.style.left = parseFloat(xAxisGet) + "px";
                  div.style.top = parseFloat(yAxisGet) + "px";
                  break;
                }
              }
              checkNumCollide++
            }
            checkNumCollide = 0;
            while (checkNumCollide < npcBottoms.length) {
              if (npcBottoms.length > 0) {
                if (checkCollision(playerId, npcBottoms[checkNumCollide])) {
                  yAxis += moveSpeed
                  break;
                }
                if (!checkCollision(playerId, npcRights[checkNumCollide]) && !checkCollision(playerId, npcBottoms[checkNumCollide]) && !checkCollision(playerId, npcLefts[checkNumCollide]) && !checkCollision(playerId, npcTops[checkNumCollide])) {
                  npcs[checkNumCollide].nextSibling.style.visibility = "hidden"
                }
                if (checkCollision(playerId, npcRights[checkNumCollide]) || checkCollision(playerId, npcBottoms[checkNumCollide]) || checkCollision(playerId, npcLefts[checkNumCollide]) || checkCollision(playerId, npcTops[checkNumCollide])) {
                  npcs[checkNumCollide].nextSibling.style.visibility = "visible"
                }
              }
              checkNumCollide++
            }
            checkNumCollide = 0;
            while (checkNumCollide < doorBottoms.length) {
              if (doorBottoms.length > 0) {
                if (checkCollisionWithCondition(playerId, doorBottoms[checkNumCollide], doorRights[checkNumCollide].parentNode.style.backgroundColor, "aqua")) {
                  yAxis += moveSpeed
                  break;
                }
              }
              checkNumCollide++
            }
            checkNumCollide = 0
            while (checkNumCollide < boxBottoms.length) {
              if (boxBottoms.length > 0) {
                if (checkCollision(playerId, boxBottoms[checkNumCollide])) {
                  boxY[checkNumCollide] -= 10
                  boxs[checkNumCollide].style.top = boxY[checkNumCollide] + "px"
                  if (checkCollision(boxRights[checkNumCollide].parentNode.id, buttons[checkNumCollide])) {
                    doors[checkNumCollide].style.backgroundColor = "rgba(0, 255, 255, 0.408)"
                  }
                  else {
                    doors[checkNumCollide].style.backgroundColor = "aqua"
                  }
                }
              }
              checkNumCollide++
            }
            if (!checkBoolWall == true) {
              yAxis -= moveSpeed;
              div.style.top = yAxis + 'px';
              checkNumCollide = 0;
            }
            break;
          case 'ArrowRight':
          case 'd':
            while (checkNumCollide < wallLefts.length) {
              if (wallLefts.length > 0) {
                if (checkCollision(playerId, wallLefts[checkNumCollide]) == true) {
                  xAxis -= moveSpeed;
                  break;
                }
              }
              checkNumCollide++
            }
            checkNumCollide = 0
            while (checkNumCollide < hazardLefts.length) {
              if (hazardBottoms.length > 0) {
                if (checkCollision(playerId, hazardLefts[checkNumCollide]) == true) {
                  xAxis = parseFloat(xAxisGet)
                  yAxis = parseFloat(yAxisGet)
                  div.style.left = parseFloat(xAxisGet) + "px";
                  div.style.top = parseFloat(yAxisGet) + "px";
                  break;
                }
              }
              checkNumCollide++
            }
            checkNumCollide = 0
            while (checkNumCollide < npcLefts.length) {
              if (npcLefts.length > 0) {
                if (checkCollision(playerId, npcLefts[checkNumCollide])) {
                  xAxis -= moveSpeed
                  break;
                }
                if (!checkCollision(playerId, npcRights[checkNumCollide]) && !checkCollision(playerId, npcBottoms[checkNumCollide]) && !checkCollision(playerId, npcLefts[checkNumCollide]) && !checkCollision(playerId, npcTops[checkNumCollide])) {
                  npcs[checkNumCollide].nextSibling.style.visibility = "hidden"
                }
                if (checkCollision(playerId, npcRights[checkNumCollide]) || checkCollision(playerId, npcBottoms[checkNumCollide]) || checkCollision(playerId, npcLefts[checkNumCollide]) || checkCollision(playerId, npcTops[checkNumCollide])) {
                  npcs[checkNumCollide].nextSibling.style.visibility = "visible"
                }
              }
              checkNumCollide++
            }
            checkNumCollide = 0;
            while (checkNumCollide < doorLefts.length) {
              if (doorLefts.length > 0) {
                if (checkCollisionWithCondition(playerId, doorLefts[checkNumCollide], doorRights[checkNumCollide].parentNode.style.backgroundColor, "aqua")) {
                  xAxis -= moveSpeed
                  break;
                }
              }
              checkNumCollide++
            }
            checkNumCollide = 0
            while (checkNumCollide < boxLefts.length) {
              if (boxLefts.length > 0) {
                if (checkCollision(playerId, boxLefts[checkNumCollide])) {
                  boxX[checkNumCollide] += 10
                  boxs[checkNumCollide].style.left = boxX[checkNumCollide] + "px"
                  if (checkCollision(boxRights[checkNumCollide].parentNode.id, buttons[checkNumCollide])) {
                    doors[checkNumCollide].style.backgroundColor = "rgba(0, 255, 255, 0.408)"
                  }
                  else {
                    doors[checkNumCollide].style.backgroundColor = "aqua"
                  }
                }
              }
              checkNumCollide++
            }
            if (!checkBoolWall == true) {
              xAxis += moveSpeed;
              div.style.left = xAxis + 'px';
              checkNumCollide = 0;
            }
            break;
          case 'ArrowDown':
          case 's':
            while (checkNumCollide < wallTops.length) {
              if (wallTops.length > 0) {
                if (checkCollision(playerId, wallTops[checkNumCollide]) == true) {
                  yAxis -= moveSpeed;
                  break;
                }
                checkNumCollide++
              }
            }
            checkNumCollide = 0
            while (checkNumCollide < hazardTops.length) {
              if (hazardBottoms.length > 0) {
                if (checkCollision(playerId, hazardTops[checkNumCollide]) == true) {
                  xAxis = parseFloat(xAxisGet)
                  yAxis = parseFloat(yAxisGet)
                  div.style.left = parseFloat(xAxisGet) + "px";
                  div.style.top = parseFloat(yAxisGet) + "px";
                  break;
                }
              }
              checkNumCollide++
            }
            checkNumCollide = 0
            while (checkNumCollide < npcTops.length) {
              if (npcTops.length > 0) {
                if (checkCollision(playerId, npcTops[checkNumCollide])) {
                  yAxis -= moveSpeed
                  break;
                }
                if (!checkCollision(playerId, npcRights[checkNumCollide]) && !checkCollision(playerId, npcBottoms[checkNumCollide]) && !checkCollision(playerId, npcLefts[checkNumCollide]) && !checkCollision(playerId, npcTops[checkNumCollide])) {
                  npcs[checkNumCollide].nextSibling.style.visibility = "hidden"
                }
                if (checkCollision(playerId, npcRights[checkNumCollide]) || checkCollision(playerId, npcBottoms[checkNumCollide]) || checkCollision(playerId, npcLefts[checkNumCollide]) || checkCollision(playerId, npcTops[checkNumCollide])) {
                  npcs[checkNumCollide].nextSibling.style.visibility = "visible"
                }
              }
              checkNumCollide++
            }
            checkNumCollide = 0;
            while (checkNumCollide < doorTops.length) {
              if (doorTops.length > 0) {
                if (checkCollisionWithCondition(playerId, doorTops[checkNumCollide], doorTops[checkNumCollide].parentNode.style.backgroundColor, "aqua")) {
                  yAxis -= moveSpeed
                  break;
                }
              }
              checkNumCollide++
            }
            checkNumCollide = 0
            while (checkNumCollide < boxTops.length) {
              if (boxTops.length > 0) {
                if (checkCollision(playerId, boxTops[checkNumCollide])) {
                  boxY[checkNumCollide] += 10
                  boxs[checkNumCollide].style.top = boxY[checkNumCollide] + "px"
                  if (checkCollision(boxTops[checkNumCollide].parentNode.id, buttons[checkNumCollide])) {
                    doors[checkNumCollide].style.backgroundColor = "rgba(0, 255, 255, 0.408)"
                  }
                  else {
                    doors[checkNumCollide].style.backgroundColor = "aqua"
                  }
                }
              }
              checkNumCollide++
            }
            yAxis += moveSpeed;
            div.style.top = yAxis + 'px';
            checkNumCollide = 0;
            break;
        }

      };
      //player movement code end
    })();
  }
}
