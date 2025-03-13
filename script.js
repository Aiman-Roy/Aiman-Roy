/* document.addEventListener("DOMContentLoaded", function () {
    // Smooth scrolling for navbar links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 70,
                    behavior: "smooth"
                });
            }
        });
    });

    // Simple form validation
    document.querySelector("form").addEventListener("submit", function (e) {
        e.preventDefault();
        const name = document.querySelector("input[type='text']").value.trim();
        const email = document.querySelector("input[type='email']").value.trim();
        const message = document.querySelector("textarea").value.trim();

        if (name === "" || email === "" || message === "") {
            alert("Please fill in all fields.");
        } else {
            alert("Message sent successfully!");
            this.reset();
        }
    });
}); */
//Whatsapp message contact me direct
document.addEventListener("DOMContentLoaded", function () {
    document.querySelector("form").addEventListener("submit", function (e) {
        e.preventDefault();
        
        // Get form values
        const name = document.querySelector("input[type='text']").value.trim();
        const email = document.querySelector("input[type='email']").value.trim();
        const message = document.querySelector("textarea").value.trim();

        if (name === "" || email === "" || message === "") {
            alert("Please fill in all fields.");
            return;
        }

        // Format WhatsApp message
        const phoneNumber = "60184704742"; // Replace with your WhatsApp number (e.g., "60123456789" for Malaysia)
        const text = `Hello, my name is ${name}. My email is ${email}. Message: ${message}`;
        const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;

        // Open WhatsApp in new tab
        window.open(whatsappURL, "_blank");
    });
});

//Scroll to top button
/* document.addEventListener("DOMContentLoaded", function () {
    const scrollToTopBtn = document.getElementById("scrollToTop");
    
    window.addEventListener("scroll", function () {
        if (window.scrollY > 300) {
            scrollToTopBtn.style.display = "flex";
        } else {
            scrollToTopBtn.style.display = "none";
        }
    });

    scrollToTopBtn.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});



document.addEventListener("DOMContentLoaded", function () {
    const scrollToTopBtn = document.getElementById("scrollToTop");
    
    window.addEventListener("scroll", function () {
        if (window.scrollY > 300) {
            scrollToTopBtn.style.display = "flex";
        } else {
            scrollToTopBtn.style.display = "none";
        }
    });

    scrollToTopBtn.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}); */


//description read more button
document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".read-more");

    buttons.forEach(button => {
        button.addEventListener("click", function () {
            const cardBody = this.parentElement;
            const shortText = cardBody.querySelector(".short-text");
            const fullText = cardBody.querySelector(".full-text");

            if (fullText.classList.contains("d-none")) {
                fullText.classList.remove("d-none");
                shortText.classList.add("d-none");
                this.textContent = "Read Less";
            } else {
                fullText.classList.add("d-none");
                shortText.classList.remove("d-none");
                this.textContent = "Read More";
            }
        });
    });
});

//full page scrolling
/* document.addEventListener("wheel", function(event) {
    event.preventDefault();
    let sections = document.querySelectorAll(".full-page");
    let currentScroll = window.scrollY;
    let viewportHeight = window.innerHeight;
    let nextSection;

    if (event.deltaY > 0) {
        nextSection = [...sections].find(sec => sec.offsetTop > currentScroll);
    } else {
        nextSection = [...sections].reverse().find(sec => sec.offsetTop < currentScroll);
    }

    if (nextSection) {
        window.scrollTo({
            top: nextSection.offsetTop,
            behavior: "smooth"
        });
    }
}, { passive: false }); */


let scrolling = false;
document.addEventListener("wheel", function(event) {
    if (scrolling) return; // Prevent multiple triggers
    scrolling = true;
    
    let sections = document.querySelectorAll(".full-page");
    let currentScroll = window.scrollY;
    let viewportHeight = window.innerHeight;
    let nextSection;

    if (event.deltaY > 0) {
        // Scroll down
        nextSection = [...sections].find(sec => sec.offsetTop > currentScroll);
    } else {
        // Scroll up
        nextSection = [...sections].reverse().find(sec => sec.offsetTop < currentScroll);
    }

    if (nextSection) {
        window.scrollTo({
            top: nextSection.offsetTop,
            behavior: "smooth"
        });
        setTimeout(() => (scrolling = false), 800); // Delay to prevent spam scrolling
    } else {
        scrolling = false;
    }
}, { passive: false });

