const starsContainer = document.getElementById("stars-container");

const generateParticles = (number) => {
  for (let i = 0; i < number; i += 1) {
    const particleElement = document.createElement("div");
    particleElement.setAttribute("class", "particle");
    particleElement.style.animationDuration = `${Math.random() * 3}s`;
    starsContainer.appendChild(particleElement);
    particleElement.style.top =
      Math.random() * starsContainer.offsetHeight -
      particleElement.offsetHeight +
      "px";
    particleElement.style.left =
      Math.random() * starsContainer.offsetWidth -
      particleElement.offsetWidth +
      "px";
    const randomSize = Math.random() * 3;
    particleElement.style.width = randomSize + "px";
    particleElement.style.height = randomSize + "px";
  }
};

const rotateNavigation = () => {
  const navItems = document.querySelectorAll(".nav-item");
  for (let i = 0; i < navItems.length; i += 1) {
    navItems[i].style = `transform: rotate(${115 - 45 * (i + 1)}deg)`;
  }
};

generateParticles(250);
rotateNavigation();
