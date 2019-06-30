let xPos = 0;
let yPos = 0;
let xSpeed = 3;
let ySpeed = 3;
let cnv;
let looping;
let alarm = new Audio('audio/alarm.mp3');
alarm.type = "audio/mp3";
let brokenWords = [];
let trigger = document.getElementById("trigger");
let skel = document.getElementById("floatingS");
let breaking = document.getElementById("breaking");
let breakL = false;
let times = 0;
let countTime = 45;
let countDown;
let contentIdx = 1;
let pointX = 80;
let pointY = 180;
let textElement1;
let textElement2;
let textElement3;

document.body.style.opacity = 0.9;
let x = setInterval(function() {
  countTime -= 1;
  if (countTime <= 0) {
  clearInterval(x);};}, 1000);

function setup() {
  cnv = createCanvas(windowWidth, windowHeight);
  cnv.id("brokenPage");

  countDown = createDiv("");
  countDown.id("countDown");

  textElement1 = createP("One in every three minutes spent online is devoted to me, so exhausting.").hide();
  textElement1.class("textElement");

  textElement2 = createP("Over half of you are ‘Brand Followers’, what’s the point?!").hide();
  textElement2.class("textElement");

  textElement3 = createP("News and entertainment are big reasons for using me.").hide();
  textElement3.class("textElement");

  textElement4 = createP("No digital audience can’t be reached. Am I powerful??? Haha.").hide();
  textElement4.class("textElement");

  strokeWeight(2);
}

function draw() {
  countDown.html(countTime);
  let textElement;
  if (contentIdx === 1){
    textElement = textElement1;
  } else if (contentIdx === 2){
    textElement = textElement2;
  } else if (contentIdx === 3){
    textElement = textElement3;
  } else if (contentIdx === 4){
    textElement = textElement4;
  } else if (contentIdx >= 5){
    textElement = createP("");
    showClick();
  }
  for (let i = 0; i < brokenWords.length; i++) {
    brokenWords[i].brownian();
  }

if (breakL) {
  trigger.style.zIndex = -1;
  if (mouseIsPressed) {
    stroke(255, 0, 0);
  } else {
    stroke(random(255), random(255), random(255));
  }
line(mouseX - 15, mouseY + 15, mouseX + 15, mouseY - 15);
line(mouseX - 15, mouseY - 15, mouseX + 15, mouseY + 15);
}

if(xPos < 0 || xPos > width-200) {
  xSpeed *= -1;
}

if (yPos < 0 || yPos > height-100) {
  ySpeed *= -1;
  textElement.position(pointX,pointY);
  textElement.show();
  pointY += 110;
  contentIdx += 1;
}

if (countTime > 0){
  xPos += xSpeed;
  yPos += ySpeed;
} else if (countTime <= 0){
  xSpeed = 0;
  ySpeed = 0;
}

countDown.position(xPos, yPos);
}

function breakWords() {
  if (alarm.currentTime != 0) {
    alarm.currentTime = 0;
  }
  alarm.loop = false;
  alarm.play();
  times += 1;
  looping = setInterval(function(){playTimes();}, 6000);
  breakL = true;
}

function playTimes() {
  alarm.play();
  times += 1;
  if (times >= 5){
    alarm.pause();
    clearInterval(looping);
  }
}

function showClick() {
  if (breaking.style.opacity == 0){
    breaking.style.opacity = 1;
  } else {
    breaking.style.opacity = 0;
  }
  if (trigger.style.opacity == 0){
    trigger.style.opacity = 1;
  } else {
    trigger.style.opacity = 0;
  }
  setTimeout(function(){showClick();},1000);
}
