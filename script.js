function startExperience() {
  document.getElementById("start-screen").style.display = "none";
  document.getElementById("main").classList.remove("hidden");

  let m1 = document.getElementById("music1");
  m1.volume = 0.4;
  m1.play();

  startChat();
}
function toggleMusic() {
  let m = document.getElementById("music1");

  if (m.paused) {
    m.play();
  } else {
    m.pause();
  }
}

function unlockLetter() {
  let m1 = document.getElementById("music1");
  let m2 = document.getElementById("music2");

  let fade = setInterval(() => {
    if (m1.volume > 0.05) {
      m1.volume -= 0.05;
    } else {
      clearInterval(fade);
      m1.pause();

      m2.volume = 0;
      m2.play();

      let fadeIn = setInterval(() => {
        if (m2.volume < 0.5) {
          m2.volume += 0.05;
        } else {
          clearInterval(fadeIn);
        }
      }, 200);
    }
  }, 200);

  // letter logic continues
}



/* CHAT WITH TYPING EFFECT */
let messages = [
  "Hey Bhaggu 👀",
  "Happy Birthday 💖",
  "I could've sent a normal message...",
  "But that would've been too boring 😄",
  "So I made this instead",
  "Because you're not just random...",
  "you're actually kinda special 😌",
  "And your smile?",
  "Yeah... that’s actually unfair 😶‍🌫️",
  "Not gonna say too much...",
  "Just enjoy your day 💫"
];

function startChat() {
  let chat = document.getElementById("chat");
  let i = 0;

  function sendMessage() {
    if (i < messages.length) {

      let typing = document.createElement("div");
      typing.className = "typing";
      chat.appendChild(typing);

      setTimeout(() => {
        typing.remove();

        let div = document.createElement("div");
        div.className = "message sent";
        div.innerText = messages[i];

        chat.appendChild(div);
        chat.scrollTop = chat.scrollHeight;

        i++;
        sendMessage();
      }, 1000);

    } else {
      confetti({ particleCount: 200, spread: 80 });
    }
  }

  sendMessage();
}

/* REASONS */
let reasons = [
  "Because your smile is dangerous 😶‍🌫️",
  "Because you make everything feel lighter",
  "Because your vibe is actually different",
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

Okay… this is me trying something different 😄  

I didn’t want to just send a simple message  
and disappear like everyone else.

Because honestly…  
you’re not just “another person”.

You have this calm, soft vibe  
that makes everything feel easy.

And without even trying…  
you became someone I actually enjoy talking to.

Not saying too much 😌  

But yeah…  
you’re special in your own way.

Stay like this.

Happy Birthday 💖`;

  let i = 0;

  function typeLetter() {
    if (i < message.length) {
      text.innerHTML += message.charAt(i);
      i++;
      setTimeout(typeLetter, 20);
    }
  }

  typeLetter();
}you tube.com

