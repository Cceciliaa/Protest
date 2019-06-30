let pic;
let upBtn = document.getElementById("upBtn");
let searchIconCtn = document.getElementById("searchIcon");
let show = false;
let drawText = false;
let scrollAlert = true;
let notice = new Audio('audio/notice.mp3');
notice.type = "audio/mp3"
let imgAry = ['image/brandsPo.png', 'image/ootdTemp.jpg', 'image/socialMB.png']
let imgDia = 200;
let popUpWindow;
let popped = false;
let subscribe1 = false;
let subscribe2 = false;
let subscribe3 = false;
let bgDiv = document.getElementById("bgDiv");
let stMov = document.getElementById("stMov");
let endDiv = document.getElementById("endDiv");
let endingPic = document.getElementById("endingPic");
let comment1 = document.getElementById("comment1");
let comment2 = document.getElementById("comment2");
let comment3 = document.getElementById("comment3");
let fvr = document.getElementsByClassName("fvr");
let like = document.getElementsByClassName("like");
let isfvr1 = false;
let isfvr2 = false;
let isfvr3 = false;
let isliked1 = false;
let isliked2 = false;
let isliked3 = false;

comment1.addEventListener("mouseover", function(){showCmBar(0)});
comment2.addEventListener("mouseover", function(){showCmBar(1)});
comment3.addEventListener("mouseover", function(){showCmBar(2)});
comment1.addEventListener("mouseout", function(){hideCmBar(0)});
comment2.addEventListener("mouseout", function(){hideCmBar(1)});
comment3.addEventListener("mouseout", function(){hideCmBar(2)});
upBtn.addEventListener("click", backup);
searchIcon.addEventListener("click", submitSearch);

// let ini = alert("Click the screen to log in");
//
// function playStv() {
//   if (stMov.currentTime != 0) {
//     stMov.currentTime = 0;
//   }
//   stMov.play();
// }

document.body.addEventListener("scroll", bgnAlert);

// function start() {
//   // document.body.removeChild(bgDiv);
//   document.body.style.overflow = "scroll";
//   document.body.addEventListener("scroll", bgnAlert);
// }

function bgnAlert() {
  if (scrollAlert){
  playNotice();
  alert("Dear user, don't be scared. I'm just your social media platform on which you spend more than 12 hours every single day. I've been watching you for a long time, and I have to say my feelings out today...");
  scrollAlert = false;
}
}

function backup() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function trigger() {
  // ending()
  upBtn.removeEventListener("click", backup);
  searchIcon.removeEventListener("click", submitSearch);
  while (show != true){
    playNotice();
    show = confirm("Loading fail...");
  }
  if (show){
  notice.pause();
  notice.currentTime = 0;
  document.body.style.overflow = "hidden"; window.open('virus_audio.html','popUpWindow','height=300,width=660,left=100,top=100,resizable=yes,scrollbars=yes,toolbar=yes,menubar=no,location=no,directories=no,status=yes');
  popped = true;
  setTimeout(() => ending(), 40000);
  };
}


function playNotice() {
  notice.loop = false;
  if(!notice.paused) {
    notice.pause();
  }
  if (notice.currentTime != 0) {
    notice.currentTime = 0;
  }
  let playNotice = notice.play();
  if (playNotice !== null){
  playNotice.catch(() => { notice.play(); })
  }
}

function showSearchBar() {
  document.getElementById("searchBar").style.opacity = 1;
}

function hideSearchBar() {
  document.getElementById("searchBar").style.opacity = 0;
}

function submitSearch() {
  playNotice();
  alert("Content not found!")
}

function onFavorite(i) {
  playNotice();
  if (i == 1) {
    if (isfvr1 == false) {
    isfvr1 = confirm("Ohh man! Do you think she is pretty???");
    if (isfvr1) {
      fvr[0].style.backgroundColor = "#FE8957";
    }
  } else if (isfvr1) {
    fvr[0].style.backgroundColor = "white";
    isfvr1 = false;
  }
}
  if (i == 2) {
    if (isfvr2 == false) {
    isfvr2 = confirm("Do something good please! Keep this disgusting pizza picture to yourself!");
    if (isfvr2) {
      fvr[1].style.backgroundColor = "#FE8957";
    }
  } else if (isfvr2) {
    fvr[1].style.backgroundColor = "white";
    isfvr2 = false;
  }
}
  if (i == 3) {
    if (isfvr3 == false) {
    isfvr3 = confirm("Don't you think the blogger taking this pic is insane?");
    if (isfvr3) {
      fvr[2].style.backgroundColor = "#FE8957";
    }
  } else if (isfvr3) {
    fvr[2].style.backgroundColor = "white";
    isfvr3 = false;
  }
}
}

