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
    /* Booking Form */
    const serviceSelect = document.getElementById("service");
    const otherBox = document.getElementById("other-reason-box");
    const form = document.getElementById("bookingForm");

    if (serviceSelect) {
        serviceSelect.addEventListener("change", function () {
            otherBox.style.display = (serviceSelect.value === "other") ? "block" : "none";
        });
    }

    /* Booking Form: Validation */
    if (form) {
        form.addEventListener("submit", function (e) {

            const first = document.getElementById("firstName").value.trim();
            const email = document.getElementById("email").value.trim();
            const phone = document.getElementById("mobile").value.trim();

            if (!first || !email || !phone) {
                e.preventDefault();
                alert("Please fill in all required fields.");
                return;
            }

            if (!email.includes("@")) {
                e.preventDefault();
                alert("Please enter a valid email address.");
                return;
            }

            if (isNaN(phone)) {
                e.preventDefault();
                alert("Phone number must be numbers only.");
                return;
            }

            form.action = "booking-successful.html";
            form.method = "POST";
        });
    }
});