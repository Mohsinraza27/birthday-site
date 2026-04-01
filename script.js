/* 60 SECOND COUNTDOWN */
let timeLeft = 60;

let timer = setInterval(() => {
  document.getElementById("countdown").innerText = timeLeft;

  timeLeft--;

  if (timeLeft < 0) {
    clearInterval(timer);

    document.getElementById("countdown-screen").style.display = "none";
    document.getElementById("main").classList.remove("hidden");

    startChat();
  }

}, 1000);


/* CHAT FLOW */
let messages = [
  "Hey Bhaggu 👀",
  "Happy Birthday 💖",
  "Okay listen...",
  "I could've sent a normal message",
  "But that would've been boring 😄",
  "So I made this",
  "Not saying you're special or anything...",
  "but like... you kinda are 😌",
  "Also your smile?",
  "Yeah... that’s actually unfair 😶‍🌫️",
  "Anyway...",
  "Enjoy your day",
  "And don't get used to this effort 😄"
];

function startChat() {
  let chat = document.getElementById("chat");
  let i = 0;

  let music = document.getElementById("music");
  music.play().catch(()=>{});

  function sendMessage() {
    if (i < messages.length) {
      let div = document.createElement("div");
      div.className = "message sent";
      div.innerText = messages[i];

      chat.appendChild(div);
      chat.scrollTop = chat.scrollHeight;

      i++;
      setTimeout(sendMessage, 1200);
    } else {
      confetti({ particleCount: 200, spread: 80 });
    }
  }

  sendMessage();
}


/* REASONS */
let reasons = [
  "Because your smile is dangerous 😶‍🌫️",
  "Because you make days less boring",
  "Because your vibe is different",
  "Because you're unintentionally funny 😄",
  "Because you're Bhaggu 😌"
];

let r = 0;

function showReason() {
  if (r < reasons.length) {
    document.getElementById("reason").innerText = reasons[r];
    r++;
  }
}


/* LETTER */
function unlockLetter() {
  let box = document.getElementById("letter");
  let text = document.getElementById("letterText");

  box.classList.remove("hidden");

  let message = `Hey Bhaggu,

Okay… don’t get used to this 😄

I just didn’t want to be boring.

But honestly…
I do enjoy talking to you.

You’ve got this calm + confusing vibe
and I kinda like it.

Don’t overthink this 😌

Just know…
you’re a little special.

Happy Birthday 💖`;

  let i = 0;

  function typeLetter() {
    if (i < message.length) {
      text.innerHTML += message.charAt(i);
      i++;
      setTimeout(typeLetter, 25);
    }
  }

  typeLetter();
}