function onLike(i) {
  playNotice();
  if (i == 1) {
    if (isliked1 == false) {
  isliked1 = confirm("Congratulations! You just became one of the thousands that liked this post. But I really can't see anything meaningful in it...");
  if (isliked1) {
    like[0].style.backgroundColor = "#FE8957";
  };
} else if (isliked1) {
  like[0].style.backgroundColor = "white";
  isliked1 = false;
};
}
if (i == 2) {
  if (isliked2 == false) {
  isliked2 = confirm("Eww... FOR REAL? THIS PIZZA???");
  if (isliked2) {
    like[1].style.backgroundColor = "#FE8957";
  }
} else if (isliked2) {
  like[1].style.backgroundColor = "white";
  isliked2 = false;
}
}
if (i == 3) {
  if (isliked3 == false) {
  isliked3 = confirm("I wonder if the cake burned the house...");
  if (isliked3) {
    like[2].style.backgroundColor = "#FE8957";
  }
} else if (isliked3) {
  like[2].style.backgroundColor = "white";
  isliked3 = false;
}
};
}

function showCmBar(i) {
  document.getElementsByClassName("inputBar")[i].style.opacity = 1;
}

function hideCmBar(i) {
  setTimeout(function() {document.getElementsByClassName("inputBar")[i].style.opacity = 0;},2000);
}

function onComment() {
  playNotice();
  alert("OK, OK. I've recorded your comment. Satisfied??")
}

function onSubscribe(i) {
  let subscribe;
  let currentS;
  if (i === 1) {
    sub1 = document.getElementById("sub1");
    if (subscribe1 === false) {
      playNotice();
      let follow1 = confirm("Are you sure to follow these twisted posts?");
      if (follow1) {
        playNotice();
        follow1 = confirm("You still have the chance to get away from these posts! Do you still want to subscribe?")
      }
      if (follow1) {
      sub1.style.borderColor = "#EA7E1F";
      sub1.style.borderWidth = "3px";
      sub1.style.color = "#EA7E1F";
      subscribe1 = true;
    }
  } else if (subscribe1 === true) {
      sub1.style.borderColor = "grey";
      sub1.style.borderWidth = "1px";
      sub1.style.color = "black";
      subscribe1 = false;
    }
  }
  if (i === 2) {
    sub2 = document.getElementById("sub2");
    if (subscribe2 === false) {
      playNotice();
      let follow2 = confirm("Trust me, you won't learn anything about cooking from this blogger. Proceed to follow?");
      if (follow2) {
      sub2.style.borderColor = "#EA7E1F";
      sub2.style.borderWidth = "3px";
      sub2.style.color = "#EA7E1F";
      subscribe2 = true;
    }
  } else if (subscribe2 === true) {
      sub2.style.borderColor = "grey";
      sub2.style.borderWidth = "1px";
      sub2.style.color = "black";
      subscribe2 = false;
    }
  }
  if (i === 3) {
    sub3 = document.getElementById("sub3");
    if (subscribe3 === false) {
      playNotice();
      let follow3 = confirm("OMG! Are these over-exaggerated posts actually what interest you?");
      if (follow3) {
        playNotice();
        alert("OK FINE!");
      }
      if (follow3) {
      sub3.style.borderColor = "#EA7E1F";
      sub3.style.borderWidth = "3px";
      sub3.style.color = "#EA7E1F";
      subscribe3 = true;
    }
  } else if (subscribe3 === true) {
      sub3.style.borderColor = "grey";
      sub3.style.borderWidth = "1px";
      sub3.style.color = "black";
      subscribe3 = false;
    }
  }
}

function ending() {
  console.log("closed");
  endDiv.style.height = 100 + "%";
  endDiv.style.bottom = 90 + "%";
  endDiv.style.zIndex = 9999;
  endDiv.style.backgroundColor = "black";
  endDiv.style.opacity = 1;
}

function reload() {
  window.location.reload();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
