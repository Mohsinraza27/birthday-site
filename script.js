/* COUNTDOWN */
let targetDate = new Date("April 6, 2026 00:00:00").getTime();

let countdown = setInterval(() => {

  let now = new Date().getTime();
  let diff = targetDate - now;

  let hours = Math.floor((diff % (1000*60*60*24)) / (1000*60*60));
  let minutes = Math.floor((diff % (1000*60*60)) / (1000*60));
  let seconds = Math.floor((diff % (1000*60)) / 1000);

  document.getElementById("countdown").innerHTML =
    hours + "h " + minutes + "m " + seconds + "s";

  if (diff < 0) {
    clearInterval(countdown);

    document.getElementById("countdown-screen").style.display = "none";
    document.getElementById("main").classList.remove("hidden");

    startExperience();
  }

}, 1000);


/* START EXPERIENCE */
function startExperience() {

  let music = document.getElementById("music");
  music.play().catch(()=>{});

  confetti({
    particleCount: 200,
    spread: 80
  });

  new Typed("#typing", {
    strings: [
      `I was thinking...<br><br>
      just saying "Happy Birthday" would be boring.<br><br>
      So I made this 😄<br><br>
      Because you're not just random...<br>
      you're actually kind of special.<br><br>
      Like...<br>
      the checking phone again type of special 📱✨`
    ],
    typeSpeed: 35
  });
}


/* REASONS */
let reasons = [
  "Because your smile is dangerous 😶‍🌫️",
  "Because you make days less boring",
  "Because your vibe is different",
  "Because talking to you feels easy",
  "Because you're unintentionally funny 😄",
  "Because you're Bhaggu 😌"
];

let r = 0;

function showReason() {
  if (r < reasons.length) {
    document.getElementById("reason").innerText = reasons[r];
    r++;

    confetti({
      particleCount: 40,
      spread: 40
    });
  }
}


/* LETTER */
function unlockLetter() {
  let box = document.getElementById("letter");
  let text = document.getElementById("letterText");

  box.classList.remove("hidden");

  let message = `Hey Bhaggu,

I know this is a bit different 😄  

But I just wanted to do something simple…  
and a little special for you.

You're honestly someone I enjoy talking to.  
Like genuinely.

You have a calm and nice vibe  
that just makes everything feel easy.

And that’s rare.

So yeah…  
just wanted to say that today.

Happy Birthday once again 💖`;

  let i = 0;

  function typeLetter() {
    if (i < message.length) {
      text.innerHTML += message.charAt(i);
      i++;
      setTimeout(typeLetter, 25);
    }
  }

  typeLetter();

  confetti({
    particleCount: 200,
    spread: 80
  });
}
