const container = document.querySelector(".container");
const messages = container.querySelector(".messages");
const textContainer = container.querySelector(".text");
const userInput = textContainer.querySelector(".input input");
const sendBtn = textContainer.querySelector(".send button");
const load = container.querySelector(".load-cont");

sendBtn.onclick = () => {
  if (userInput.value != "") {
    var userText = userInput.value;
    userInput.value = "";
    sendText(userText);
    $(".messages").scrollTop($(".messages").prop("scrollHeight"));
    load.style.display = "flex";
  }
};

function text(txt, who) {
  var temp = `<div class="message ${who == 1 ? "right" : ""}">
    <div>
      <img src="C:/Users/priya/OneDrive/Pictures/Priyanshu's Logo/Priyanshu's Transparent Logo original black (2).jpg" alt="Priyanshu's Logo">
    </div>
    <div class="cont">
      <p>${txt}</p>
    </div>
  </div>`;
  $(".messages").append(temp);
  $(".messages").scrollTop($(".messages").prop("scrollHeight"));
  load.style.display = "none";
}

function sendText(args) {
  text(args, 1);
  ai(args.toLowerCase());
}

function itr(i, args) {
  for (var j = 0; j < query[i].que.length; j++) {
    if (query[i].que[j].toLowerCase().indexOf(args) > -1) {
      setTimeout(text, 1500, query[i].ans(j), 0);
      return true;
    }
  }
  return false;
}

function ai(args) {
  var i = 0;
  for (i = 0; i < query.length; i++) {
    if (itr(i, args)) {
      break;
    }
  }
  if (i === query.length) {
    setTimeout(text, 1500, "Sorry I couldn't comprehend", 0);
  }
}

function intro() {
  load.style.display = "flex";
  setTimeout(text, 1500, "Hello user!", 0);
  setTimeout(text, 2000, "I'm Chat Bot", 0);
  setTimeout(text, 4000, "What is your name?", 0);
  setTimeout(() => {
    username = prompt("My name is");
    text(`My name is ${username}`, 1);
    setTimeout(() => {
      load.style.display = "flex";
      ai("hi");
      ai("what");
    }, 1000);
  }, 5000);
}

// todo: time function
function addZero(num) {
  return num < 10 ? "0" + num : num;
}

function currentTime() {
  var time = new Date();
  var hrs = addZero(time.getHours());
  var min = addZero(time.getMinutes());
  return hrs + ":" + min;
}

userInput.addEventListener("keydown", (event) => {
  if (event.keyCode === 13) sendBtn.click();
});
