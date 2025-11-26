// MOBILE MENU
function openMenu() {
    document.getElementById("side-menu").classList.add("open");
    document.getElementById("overlay").classList.add("show");
}

function closeMenu() {
    document.getElementById("side-menu").classList.remove("open");
    document.getElementById("overlay").classList.remove("show");
}

// EVERYTHING else runs AFTER DOM loads
document.addEventListener("DOMContentLoaded", function () {

    /* ---------------------------------
       1) SERVICE PAGE – Tech Toggle
    ----------------------------------*/
    document.querySelectorAll('.new-tech-item').forEach(item => {
        item.addEventListener('click', () => {

            document.querySelectorAll('.new-tech-item').forEach(other => {
                if (other !== item) {
                    other.classList.remove('active');
                    other.querySelector('.tech-info').style.maxHeight = null;
                }
            });

            item.classList.toggle('active');
            let info = item.querySelector('.tech-info');

            if (item.classList.contains('active')) {
                info.style.maxHeight = info.scrollHeight + "px";
            } else {
                info.style.maxHeight = null;
            }
        });
    });


   

    /* ---------------------------------
       3) BOOKING FORM – “Other” box toggle
    ----------------------------------*/
    const serviceSelect = document.getElementById("service");
    const otherBox = document.getElementById("other-reason-box");
    const form = document.getElementById("bookingForm");

    if (serviceSelect) {
        serviceSelect.addEventListener("change", function () {
            otherBox.style.display = serviceSelect.value === "other" ? "block" : "none";
        });
    }

    /* ---------------------------------
       4) BOOKING FORM – Validation
    ----------------------------------*/
    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();

            let first = document.getElementById("firstName").value.trim();
            let email = document.getElementById("email").value.trim();
            let phone = document.getElementById("mobile").value.trim();

            if (first === "" || email === "" || phone === "") {
                alert("Please fill in all required fields.");
                return;
            }

            if (!email.includes("@")) {
                alert("Please enter a valid email address.");
                return;
            }

            if (isNaN(phone) || phone.length < 8) {
                alert("Mobile number must be numbers only.");
                return;
            }

            alert("Your booking request has been sent! We will contact you soon.");
            form.reset();
            otherBox.style.display = "none";
        });
    }

});
