gsap.registerPlugin(ScrollTrigger);

const bio = document.querySelector(".about-bio");
if (bio) {
  // Wrap every word in a span.word (keeps spaces)
  const words = bio.textContent.trim().split(/\s+/);
  bio.innerHTML = words.map((w) => `<span class="word">${w}</span>`).join(" ");

  const wordSpans = bio.querySelectorAll(".word");

  // Start muted
  gsap.set(wordSpans, { color: "rgba(255,255,255,0.22)" });

  // Turn white progressively while scrolling through About
  gsap.to(wordSpans, {
    color: "#ffffff",
    ease: "none",
    stagger: 0.03, // smaller = smoother "sweep"
    scrollTrigger: {
      trigger: ".about",
      start: "top 70%",
      end: "top 15%",
      scrub: true,
    },
  });
}
