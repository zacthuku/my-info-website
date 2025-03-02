
document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll(".nav-links a");

    links.forEach(link => {
        link.addEventListener("click", function (event) {
            // Remove 'active' class from all links
            links.forEach(l => l.classList.remove("active"));

            // Add 'active' class to clicked link
            this.classList.add("active");
        });
    });
});