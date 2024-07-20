
// For Navbar

document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navbar = document.querySelector('.navbar');
    const navbarLinks = document.querySelectorAll('.navbar ul li a');

    hamburger.addEventListener('click', function() {
        navbar.classList.toggle('active');
    });

    // Close the navbar when clicking outside of it
    document.addEventListener('click', function(event) {
        if (!navbar.contains(event.target) && !hamburger.contains(event.target)) {
            navbar.classList.remove('active');
        }
    });
});


// For Main Content

function run() {
    let htmlCode = document.getElementById("html-code").value;
    let cssCode = document.getElementById("css-code").value;
    let jsCode = document.getElementById("js-code").value;
    let result = document.getElementById("result");

    result.contentDocument.body.innerHTML = htmlCode + "<style>" + cssCode + "</style>";
    result.contentWindow.eval(jsCode);
}




