/* GLOBAL MUSIC CONTROL */
function playMusic() {
  let music = document.getElementById("music");

  if (!music) return;

  let isPlaying = sessionStorage.getItem("musicPlaying");

  if (isPlaying === "true") {
    music.currentTime = 0;  // reset issue fix
    music.play().catch(()=>{});
  }
}

/* START */
function startExperience() {
  let music = document.getElementById("music");

  music.volume = 0.4;

  music.play().then(() => {
    sessionStorage.setItem("musicPlaying", "true");
    window.location = "chat.html";
  }).catch(() => {
    alert("Tap again 💖");
  });
}

/* CHAT FLOW */
function startChat() {

  let messages = [
    "Hey Bhaggu 👀",
    "Happy Birthday 💖",
    "I could’ve sent a normal message...",
    "But that would've been boring 😄",
    "So I made this",
    "Because you're not just random...",
    "you're actually kinda special 😌",
    "And your smile?",
    "Yeah… that’s actually unfair 😶‍🌫️"
  ];

  let chat = document.getElementById("chat");

  messages.forEach((msg, i) => {
    setTimeout(() => {
      let div = document.createElement("div");
      div.className = "msg";
      div.innerText = msg;
      chat.appendChild(div);

      setTimeout(() => {
        div.classList.add("show");
      }, 100);

    }, i * 1300);
  });
}

/* NAVIGATION */
function goMemory(){ window.location="memory.html"; }
function goCake(){ window.location="cake.html"; }
function goHome(){ window.location="index.html"; }

/* CAKE */
function blowCandle(){
  document.getElementById("candle").innerText = "💨";

  confetti({
    particleCount: 300,
    spread: 120
  });

  setTimeout(() => {
    window.location = "letter.html";
  }, 2000);
}

/* LETTER */
function startLetter(){

  let text = `Hey Bhaggu 💖,

Okay… this is me trying something different 😌

I didn’t want to just send a message and disappear like everyone else.

Because honestly…
you’re not just "another person".

You have this calm, soft vibe
that makes everything feel easy.

And without even trying…
you become someone people enjoy talking to.

Not saying too much 😄

But yeah…
you’re special in your own way.

And your smile?
Yeah… that’s still unfair 🌼

I hope today gives you everything:
happiness, peace, and moments you remember forever.

Stay exactly like this…

Because that’s your magic ✨

Happy Birthday Bhaggu 💖`;

  let el = document.getElementById("letterText");
  let i = 0;

  function type(){
    if(i < text.length){
      el.innerHTML += text[i];
      i++;
      setTimeout(type, 18);
    } else {
      el.classList.add("show"); // 🔥 FIX
    }
  }

  type();
}

/* SCROLL ANIMATION */
function revealOnScroll() {
  let elements = document.querySelectorAll(".msg, .photo, .letter-box");

  elements.forEach(el => {
    let position = el.getBoundingClientRect().top;
    let screenHeight = window.innerHeight;

    if (position < screenHeight - 80) {
      el.classList.add("show");
    }
  });
}

window.addEventListener("load", revealOnScroll);
window.addEventListener("scroll", revealOnScroll);
