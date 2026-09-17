// =====================================
// WELCOME MESSAGE
// =====================================

const welcomeButton = document.getElementById("welcomeButton");
const welcomeMessage = document.getElementById("welcomeMessage");

if (welcomeButton && welcomeMessage) {

    welcomeButton.addEventListener("click", function () {

        welcomeMessage.textContent =
            "Welcome to the Student Learning Centre! We are here to help you learn, improve and succeed.";

    });

}


// =====================================
// IMAGE SLIDESHOW
// =====================================

const slideImage = document.getElementById("slideImage");
const slideCaption = document.getElementById("slideCaption");
const nextButton = document.getElementById("nextButton");
const previousButton = document.getElementById("previousButton");


if (slideImage && slideCaption && nextButton && previousButton) {

    const slides = [

        {
            image: "images/studies.png",
            caption: "Group Study"
        },

        {
            image: "images/computer.png",
            caption: "Computer Training"
        },

        {
            image: "images/workshop.jpg",
            caption: "Learning Workshop"
        },

        {
            image: "images/library.png",
            caption: "Study Environment"
        }

    ];


    let currentSlide = 0;


    function showSlide() {

        slideImage.src = slides[currentSlide].image;

        slideImage.alt = slides[currentSlide].caption;

        slideCaption.textContent =
            slides[currentSlide].caption;

    }


    // Show the first image
    showSlide();


    // NEXT button
    nextButton.addEventListener("click", function () {

        currentSlide++;

        if (currentSlide >= slides.length) {
            currentSlide = 0;
        }

        showSlide();

    });


    // PREVIOUS button
    previousButton.addEventListener("click", function () {

        currentSlide--;

        if (currentSlide < 0) {
            currentSlide = slides.length - 1;
        }

        showSlide();

    });

}


// =====================================
// CONTACT FORM VALIDATION
// =====================================

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();


        const name =
            document.getElementById("name").value.trim();

        const email =
            document.getElementById("email").value.trim();

        const subject =
            document.getElementById("subject").value.trim();

        const message =
            document.getElementById("message").value.trim();


        const nameError =
            document.getElementById("nameError");

        const emailError =
            document.getElementById("emailError");

        const subjectError =
            document.getElementById("subjectError");

        const messageError =
            document.getElementById("messageError");

        const formMessage =
            document.getElementById("formMessage");


        nameError.textContent = "";
        emailError.textContent = "";
        subjectError.textContent = "";
        messageError.textContent = "";
        formMessage.textContent = "";


        let valid = true;


        // Name
        if (name === "") {

            nameError.textContent =
                "Please enter your name.";

            valid = false;
        }


        // Email
        if (email === "") {

            emailError.textContent =
                "Please enter your email address.";

            valid = false;

        } else if (!email.includes("@")) {

            emailError.textContent =
                "Please enter a valid email address.";

            valid = false;
        }


        // Subject
        if (subject === "") {

            subjectError.textContent =
                "Please enter a subject.";

            valid = false;
        }


        // Message
        if (message === "") {

            messageError.textContent =
                "Please enter your message.";

            valid = false;
        }


        // Successful form
        if (valid) {

            formMessage.textContent =
                "Thank you! Your message has been received.";

            contactForm.reset();

        }

    });

}


// =====================================
// DARK / LIGHT MODE
// =====================================

const themeButton =
    document.getElementById("themeButton");


if (themeButton) {

    const savedTheme =
        localStorage.getItem("theme");


    // Restore saved theme
    if (savedTheme === "dark") {

        document.body.classList.add("dark-mode");

        themeButton.textContent = "☀️";

    } else {

        themeButton.textContent = "🌙";

    }


    // Theme button
    themeButton.addEventListener("click", function () {

        document.body.classList.toggle("dark-mode");


        if (document.body.classList.contains("dark-mode")) {

            themeButton.textContent = "☀️";

            localStorage.setItem("theme", "dark");

        } else {

            themeButton.textContent = "🌙";

            localStorage.setItem("theme", "light");

        }

    });

}
