// Uncheck all review toggles so that they're no longer "viewed"
// Copy paste into the console
document.querySelectorAll(".js-reviewed-toggle [type=checkbox]:checked").forEach(c => c.click());
