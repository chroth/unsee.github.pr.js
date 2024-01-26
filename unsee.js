// Uncheck all review toggles so that they're no longer "viewed"
// Copy paste into the console
document.querySelectorAll(".js-reviewed-toggle [type=checkbox]:checked").forEach(c => c.click());


// Bind k and K to see and unsee
(function() {
  if (window.__bindSeeAndUnsee) return;
  window.__bindSeeAndUnsee = true;
  document.addEventListener("keyup", (e) => {
    if(e.key === 'K') {
      [...document.querySelectorAll("[name=viewed]:checked")].at(-1)?.click();
      document.querySelector("[name=viewed]:not(:checked)")?.scrollIntoView();
    } else if(e.key === 'k') {
      document.querySelector("[name=viewed]:not(:checked)")?.click();
      document.querySelector("[name=viewed]:not(:checked)")?.scrollIntoView();
    }
  });
})();
