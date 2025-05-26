document.addEventListener("DOMContentLoaded", function() {
    const dropdown = document.querySelector(".dropdown");
    const menu = document.querySelector(".dropdown-menu");

    dropdown.addEventListener("mouseenter", function() {
        menu.style.display = "block";
    });

    dropdown.addEventListener("mouseleave", function() {
        menu.style.display = "none";
    });
});

function openPopup(id) {
    document.getElementById(id).style.display = "flex";
}

function closePopup(id) {
    document.getElementById(id).style.display = "none";
}
// Close dropdown when clicking outside
document.addEventListener('click', function (event) {
    let dropdowns = document.querySelectorAll('.dropdown-menu');
    dropdowns.forEach(menu => {
        if (!menu.parentElement.contains(event.target)) {
            menu.classList.remove('show');
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.querySelector(".partners-carousel");
    const partners = Array.from(carousel.children);

    setInterval(() => {
        carousel.appendChild(partners[0]); 
        partners.push(partners.shift());
    }, 2000); 

});

// Ensure pop-ups remain hidden on page load
document.addEventListener("DOMContentLoaded", function () {
    // Hide all pop-ups initially
    document.querySelectorAll(".popup").forEach((popup) => {
        popup.style.display = "none";
    });

    // Attach event listeners to buttons inside .logo-card
    document.querySelectorAll(".logo-card button").forEach((button) => {
        button.addEventListener("click", function () {
            let unit = this.innerText.toLowerCase(); // Convert button text to lowercase
            openPopup(`${unit}-popup`);
        });
    });
});

// Mobile menu functionality
document.addEventListener("DOMContentLoaded", function() {
    const mobileMenu = document.getElementById('mobile-menu');
    const nav = document.querySelector('nav ul');
    
    mobileMenu.addEventListener('click', function() {
        this.classList.toggle('active');
        nav.classList.toggle('active');
    });
    
    // Close dropdown when clicking outside
    document.addEventListener('click', function(event) {
        if (!event.target.closest('.dropdown') && !event.target.closest('#mobile-menu')) {
            document.querySelectorAll('.dropdown-menu').forEach(menu => {
                menu.style.display = 'none';
            });
        }
    });
    
    // Handle dropdown clicks on mobile
    document.querySelectorAll('.dropdown > a').forEach(item => {
        item.addEventListener('click', function(e) {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                const menu = this.nextElementSibling;
                menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
            }
        });
    });
});



// EmailJS Integration
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let isValid = true;

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    // Clear previous error messages
    document.getElementById("nameError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("messageError").textContent = "";

    // Validation
    if (name === "") {
        document.getElementById("nameError").textContent = "Name is required.";
        isValid = false;
    }
    if (email === "" || !emailPattern.test(email)) {
        document.getElementById("emailError").textContent = "Enter a valid email address.";
        isValid = false;
    }
    if (message === "") {
        document.getElementById("messageError").textContent = "Message is required.";
        isValid = false;
    }

    if (isValid) {
        const submitBtn = document.getElementById("submitBtn");
        submitBtn.disabled = true;
        submitBtn.textContent = "Sending...";

        // Send email using EmailJS
        emailjs.sendForm('service_xdwyy0o', 'template_z3g06ag', this)
            .then(() => {
                document.getElementById("successMessage").style.display = "block";
                document.getElementById("contactForm").reset();
                
                setTimeout(() => {
                    document.getElementById("successMessage").style.display = "none";
                }, 3000);
            })
            .catch((error) => {
                alert("Failed to send message. Please try again later.");
                console.error("EmailJS Error:", error);
            })
            .finally(() => {
                submitBtn.disabled = false;
                submitBtn.textContent = "Submit";
            });
    }
});

document.querySelectorAll('.popup').forEach(popup => {
    let slides = popup.querySelectorAll('.slide');
    let index = 0;

    function showSlide(n) {
        slides.forEach((slide, i) => {
            slide.classList.toggle("active", i === n);
        });
    }

    // Initialize first slide
    showSlide(index);

    let nextBtn = popup.querySelector('.next');
    let prevBtn = popup.querySelector('.prev');

    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            index = (index + 1) % slides.length;
            showSlide(index);
        });
    }

    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            index = (index - 1 + slides.length) % slides.length;
            showSlide(index);
        });
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const mobileMenu = document.getElementById("mobile-menu");
    const nav = document.querySelector("nav");

    // Toggle navigation menu
    mobileMenu.addEventListener("click", function () {
        nav.classList.toggle("active");

        // Animate hamburger to "X"
        this.classList.toggle("open");
    });

    // Handle dropdown toggle on mobile and tablet
    document.querySelectorAll(".dropdown > a").forEach(link => {
        link.addEventListener("click", function (e) {
            if (window.innerWidth <= 769) {
                e.preventDefault();
                const dropdownMenu = this.nextElementSibling;
                dropdownMenu.classList.toggle('active');
            }
        });
    });

    // Close nav and dropdown when clicking outside
    document.addEventListener("click", function (event) {
        if (!event.target.closest("nav") && !event.target.closest("#mobile-menu")) {
            nav.classList.remove("active");
            document.querySelectorAll(".dropdown-menu").forEach(menu => {
                menu.classList.remove('active');
            });
            mobileMenu.classList.remove("open");
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const objectives = document.querySelectorAll(".objective");
    const heading = document.querySelector(".our-objectives h2");
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target;
          el.classList.add("animate");
  
          const icon = el.querySelector(".objective-icon");
          if (icon) {
            icon.classList.add("animate");
          }
  
          observer.unobserve(el); // run only once per element
        }
      });
    }, {
      threshold: 0.4, // trigger when 40% of the element is visible
      rootMargin: "0px 0px -50px 0px" // slightly before full visibility
    });
  
    if (heading) observer.observe(heading);
    objectives.forEach((obj) => observer.observe(obj));
  });

  document.addEventListener("DOMContentLoaded", () => {
    const elementsToAnimate = document.querySelectorAll(".animate-on-scroll");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            } else {
                entry.target.classList.remove("visible"); // 👈 allows repeat
            }
        });
    }, {
        threshold: 0.1
    });

    elementsToAnimate.forEach(el => observer.observe(el));
});

