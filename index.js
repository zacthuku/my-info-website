
document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll(".nav-links a");

    links.forEach(link => {
        link.addEventListener("click", function (event) {
           
            links.forEach(l => l.classList.remove("active"));

           
            this.classList.add("active");
        });
    });
});