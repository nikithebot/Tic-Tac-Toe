const icon = document.getElementById("toggle-icon");


//This is to toggle between light and dark mode...
icon.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    // Animate icon switch: fade out, change icon, fade in
    icon.style.opacity = "0";
    setTimeout(() => {
        if (document.body.classList.contains("dark-mode")) {
            icon.classList.remove("fa-moon");
            icon.classList.add("fa-sun");
        } else {
            icon.classList.remove("fa-sun");
            icon.classList.add("fa-moon");
        }
        icon.style.opacity = "1";
    }, 200); // Delay must match CSS transition time
});


