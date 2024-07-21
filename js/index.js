gsap.from(".hero h1", { duration: 2, opacity: 0, y: -50 });
gsap.from(".hero p", { duration: 2, opacity: 0, y: 50, delay: 1 });
gsap.from(".hero .profession", {
    duration: 2,
    opacity: 0,
    y: 50,
    delay: 2,
});

particlesJS("particles-js", {
    particles: {
        number: {
            value: 100,
            density: {
                enable: true,
                value_area: 800,
            },
        },
        color: {
            value: "#ffffff",
        },
        shape: {
            type: "circle",
            stroke: {
                width: 0,
                color: "#000000",
            },
            polygon: {
                nb_sides: 5,
            },
            image: {
                src: "img/github.svg",
                width: 100,
                height: 100,
            },
        },
        opacity: {
            value: 0.5,
            random: false,
            anim: {
                enable: false,
                speed: 1,
                opacity_min: 0.1,
                sync: false,
            },
        },
        size: {
            value: 3,
            random: true,
            anim: {
                enable: false,
                speed: 40,
                size_min: 0.1,
                sync: false,
            },
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: "#ffffff",
            opacity: 0.4,
            width: 1,
        },
        move: {
            enable: true,
            speed: 6,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200,
            },
        },
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: {
                enable: true,
                mode: "repulse",
            },
            onclick: {
                enable: true,
                mode: "push",
            },
            resize: true,
        },
        modes: {
            grab: {
                distance: 400,
                line_linked: {
                    opacity: 1,
                },
            },
            bubble: {
                distance: 400,
                size: 40,
                duration: 2,
                opacity: 8,
                speed: 3,
            },
            repulse: {
                distance: 200,
                duration: 0.4,
            },
            push: {
                particles_nb: 4,
            },
            remove: {
                particles_nb: 2,
            },
        },
    },
    retina_detect: true,
});


document.addEventListener('DOMContentLoaded', function () {
    // Function to clear form fields
    function clearFormFields() {
        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
        document.getElementById('message').value = '';
    }

    // Clear fields when page loads
    clearFormFields();

    // Clear fields when page becomes visible again
    document.addEventListener('visibilitychange', function () {
        if (!document.hidden) {
            clearFormFields();
        }
    });

    // Optional: Clear fields on form submission
    document.getElementById('contactForm').addEventListener('submit', function () {
        // Use setTimeout to clear fields after form submission
        setTimeout(clearFormFields, 100);
    });
});


// Smooth scroll to top
// Back to top button
$(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
        $('.back-to-top').fadeIn('slow');
    } else {
        $('.back-to-top').fadeOut('slow');
    }
});

$('.back-to-top').click(function (event) {
    event.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, 800);
    return false;
});
