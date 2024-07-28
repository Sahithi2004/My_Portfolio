function toggleMenu() {
    const menu = document.querySelector(".menu-links")
    const icon = document.querySelector(".hamburger-icon")
    menu.classList.toggle("open") //creates a class="open" if is not present, otherwise removes the class
    icon.classList.toggle("open")
}