gsap.registerPlugin(ScrollTrigger);

const textEl = document.querySelector(".about-bio__text");
if (!textEl) console.warn("Missing .about-bio__text");

const raw = textEl.textContent.trim();
textEl.textContent = "";

// split into words (keeps spaces)
const words = raw.split(" ");
words.forEach((w, i) => {
  const span = document.createElement("span");
  span.className = "word";
  span.textContent = w;
  textEl.appendChild(span);
  if (i !== words.length - 1) textEl.appendChild(document.createTextNode(" "));
});

const wordEls = textEl.querySelectorAll(".word");

// animate words to white as you scroll through the about section
gsap.to(wordEls, {
  color: "rgba(255,255,255,1)",
  ease: "none",
  stagger: { each: 0.06 },
  scrollTrigger: {
    trigger: "#about",
    start: "top 70%",
    end: "top 10%",
    scrub: true,
  },
});
