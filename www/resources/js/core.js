function onNavbarMenuClick() {
    var navbar = document.getElementById("navbar");
    if (!navbar.classList.contains("responsive"))
        navbar.classList.add("responsive");
    else
        navbar.classList.remove("responsive");
}

function onDropdownClick() {
    document.getElementById("dropdown-content").classList.toggle("show");
}

window.onclick = function (event) {
    if (!event.target.matches(".dropdown-button")) {
        var dropdownContent = document.getElementById("dropdown-content");
        if(dropdownContent.classList.contains("show"))
            dropdownContent.classList.remove("show");
    }
}