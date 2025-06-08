
// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Animate stats on scroll
function animateStats() {
    const stats = document.querySelectorAll('.stat-number');
    stats.forEach(stat => {
        const finalValue = stat.textContent;
        const isPercentage = finalValue.includes('%');
        const isPlus = finalValue.includes('+');
        const numericValue = parseInt(finalValue.replace(/[^\d]/g, ''));
        
        let currentValue = 0;
        const increment = numericValue / 50;
        
        const counter = setInterval(() => {
            currentValue += increment;
            if (currentValue >= numericValue) {
                currentValue = numericValue;
                clearInterval(counter);
            }
            
            let displayValue = Math.floor(currentValue);
            if (isPercentage) {
                displayValue += '%';
            } else if (isPlus) {
                displayValue += '+';
            }
            
            stat.textContent = displayValue;
        }, 30);
    });
}

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            if (entry.target.classList.contains('social-proof')) {
                animateStats();
                observer.unobserve(entry.target);
            }
            
            if (entry.target.classList.contains('feature-card')) {
                entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
            }
        }
    });
}, observerOptions);

// Observe elements for animations
document.addEventListener('DOMContentLoaded', function() {
    const socialProofSection = document.querySelector('.social-proof');
    const featureCards = document.querySelectorAll('.feature-card');
    
    if (socialProofSection) {
        observer.observe(socialProofSection);
    }
    
    featureCards.forEach(card => {
        observer.observe(card);
    });
});

// Button click handlers
document.addEventListener('DOMContentLoaded', function() {
    // CTA button clicks for "Join the Waitlist"
    const ctaButtons = document.querySelectorAll('.primary-button, .cta-button, .secondary-button');
    ctaButtons.forEach(button => {
        if (button.textContent.includes('Join the Waitlist')) {
            button.addEventListener('click', function() {
                // Add ripple effect
                const ripple = document.createElement('span');
                ripple.style.position = 'absolute';
                ripple.style.borderRadius = '50%';
                ripple.style.background = 'rgba(255, 255, 255, 0.6)';
                ripple.style.transform = 'scale(0)';
                ripple.style.animation = 'ripple 0.6s linear';
                ripple.style.left = '50%';
                ripple.style.top = '50%';
                ripple.style.width = '20px';
                ripple.style.height = '20px';
                ripple.style.marginLeft = '-10px';
                ripple.style.marginTop = '-10px';
                
                this.style.position = 'relative';
                this.style.overflow = 'hidden';
                this.appendChild(ripple);
                
                setTimeout(() => {
                    ripple.remove();
                }, 600);
                
                // Redirect to Google Forms
                window.open('https://docs.google.com/forms/d/e/1FAIpQLSfaccft68gzIeciu-8RmGGZAkc1qNY_DLqSHfScj8P9vCJ5pA/viewform?usp=header', '_blank');
            });
        }
    });
});

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
    
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .feature-card {
        opacity: 0;
        transform: translateY(30px);
    }
`;
document.head.appendChild(style);

// Mobile menu toggle (for future enhancement)
//function createMobileMenu() {
//    const navMenu = document.querySelector('.nav-menu');
//    const hamburger = document.createElement('button');
//    hamburger.className = 'mobile-menu-toggle';
//    hamburger.innerHTML = '<i class="fas fa-bars"></i>';
//    hamburger.style.display = 'none';
//    hamburger.style.background = 'none';
//    hamburger.style.border = 'none';
//    hamburger.style.fontSize = '24px';
//    hamburger.style.color = '#6366f1';
//    hamburger.style.cursor = 'pointer';
    
    // Insert hamburger before nav menu
//    navMenu.parentNode.insertBefore(hamburger, navMenu);
    
    // Show hamburger on mobile
//    const mediaQuery = window.matchMedia('(max-width: 768px)');
//    function handleMobileMenu(e) {
//        if (e.matches) {
//            hamburger.style.display = 'block';
//        } else {
//            hamburger.style.display = 'none';
//        }
//    }
    
//    mediaQuery.addListener(handleMobileMenu);
//    handleMobileMenu(mediaQuery);
//}

// Initialize mobile menu
//document.addEventListener('DOMContentLoaded', createMobileMenu);
