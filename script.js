const openMenu = document.getElementById("open");
const closeMenu = document.getElementById("close");
const dialog = document.getElementById("dialog");
const dialogLinks = dialog.querySelectorAll("a");

const handleOpen = (e) => {
    openMenu.ariaExpanded = true;
    dialog.showModal();
}

const handleClose = (e) => {
    openMenu.ariaExpanded = false;
    dialog.close();
}

const handleLink = (e) => {
    openMenu.ariaExpanded = false;
    dialog.close();
}

openMenu.addEventListener("click", handleOpen);
closeMenu.addEventListener("click", handleClose);

dialogLinks.forEach((link) => {
    link.addEventListener("click", handleLink);
})