/*Smooth scroll to a view when a nav link is selected and is on that same page*/
export function scrollToView(element) {
  document.getElementById(element).scrollIntoView({
    behavior: "smooth",
  });
}
