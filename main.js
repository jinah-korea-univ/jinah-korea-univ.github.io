(function () {
  "use strict";

  // Top bar border once the page scrolls.
  var bar = document.querySelector(".topbar");
  function onScroll() { bar.classList.toggle("scrolled", window.scrollY > 8); }
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  // Gallery viewer.
  var thumbs = Array.prototype.slice.call(document.querySelectorAll(".g-item"));
  var box = document.querySelector(".lightbox");
  if (thumbs.length && box && box.showModal) {
    var img = box.querySelector(".lb-img"), count = box.querySelector(".lb-count"), cur = 0;
    function show(i) {
      cur = (i + thumbs.length) % thumbs.length;
      img.src = thumbs[cur].getAttribute("data-full") || thumbs[cur].querySelector("img").getAttribute("src");
      count.textContent = (cur + 1) + " / " + thumbs.length;
    }
    thumbs.forEach(function (b, i) { b.addEventListener("click", function () { show(i); box.showModal(); }); });
    box.querySelector(".lb-close").addEventListener("click", function () { box.close(); });
    box.querySelector(".lb-prev").addEventListener("click", function () { show(cur - 1); });
    box.querySelector(".lb-next").addEventListener("click", function () { show(cur + 1); });
    box.addEventListener("click", function (e) { if (e.target === box) box.close(); });
    box.addEventListener("keydown", function (e) {
      if (e.key === "ArrowLeft") show(cur - 1);
      if (e.key === "ArrowRight") show(cur + 1);
    });
    box.addEventListener("close", function () { thumbs[cur].focus(); });
  } else if (box) {
    // No <dialog> support: thumbnails open the image directly.
    thumbs.forEach(function (b) {
      b.addEventListener("click", function () { window.open(b.getAttribute("data-full") || b.querySelector("img").getAttribute("src"), "_blank"); });
    });
  }

  if (!("IntersectionObserver" in window)) return;

  // Highlight the section currently in view.
  var links = Array.prototype.slice.call(document.querySelectorAll(".nav a"));
  var targets = links.map(function (a) { return document.querySelector(a.getAttribute("href")); });
  var spy = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (!e.isIntersecting) return;
      links.forEach(function (a, i) { a.classList.toggle("active", targets[i] === e.target); });
    });
  }, { rootMargin: "-40% 0px -55% 0px" });
  targets.forEach(function (t) { if (t) spy.observe(t); });
})();
