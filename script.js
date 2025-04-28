// Function for "Join Now" button click
function joinNow() {
    alert("Welcome to Quantum E Sports! Stay tuned for upcoming tournaments.");
}

// Smooth scrolling effect for navigation
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const targetId = event.target.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
    });
});

// Newsletter form validation
document.getElementById("subscribe-form").addEventListener("submit", function(event) {
    event.preventDefault();
    const emailInput = document.querySelector(".newsletter input").value;
    
    if (emailInput.includes("@")) {
        alert("Subscription successful! You'll receive esports updates.");
    } else {
        alert("Please enter a valid email.");
    }
});
