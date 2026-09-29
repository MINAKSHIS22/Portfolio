/**
 * ===================================================================
 * PERSONAL PORTFOLIO INTERACTIVITY SCRIPT
 * Author: Minakshi Sahoo
 * Technology: Pure Vanilla ES6+ JavaScript
 * Features:
 *   - Mobile Hamburger Menu with auto-close and outside click
 *   - Sticky Navbar appearance on scroll
 *   - Active Navigation Link indicator (ScrollSpy)
 *   - IntersectionObserver Scroll Reveal animations
 *   - Back-To-Top Button functionality
 *   - Static-compatible Contact Form Mailto Handler
 * ===================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // -----------------------------------------------------------------
  // 1. DOM ELEMENTS SELECTION
  // -----------------------------------------------------------------
  const navbar = document.getElementById('navbar');
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const navMenu = document.getElementById('navMenu');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id], main > section');
  const backToTopBtn = document.getElementById('backToTop');
  const contactForm = document.getElementById('contactForm');
  const formStatus = document.getElementById('formStatus');

  // -----------------------------------------------------------------
  // 2. MOBILE HAMBURGER MENU CONTROLS
  // -----------------------------------------------------------------
  if (hamburgerBtn && navMenu) {
    const toggleMenu = (forceState = null) => {
      const isExpanded = forceState !== null 
        ? forceState 
        : hamburgerBtn.classList.contains('active');

      if (isExpanded) {
        hamburgerBtn.classList.remove('active');
        navMenu.classList.remove('active');
        hamburgerBtn.setAttribute('aria-expanded', 'false');
      } else {
        hamburgerBtn.classList.add('active');
        navMenu.classList.add('active');
        hamburgerBtn.setAttribute('aria-expanded', 'true');
      }
    };

    // Toggle menu on button click
    hamburgerBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleMenu();
    });

    // Close menu when clicking any navigation link
    navLinks.forEach((link) => {
      link.addEventListener('click', () => {
        toggleMenu(true);
      });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!navMenu.contains(e.target) && !hamburgerBtn.contains(e.target)) {
        toggleMenu(true);
      }
    });

    // Close menu on Escape key press for accessibility
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && navMenu.classList.contains('active')) {
        toggleMenu(true);
        hamburgerBtn.focus();
      }
    });
  }

  // -----------------------------------------------------------------
  // 3. STICKY NAVBAR & BACK-TO-TOP VISIBILITY ON SCROLL
  // -----------------------------------------------------------------
  const handleScrollEffects = () => {
    const scrollY = window.scrollY || window.pageYOffset;

    // Sticky Navbar elevation
    if (navbar) {
      if (scrollY > 30) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    }

    // Back to top button visibility
    if (backToTopBtn) {
      if (scrollY > 350) {
        backToTopBtn.classList.add('visible');
      } else {
        backToTopBtn.classList.remove('visible');
      }
    }
  };

  // Run on load and on scroll
  window.addEventListener('scroll', handleScrollEffects, { passive: true });
  handleScrollEffects();

  // -----------------------------------------------------------------
  // 4. ACTIVE NAVIGATION LINK (SCROLLSPY)
  // -----------------------------------------------------------------
  const updateActiveNavLink = () => {
    const scrollPosition = (window.scrollY || window.pageYOffset) + 120;

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');

      if (
        scrollPosition >= sectionTop &&
        scrollPosition < sectionTop + sectionHeight
      ) {
        navLinks.forEach((link) => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  };

  window.addEventListener('scroll', updateActiveNavLink, { passive: true });

  // -----------------------------------------------------------------
  // 5. SCROLL REVEAL ANIMATIONS (INTERSECTION OBSERVER)
  // -----------------------------------------------------------------
  const revealElements = document.querySelectorAll('.reveal');

  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target); // Animate only once for performance
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    revealElements.forEach((el) => revealObserver.observe(el));
  } else {
    // Fallback for older browsers without IntersectionObserver
    revealElements.forEach((el) => el.classList.add('revealed'));
  }

  // -----------------------------------------------------------------
  // 6. STATIC-FRIENDLY CONTACT FORM SUBMISSION HANDLER
  // -----------------------------------------------------------------
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('contactName')?.value.trim();
      const email = document.getElementById('contactEmail')?.value.trim();
      const subject = document.getElementById('contactSubject')?.value.trim();
      const message = document.getElementById('contactMessage')?.value.trim();

      if (!name || !email || !subject || !message) {
        if (formStatus) {
          formStatus.textContent = 'Please fill out all fields before sending.';
          formStatus.className = 'form-status-message error';
        }
        return;
      }

      // Contact form recipient
      const recipient = 'minakshi.sahoo@vit.edu.in';
      const emailSubject = encodeURIComponent(`[Portfolio Contact] ${subject}`);
      const emailBody = encodeURIComponent(
        `Hello Minakshi,\n\nMy name is ${name} (${email}).\n\nMessage:\n${message}\n\nSent from your portfolio website.`
      );

      const mailtoUrl = `mailto:${recipient}?subject=${emailSubject}&body=${emailBody}`;

      if (formStatus) {
        formStatus.textContent = 'Opening your email client to dispatch the message...';
        formStatus.className = 'form-status-message success';
      }

      // Trigger mailto client
      setTimeout(() => {
        window.location.href = mailtoUrl;
      }, 400);
    });
  }

  // -----------------------------------------------------------------
  // 7. SMOOTH SCROLLING FALLBACK (FOR ANCHOR LINKS)
  // -----------------------------------------------------------------
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#' || targetId === '') return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        const headerOffset = 76;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });
      }
    });
  });

  // Log confirmation in console
  console.log('Portfolio initialized successfully. Built with modern HTML5, CSS3, & JavaScript.');
});
