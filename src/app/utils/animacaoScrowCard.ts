import ScrollReveal from "scrollreveal";

export function aplicaAnimacao() {
  const slideUp1 = {
    distance: "50%",
    origin: "bottom",
    opacity: 0,
    delay: 150,
    duration: 700,
  };
  ScrollReveal().reveal(".slide-up-1", slideUp1);

  const slideUp2 = {
    distance: "50%",
    origin: "bottom",
    opacity: 0,
    delay: 300,
    duration: 700,
  };
  ScrollReveal().reveal(".slide-up-2", slideUp2);

  const slideUp3 = {
    distance: "50%",
    origin: "bottom",
    opacity: 0,
    delay: 450,
    duration: 700,
  };
  ScrollReveal().reveal(".slide-up-3", slideUp3);
}
