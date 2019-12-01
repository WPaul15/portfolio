var copyright = document.getElementById("copyright");
var year = new Date().getFullYear();

if (year !== 2019)
	copyright.innerHTML = "&copy;2019&ndash;" + year.toString() + " Willem Paul";
else
	copyright.innerHTML = "&copy;2019 Willem Paul";


function onNavbarMenuClick() {
	var navbar = document.getElementById("navbar");

	if (!navbar.classList.contains("responsive"))
		navbar.classList.add("responsive");
	else
		navbar.classList.remove("responsive");
}

function onCollapsibleItemClick(element) {
	var collapsibleItems = document.getElementsByClassName("collapsible-item");

	for (let i = 0; i < collapsibleItems.length; i++) {
		const item = collapsibleItems[i];
		if (item != element && item.classList.contains("expanded"))
			item.classList.remove("expanded");
	}

	if (!element.classList.contains("expanded"))
		element.classList.add("expanded");
	else
		element.classList.remove("expanded");
}