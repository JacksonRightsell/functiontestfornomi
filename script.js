console.log("Website loads");
document.addEventListener("DOMContentLoaded", () => {
    const toggles = document.querySelectorAll(".dropdown > a");

    toggles.forEach(toggle => {
        toggle.addEventListener("click", (e) => {
            // Only activate toggle if screen is mobile
            if (window.innerWidth <= 768) {
                e.preventDefault(); // prevent navigation

                const parent = toggle.parentElement;

                // Optionally collapse other open menus
                const otherDropdowns = document.querySelectorAll(".dropdown.active");
                otherDropdowns.forEach(drop => {
                    if (drop !== parent) {
                        drop.classList.remove("active");
                    }
                });

                parent.classList.toggle("active");
            }
        });
    });
});
