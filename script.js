const openMenu = document.getElementById("open");
const closeMenu = document.getElementById("close");
const dialog = document.getElementById("dialog");
const dialogLinks = dialog.querySelectorAll("a");

const handleOpen = (e) => {
    dialog.showModal();
}

const handleClose = (e) => {
    dialog.close();
}

const handleLink = (e) => {
    dialog.close();
}

openMenu.addEventListener("click", handleOpen);
closeMenu.addEventListener("click", handleClose);

dialogLinks.forEach((link) => {
    link.addEventListener("click", handleLink);
})