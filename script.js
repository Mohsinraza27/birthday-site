let text = `I was thinking...
just saying "Happy Birthday" would be boring.

So I made this 😄

Because you're not just random...
you're actually kind of special.

Like...
the checking phone again type of special 📱✨`;

let i = 0;

function start() {
  document.getElementById("entry").style.display = "none";
  document.getElementById("main").style.display = "block";
  typeWriter();

  confetti();
}

function typeWriter() {
  if (i < text.length) {
    document.getElementById("typing").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, 40);
  }
}

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
  }
}

let playing = false;

function toggleMusic() {
  let music = document.getElementById("music");
  if (!playing) {
    music.play();
    playing = true;
  } else {
    music.pause();
    playing = false;
  }
}
