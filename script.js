/* START EXPERIENCE (MUSIC FIXED) */
function startExperience() {

  let m1 = document.getElementById("music1");

  m1.volume = 0.4;

  m1.play().then(()=>{
    console.log("music started");
  }).catch(()=>{
    alert("Tap again if music didn’t start 💖");
  });

  window.location = "chat.html";
}


/* CHAT FLOW WITH TYPING */
function startChat() {

  let messages = [
    "Hey Bhaggu 👀",
    "Happy Birthday 💖",
    "I could've sent a normal message...",
    "But that wouldn’t feel right 😄",
    "So I made this",
    "Because you're not just random...",
    "you’re actually kinda special 😌",
    "And your smile?",
    "Yeah… that’s actually unfair 😶‍🌫️"
  ];

  let chat = document.getElementById("chat");

  let i = 0;

  function send() {

    if (i < messages.length) {

      let typing = document.createElement("div");
      typing.className = "typing";
      chat.appendChild(typing);

      setTimeout(() => {

        typing.remove();

        let msg = document.createElement("div");
        msg.className = "msg";
        msg.innerText = messages[i];

        chat.appendChild(msg);
        chat.scrollTop = chat.scrollHeight;

        i++;
        send();

      }, 1000);
    }
  }

  send();
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

  setTimeout(goLetter, 2000);
}


/* LETTER MUSIC SWITCH */
function playLetterMusic(){

  let m1 = document.getElementById("music1");
  let m2 = document.getElementById("music2");

  if(m1){
    let fade = setInterval(()=>{
      if(m1.volume > 0.05){
        m1.volume -= 0.05;
      } else {
        clearInterval(fade);
        m1.pause();
      }
    },200);
  }

  if(m2){
    m2.volume = 0;
    m2.play();

    let fadeIn = setInterval(()=>{
      if(m2.volume < 0.5){
        m2.volume += 0.05;
      } else {
        clearInterval(fadeIn);
      }
    },200);
  }
}


/* LETTER TYPING */
function startLetter(){

  playLetterMusic();

  let text = `Hey Bhaggu 💖,

I know this is not something normal...

But honestly, you’re not normal either.

You have this soft, calm, and slightly confusing vibe
that makes people stay a little longer than they planned.

And yeah…
I didn’t expect to enjoy talking to you this much.

But I do.

You make things feel easy…
and that’s rare.

I hope today gives you everything you deserve:
smiles, peace, happiness,
and those random little moments
that stay in your memory.

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
