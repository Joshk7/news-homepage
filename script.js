const navButton = document.querySelector("nav button");
const menu = navButton.nextElementSibling;

const handleOpenMenu = (e) => {
    let expanded = e.target.getAttribute('aria-expanded') === 'true' || false;
    e.target.setAttribute('aria-expanded', !expanded);
    menu.hidden = !menu.hidden;
}

navButton.addEventListener("click", handleOpenMenu);