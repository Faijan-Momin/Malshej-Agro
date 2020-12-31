// Home Page - SlideShow Images

var mySwiper = new Swiper('.swiper-container', {
  // Optional parameters
    direction: 'horizontal',
    loop: true,
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar

//   scrollbar: {
//     el: '.swiper-scrollbar',
//   },
})



// Adding Guest button

function increment() {
  document.getElementById('no-of-guest').stepUp();
}

// Minus Guest Button
function decrement() {
  document.getElementById('no-of-guest').stepDown();
}


function MobileNav(){
  if(document.getElementById("mobile-Nav").style.height == "100%"){
      closeNav();
  }
  else{
      openNav();
  }
}


function openNav() {
  document.getElementById("mobile-Nav").style.height = "100%";
  document.body.style.height= " 100%"; 
  document.body.style.overflow= "hidden";
}

function closeNav() {
  document.getElementById("mobile-Nav").style.height = "0%";
  document.body.style.height= "auto"; 
  document.body.style.overflow= "scroll";
}
     


// Mobile Slideshow

  var slideIndex = 0;
  showSlides();

  function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 8000); // Change image every 2 seconds
}


// Instagram heart Like

function instagram_Heart(){
  var heart = document.getElementsByClassName("fa-heart")[0];
  if(heart.style.color == "red"){
    heart.style.color = "transparent";
  }
  else{
    heart.style.color = "red";
  }
}

