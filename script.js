/* GLOBAL MUSIC CONTROL */
function playMusic() {
  let music = document.getElementById("music");

  if (!music) return;

  let isPlaying = localStorage.getItem("musicPlaying");

  if (isPlaying !== "true") {
    music.volume = 0.4;

    music.play().then(() => {
      localStorage.setItem("musicPlaying", "true");
    }).catch(() => {});
  }
}

/* START EXPERIENCE */
function startExperience() {
  let music = document.getElementById("music");

  music.volume = 0.4;

  music.plafunction startExperience() {
  localStorage.setItem("musicPlaying", "false");
  playMusic();
  window.location = "chat.html";
}

/* CHAT (WHATSAPP STYLE FLOW) */
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
    }, i * 1200);
  });
}


/* NAVIGATION */
function goMemory(){ window.location="memory.html"; }
function goCake(){ window.location="cake.html"; }
function goLetter(){ window.location="letter.html"; }
function goHome(){ window.location="index.html"; }


/* CAKE */
function blowCandle(){

  document.getElementById("candle").innerText = "💨";

  confetti({
    particleCount: 400,
    spread: 120
  });

  setTimeout(() => {
    window.location = "letter.html";
  }, 2000);
}


/* LETTER */
function startLetter(){

  let text = `Hey Bhaggu 💖,

I didn’t want to just send a simple message…

So I made this.

Because honestly…
you’re not just another person.

There’s something about you,
your vibe, your smile,
and the way you make everything feel easy.

It’s rare.

You have this calm energy
that makes people stay longer than they planned.

And yeah…
I might not say it a lot…

But you’re special.

I hope today gives you everything you deserve:
smiles, happiness, peace,
and those small moments that stay forever.

Stay exactly like this…

Because that’s your magic ✨

Happy Birthday Bhaggu 💖`;

  let el = document.getElementById("letterText");
  let i = 0;

  function type(){
    if(i < text.length){
      el.innerHTML += text[i];
      i++;
      setTimeout(type, 20);
    }
  }

  type();
}
