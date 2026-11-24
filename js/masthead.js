/* MacsLink — pe mobil, masthead-ul se pliază la doar rândul de aplicații
   (după câteva secunde, la primul scroll sau la primul click pe o aplicație). */
(function () {
  var mq = window.matchMedia("(max-width: 860px)");
  var m = document.querySelector(".mast");
  if (!m) return;
  var done = false;
  function collapse() {
    if (done || !mq.matches) return;
    done = true;
    m.classList.add("collapsed");
  }
  var t = setTimeout(collapse, 4500);
  window.addEventListener("scroll", collapse, { once: true, passive: true });
  m.querySelectorAll(".apps a").forEach(function (a) {
    a.addEventListener("click", collapse);
  });
  // dacă se trece pe desktop, nu lăsăm starea pliată
  mq.addEventListener && mq.addEventListener("change", function (e) {
    if (!e.matches) m.classList.remove("collapsed");
  });
})();
