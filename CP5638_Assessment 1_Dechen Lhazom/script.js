/* Mobile Menu */
function openMenu() {
    document.getElementById("side-menu").classList.add("open");
    document.getElementById("overlay").classList.add("show");
}

function closeMenu() {
    document.getElementById("side-menu").classList.remove("open");
    document.getElementById("overlay").classList.remove("show");
}


document.addEventListener("DOMContentLoaded", function () {

    /* Booking Form Elements */
    const serviceSelect = document.getElementById("service");
    const otherBox = document.getElementById("other-reason-box");
    const form = document.getElementById("bookingForm");

    /* Show the "other" text box only when needed */
    if (serviceSelect) {
        serviceSelect.addEventListener("change", function () {
            if (serviceSelect.value === "other") {
                otherBox.style.display = "block";
            } else {
                otherBox.style.display = "none";
                otherBox.value = "";
            }
        });
    }

    /* Booking Form Validation */
    if (form) {
        form.addEventListener("submit", function (e) {

            const first = document.getElementById("firstName").value.trim();
            const email = document.getElementById("email").value.trim();
            const phone = document.getElementById("mobile").value.trim();
            const service = serviceSelect.value;

            // Basic required validation
            if (!first || !email || !phone) {
                e.preventDefault();
                alert("Please fill in all required fields.");
                return;
            }

            // Email validation
            if (!email.includes("@") || !email.includes(".")) {
                e.preventDefault();
                alert("Please enter a valid email address.");
                return;
            }

            // Phone validation (numbers only but allows + and spaces)
            const cleanedPhone = phone.replace(/\s+/g, '').replace(/^\+/, "");
            if (!/^\d+$/.test(cleanedPhone)) {
                e.preventDefault();
                alert("Phone number must contain digits only.");
                return;
            }

            // Validate "Other" service
            if (service === "other" && otherBox.value.trim() === "") {
                e.preventDefault();
                alert("Please specify your service.");
                return;
            }

            // allow submission normally
        });
    }
});
