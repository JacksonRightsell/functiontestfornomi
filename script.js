console.log("Website loads");

document.addEventListener("DOMContentLoaded", () => {

    function initMobileDropdowns() {
        const toggles = document.querySelectorAll(".dropdown > a");

        toggles.forEach(toggle => {
            // Remove existing listeners to avoid duplicates
            toggle.replaceWith(toggle.cloneNode(true));
        });

        const freshToggles = document.querySelectorAll(".dropdown > a");

        freshToggles.forEach(toggle => {
            toggle.addEventListener("click", (e) => {
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
    }

    initMobileDropdowns();

    // Remove active classes if window resized above mobile
    window.addEventListener("resize", () => {
        if (window.innerWidth > 768) {
            document.querySelectorAll(".dropdown.active").forEach(drop => {
                drop.classList.remove("active");
            });
        }
    });
});
