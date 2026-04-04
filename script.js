/* SAVE MUSIC TIME */
function saveMusicTime() {
  let music = document.getElementById("music");
  if (music) {
    sessionStorage.setItem("musicTime", music.currentTime);
  }
}

/* GLOBAL MUSIC CONTROL */
function playMusic() {
  let music = document.getElementById("music");

  if (!music) return;

  let savedTime = sessionStorage.getItem("musicTime");

  if (savedTime) {
    music.currentTime = savedTime;
  }

  music.volume = 0.4;

  music.play().catch(()=>{});

  // keep updating time
  setInterval(() => {
    saveMusicTime();
  }, 500);
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
function goMemory(){ saveMusicTime(); window.location="memory.html"; }
function goCake(){ saveMusicTime(); window.location="cake.html"; }
function goHome(){ saveMusicTime(); window.location="index.html"; }

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

I know this is a bit different…

But you’re not random/someone I wanted to wish in a “normal” way.

Because honestly…
you’re not normal.
you're special...

There’s something about you,
your vibe, your calmness,
your talking way,
the way you make things feel easy…

It stays.

You don’t even try,
but you leave an impact.

And your smile?
Yeah… still unfair 😌

Today isn’t just your birthday.

It’s a reminder that someone like you exists,
and that itself makes the world a little better.

I pray for you…

That your heart always stays light,
even on heavy days.

That you always find peace,
even when life gets confusing.

That every dream you quietly hold,
finds its way to reality.

That Allah protects you,
guides you,
and fills your life with barakah and happiness 🤍

And selfishly…

I just hope you stay exactly like this.

Because this version of you?
It’s rare.

And yeah…

I’m really glad I got to know you 🌸

Happy Birthday Bhaggu 💖

And the final thing 
If You like it 
then remmember me in Your Prayers....`;

  let el = document.getElementById("letterText");
  let i = 0;

  function type(){
    if(i < text.length){
      el.innerHTML += text[i];
      i++;
      setTimeout(type, 18);
    } else {
  el.classList.add("show");

  setTimeout(() => {
    alert("One more thing… you really matter 💖");
  }, 2000);
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
