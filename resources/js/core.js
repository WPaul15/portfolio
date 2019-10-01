function onNavbarMenuClick() {
    var navbar = document.getElementById("navbar");
    if (!navbar.classList.contains("responsive"))
        navbar.classList.add("responsive");
    else
        navbar.classList.remove("responsive");
}