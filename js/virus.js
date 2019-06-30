let bodySty = document.body.style;
let attack = document.getElementById("attack");
let backBtn = document.getElementById("backBtn");

let newPop1;
let newPop2;
let newPop3;
let newPop4;
let newPop5;
let newPop6;

bodySty.backgroundColor = "#C41515";
bodySty.margin = 0;
bodySty.position = "relative";

attack.style.fontWeight = "bold";
attack.style.fontSize = 60 + "px";
attack.style.position = "absolute";
attack.style.top = 0 + "px";
attack.style.left = 10 + "px";

backBtn.style.backgroundColor = "black";
backBtn.style.color = "red";
backBtn.style.fontWeight = "bold";
backBtn.style.fontSize = 20 + "px";
backBtn.style.position = "absolute";
backBtn.style.width = 110 + "px";
backBtn.style.height = 80 + "px";
backBtn.style.left = 500 + "px";
backBtn.style.top = 150 + "px";

let popNum = 1;
let firstClick = true;
let notice = new Audio('audio/notice.mp3');
notice.type = "audio/mp3";
let btv = new Audio('audio/beethoven_mixdown.mp3');
btv.type = "audio/mp3";

backBtn.addEventListener("click",playBTV);
btv.addEventListener("ended",ending);

function playBTV() {
  if (!btv.paused) {
    btv.pause();
  }
  if (btv.currentTime != 0){
    btv.currentTime = 0;
  }
  if (firstClick) {
    if (notice.currentTime != 0) {
      notice.currentTime = 0;
    }
    notice.play();
    alert("UNABLE TO CLOSE");
    firstClick = false;
    backBtn.removeEventListener("click",playBTV);
  }
  btv.play();
  btv.addEventListener("playing", playACD);
}

function playACD() {
  setTimeout(function(){setInterval(function(){popup();},980);},2100);
}

function popup() {
  if (popNum === 1){
  newPop1 = window.open("virus_pic.html",'newPop1','height=200,width=180,left=200,top=150,resizable=yes,scrollbars=yes,toolbar=yes,menubar=no,location=no,directories=no,status=yes');
  popNum += 1;
} else if (popNum === 2) {
  newPop2 = window.open("virus_pic.html",'newPop2','height=400,width=680,left=300,top=250,resizable=yes,scrollbars=yes,toolbar=yes,menubar=no,location=no,directories=no,status=yes');
  popNum += 1;
}
setTimeout(function(){setInterval(function(){popup2();},650);}, 960);
}

function popup2() {
  if (popNum === 3){
  newPop3 = window.open("virus_pic.html",'newPop3','height=100,width=180,left=400,top=200,resizable=yes,scrollbars=yes,toolbar=yes,menubar=no,location=no,directories=no,status=yes');
  popNum += 1;
} else if (popNum === 4) {
  newPop4 = window.open("virus_pic.html",'newPop4','height=420,width=380,left=800,top=500,resizable=yes,scrollbars=yes,toolbar=yes,menubar=no,location=no,directories=no,status=yes');
  popNum += 1;
} else if (popNum === 5) {
  newPop5 = window.open("virus_pic.html",'newPop5','height=150,width=180,left=200,top=800,resizable=yes,scrollbars=yes,toolbar=yes,menubar=no,location=no,directories=no,status=yes');
  popNum += 1;
} else if (popNum === 6) {
  newPop6 = window.open("virusCanvas.html",'newPop6','left=0,top=0,resizable=yes,scrollbars=yes,toolbar=yes,menubar=no,location=no,directories=no,status=yes');
  popNum += 1;
}
setTimeout(function() {closeWindows();}, 2000);
}

function closeWindows() {
  newPop1.close();
  newPop2.close();
  newPop3.close();
  newPop4.close();
  newPop5.close();
}

function ending() {
  newPop6.close()
  setTimeout(function() {
    open(location, '_self').close();
  }, 100);
}
