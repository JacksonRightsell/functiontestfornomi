console.log("Website loads");

document.addEventListener("DOMContentLoaded", () => {
    const toggles = document.querySelectorAll(".dropdown > a");

    toggles.forEach(toggle => {
        toggle.addEventListener("click", (e) => {
            // Mobile toggle only
            if (window.matchMedia("(max-width: 768px)").matches) {
                e.preventDefault();
                const parent = toggle.parentElement;

                // Close other open dropdowns
                document.querySelectorAll(".dropdown.active").forEach(drop => {
                    if (drop !== parent) drop.classList.remove("active");
                });

                // Toggle current dropdown
                parent.classList.toggle("active");
            }
        });
    });

    // Remove active classes if window resized above mobile
    window.addEventListener("resize", () => {
        if (window.innerWidth > 768) {
            document.querySelectorAll(".dropdown.active").forEach(drop => {
                drop.classList.remove("active");
            });
        }
    });
});
