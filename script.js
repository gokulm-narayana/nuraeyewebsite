document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.getElementById('navbar');
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const navLinks = document.getElementById('nav-links');
    const menuIcon = mobileMenuToggle.querySelector('i');

    // 1. Navbar Scroll Effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // 2. Mobile Menu Toggle
    mobileMenuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');

        // Toggle icon between bars and times (close)
        if (navLinks.classList.contains('active')) {
            menuIcon.classList.remove('fa-bars');
            menuIcon.classList.add('fa-times');
            document.body.style.overflow = 'hidden'; // Prevent scrolling when menu open
        } else {
            menuIcon.classList.remove('fa-times');
            menuIcon.classList.add('fa-bars');
            document.body.style.overflow = '';
        }
    });

    // 3. Close mobile menu when a link is clicked
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                menuIcon.classList.remove('fa-times');
                menuIcon.classList.add('fa-bars');
                document.body.style.overflow = '';
            }
        });
    });

    // 4. Sequential Video Playback for Hero Section
    const heroVideo = document.getElementById('main-hero-video');
    if (heroVideo) {
        // List of video sources to loop through
        const videos = [
            'vedios/Video_Generation_Request_Fulfilled.mp4',
            'vedios/AI_Surveillance_of_Indian_Commuters.mp4'

        ];
        let currentVideoIndex = 0;

        // When the current video ends, switch to the next one
        heroVideo.addEventListener('ended', () => {
            currentVideoIndex = (currentVideoIndex + 1) % videos.length;

            // Fade out slightly
            heroVideo.style.opacity = 0.8;

            setTimeout(() => {
                heroVideo.src = videos[currentVideoIndex];
                heroVideo.load(); // Important: load the new source
                heroVideo.play().catch(e => console.log('Autoplay prevented:', e));

                // Fade back in
                heroVideo.style.opacity = 1;
            }, 200); // Small delay for smooth transition effect
        });
    }
});
