function showAffirmation() {
  const affirmation = [
    "You're on a mission, not a distraction. 🧭",
    "Every line of code is a vote for your future self. 💻",
    "Disciipline beats motivation. 🥋",
    "You control your focus. 🔒",
    "This grind is your gift. ",
    "You're not behind, You're building. 🎁",
    "Stay locked in. Greatness is laoding... 🧱" ,
    "1% better everyday is unstoppable. ⏳",
    "You are the SYSTEM. 🧠🦾",
    "Zero to Hero isn't a dream. It's your formula. 📈",
  ];

  const randomIndex = Math.floor(Math.random() * affirmation.length);
  const affirmationDisplay = document.getElementById("affirmation");
  affirmationDisplay.textContent = affirmations[randomIndex];
}

function toggleDarkMode() {

document.body.classList.toggle("dark-mode");
}

function startMusic() {
  const iframe =
document.getElementById("bg-music-player");
  iframe.src = iframe.src = "https://www.youtube.com/embed/i8CqSKbsJ98?autoplay=1&loop=1&playlist=i8CqSKbsJ98";
}
