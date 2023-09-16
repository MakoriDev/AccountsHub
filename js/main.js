(function($) {
    "use strict";

    // Spinner
    var spinner = function() {
        setTimeout(function() {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();


    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function() {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').css('top', '0px');
        } else {
            $('.sticky-top').css('top', '-100px');
        }
    });


    // Back to top button
    $(window).scroll(function() {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function() {
        $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
        return false;
    });


    // Header carousel
    $(".header-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        items: 1,
        dots: true,
        loop: true,
        nav: true,
        navText: [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ]
    });

    // Check if the user is already logged in (using localStorage).
    function checkLoginStatus() {
        const username = localStorage.getItem('username');
        if (username) {
            showUserDashboard(username);
        }
    }

    // Show the user dashboard after successful login.
    function showUserDashboard(username) {
        document.getElementById('content').style.display = 'none';
        document.getElementById('userContent').style.display = 'block';
        document.getElementById('username').textContent = username;
        document.getElementById('logoutBtn').style.display = 'block';
    }

    // Handle the login process.
    document.getElementById('loginBtn').addEventListener('click', function() {
        const username = prompt('Enter your username:');
        if (username) {
            // Store the username in localStorage to indicate that the user is logged in.
            localStorage.setItem('username', username);
            showUserDashboard(username);
        }
    });

    // Handle the logout process.
    document.getElementById('logoutBtn').addEventListener('click', function() {
        // Remove the username from localStorage to log the user out.
        localStorage.removeItem('username');
        document.getElementById('content').style.display = 'block';
        document.getElementById('userContent').style.display = 'none';
        document.getElementById('logoutBtn').style.display = 'none';
    });

    // Check login status when the page loads.
    checkLoginStatus();


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: true,
        margin: 24,
        dots: true,
        loop: true,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            }
        }
    });

})(jQuery);