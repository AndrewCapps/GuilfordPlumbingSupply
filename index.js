//Navbar header//

const navButton = document.querySelector('.nav-button')
        const navButtonIcon = document.querySelector('.nav-button i')
        const navMenu = document.querySelector('.navbar-menu')

        navButton.onclick = function () {
            navMenu.classList.toggle('open')
            const isOpen = navMenu.classList.contains('open')

            navButtonIcon.classList = isOpen
            ? 'fa-solid fa-xmark'
            : 'fa-solid fa-bars'

        }



// Modal //
function openModal() {
    document.getElementById('modal').style.display = 'block';
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName('modal-slides');
    let dots = document.getElementsByClassName('demo');

    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}

    for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
        
}



