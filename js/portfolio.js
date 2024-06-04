// Owner: Henock Kinki

/* ----- TYPING EFFECT ----- */
var typingEffect = new Typed(".typedText",{
  strings : ["Hello, I'm ","Bonjour, je suis "],
  loop : true,
  typeSpeed : 100, 
  backSpeed : 80,
  backDelay : 2000
});

var typingEffect2 = new Typed(".typedText2",{
  strings : ["Software Developer","Web Developer","SQL Developer","Android Developer"],
  loop : true,
  typeSpeed : 100, 
  backSpeed : 80,
  backDelay : 2000
});

// JavaScript to handle expanding and collapsing "About Page" section
document.addEventListener('DOMContentLoaded', function() {
  const readMoreBtn = document.querySelector('.read-more');
  const readLessBtn = document.querySelector('.read-less');
  const additionalInfo = document.querySelector('.additional-info');

  readMoreBtn.addEventListener('click', function(e) {
      e.preventDefault();
      additionalInfo.style.display = 'block'; // Show additional info
      readMoreBtn.style.display = 'none'; // Hide "Read More" button
      readLessBtn.style.display = 'block'; // Show "Read Less" button
  });

  readLessBtn.addEventListener('click', function(e) {
      e.preventDefault();
      additionalInfo.style.display = 'none'; // Hide additional info
      readMoreBtn.style.display = 'block'; // Show "Read More" button
      readLessBtn.style.display = 'none'; // Hide "Read Less" button
  });
});

// JavaScript to handle expanding and collapsing "Services Page" section part 1
document.addEventListener('DOMContentLoaded', function() {
  const readMoreBtn = document.querySelector('.read-more1');
  const readLessBtn = document.querySelector('.read-less1');
  const additionalInfo = document.querySelector('.additional-info1');

  readMoreBtn.addEventListener('click', function(e) {
      e.preventDefault();
      additionalInfo.style.display = 'block'; // Show additional info
      readMoreBtn.style.display = 'none'; // Hide "Read More" button
      readLessBtn.style.display = 'block'; // Show "Read Less" button
  });

  readLessBtn.addEventListener('click', function(e) {
      e.preventDefault();
      additionalInfo.style.display = 'none'; // Hide additional info
      readMoreBtn.style.display = 'block'; // Show "Read More" button
      readLessBtn.style.display = 'none'; // Hide "Read Less" button
  });
});

// JavaScript to handle expanding and collapsing "Services Page" section part 2
document.addEventListener('DOMContentLoaded', function() {
  const readMoreBtn = document.querySelector('.read-more2');
  const readLessBtn = document.querySelector('.read-less2');
  const additionalInfo = document.querySelector('.additional-info2');

  readMoreBtn.addEventListener('click', function(e) {
      e.preventDefault();
      additionalInfo.style.display = 'block'; // Show additional info
      readMoreBtn.style.display = 'none'; // Hide "Read More" button
      readLessBtn.style.display = 'block'; // Show "Read Less" button
  });

  readLessBtn.addEventListener('click', function(e) {
      e.preventDefault();
      additionalInfo.style.display = 'none'; // Hide additional info
      readMoreBtn.style.display = 'block'; // Show "Read More" button
      readLessBtn.style.display = 'none'; // Hide "Read Less" button
  });
});

// JavaScript to handle expanding and collapsing "Services Page" section part 3
document.addEventListener('DOMContentLoaded', function() {
  const readMoreBtn = document.querySelector('.read-more3');
  const readLessBtn = document.querySelector('.read-less3');
  const additionalInfo = document.querySelector('.additional-info3');

  readMoreBtn.addEventListener('click', function(e) {
      e.preventDefault();
      additionalInfo.style.display = 'block'; // Show additional info
      readMoreBtn.style.display = 'none'; // Hide "Read More" button
      readLessBtn.style.display = 'block'; // Show "Read Less" button
  });

  readLessBtn.addEventListener('click', function(e) {
      e.preventDefault();
      additionalInfo.style.display = 'none'; // Hide additional info
      readMoreBtn.style.display = 'block'; // Show "Read More" button
      readLessBtn.style.display = 'none'; // Hide "Read Less" button
  });
});

//Switching between light theme and dark theme
var icon = document.getElementById("icon");

icon.onclick = function(){
  document.body.classList.toggle("dark-theme");
  if(document.body.classList.contains("dark-theme")){
    icon.src = "images/sun.png";
  }else{
    icon.src = "images/moon.png";
  }
}

/*The code below will perform a function of when you scrolling through the whole page the back to top button will show, but if you around on the top page, 
which is the home page, then it won't show*/ 
const backToTop = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
  // Show/hide back to top button
  if (window.scrollY > 300) {
    backToTop.classList.add('show');
  } else {
    backToTop.classList.remove('show');
  }

  
});

// This addEventListener will perform the function of scrolling back to the top page
backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

//   Toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

//Adding smooth scrolling when clicking on quick links in the footer and preventing it from opening a new page
document.querySelectorAll('.footer-links a').forEach(link =>{
  link.addEventListener('click', function(e){
    e.preventDefault();
    const targetSection = document.getElementById(this.getAttribute('href').substring(1));
    targetSection.scrollIntoView({behavior: 'smooth'});
  });
});

//   scroll sections and current active nav link
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    // Sticky navbar
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100); 

    // Remove navbar when link clicked
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

// Scroll reveal
ScrollReveal({ 
    // reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading, .header', {origin: 'top'});
ScrollReveal().reveal('.home-img, .services-container, .skills-container, .contact form', 
{origin: 'bottom'});
ScrollReveal().reveal('.home-content h1, .about-img, .skills-container, .contact form, .skills-column', 
{origin: 'left'});
ScrollReveal().reveal('.home-content p, .about-content, .skills-container, .contact form, .skills-box', 
{origin: 'right'});



 