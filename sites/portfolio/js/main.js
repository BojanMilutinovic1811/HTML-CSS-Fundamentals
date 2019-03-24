const menuBtn = document.getElementById("menu-btn"),
  menu = document.querySelector(".menu"),
  open = document.getElementById("open"),
  letters = document.querySelectorAll(".letters"),
  openList = document.querySelectorAll(".openList"),
  switchLights = document.querySelectorAll(".switch"),
  quoteText = document.getElementById("quote-text"),
  quoteAuthor = document.getElementById("quote-author"),
  menuItems = document.querySelectorAll(".menu-item"),
  animLetter = document.querySelector(".toAnimate");

const workButtons = Array.from(document.querySelectorAll("button"));
workButtons.forEach(button => button.addEventListener("click", displayWork));

function displayWork(e) {
  const html = document.getElementById("html-work");
  const javascript = document.getElementById("javascript-work");
  const react = document.getElementById("react-work");
  switch (e.target.id) {
    case "html":
      javascript.style.display = "none";
      html.style.display = "flex";
      break;
    case "javascript":
      html.style.display = "none";
      javascript.style.display = "flex";

      break;
    default:
      javascript.style.display = "none";
      html.style.display = "none";
      react.style.display = "none";
  }
}

let showMenu = false,
  myWork = "html",
  lightsInterval = 700,
  dropDelay = lightsInterval * letters.length + 300;

const quotes = [
  {
    quote:
      "Possession make you rich? I don't have that type of richness. My richness is Life, forever.",
    author: "Bob Marley"
  },
  {
    quote:
      "Do you think that I count the days? There is only one day left, always starting over. It is given to us at dawn and taken away from us at dusk.",
    author: "Jean-Paul Sartre"
  },
  {
    quote:
      "Alice: How long is forever? White Rabbit: Sometimes, just one second.",
    author: "Lewis Carroll"
  },
  {
    quote:
      "There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle.",
    author: "Albert Einstein"
  },
  {
    quote:
      "Some of us think holding on makes us strong but sometimes it is letting go.",
    author: "Herman Hesse"
  },
  {
    quote:
      "And those who were seen dancing were thought to be insane by those who could not hear the music.",
    author: "Friedrich Nietzsche"
  },
  {
    quote:
      "I don’t care that they stole my idea. I care that they don’t have any of their own.",
    author: "Nikola Tesla"
  },
  {
    quote:
      "Talent hits a target no one else can hit; Genius hits a target no one else can see.",
    author: "Arthur Schopenhauer"
  },
  {
    quote:
      "I'm not in this world to live up to your expetations and you're not in this world to live up to mine.",
    author: "Bruce Lee"
  },
  {
    quote:
      "Right or wrong, it's very pleasant to break something from time to time.",
    author: "Fyodor Dostoevsky"
  },
  {
    quote:
      "There are people we laugh at because they can’t see the most obvious things about themselves. Well, those people are us!",
    author: "Ezra Bayda"
  }
];

// transform menu button on click and show the menu

menuBtn.addEventListener("click", transformBtn);

//menu items close menu on click

menuItems.forEach(item => {
  item.addEventListener("click", closeMenu);
});

// drop open element on main page

document.addEventListener("DOMContentLoaded", dropOpen);

//functions

function transformBtn() {
  if (!showMenu) {
    menuBtn.classList.add("btn-close");
    menu.classList.add("menu-show");
    let quoteNum = Math.floor(Math.random() * quotes.length);
    quoteText.textContent = quotes[quoteNum].quote;
    quoteAuthor.textContent = quotes[quoteNum].author;
    showMenu = true;
  } else {
    closeMenu();
  }
}

function closeMenu() {
  menuBtn.classList.remove("btn-close");
  menu.classList.remove("menu-show");
  showMenu = false;
}

function dropOpen() {
  counterClass();
  setTimeout(() => {
    openList.forEach(li => li.classList.add("drop-li"));
    open.classList.add("drop");
    // animLetter.classList.add('turn-off')
    // switchLights.forEach(element => element.classList.add('turn-off'))
  }, dropDelay);
}

function counterClass() {
  let counter = 0;
  let interval = setInterval(() => {
    if (counter < letters.length) {
      letters[counter].classList.add("text-shadow");
      counter++;
    } else {
      clearInterval(interval);
    }
  }, lightsInterval);
}

// particles js

particlesJS.load("particles-js", "particles.json", function() {});
