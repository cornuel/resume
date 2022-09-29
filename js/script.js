// DARK MODE
var darkMode;

function get_dark_mode()
{
    if (localStorage.getItem('dark-mode')) {  
        // if dark mode is in storage, set variable with that value
        darkMode = localStorage.getItem('dark-mode');  
      } else {  
        // if dark mode is not in storage, set variable to 'light'
        darkMode = 'light';  
      }
      
      // set new localStorage value
      localStorage.setItem('dark-mode', darkMode);
      
}

//get_dark_mode();

if (localStorage.getItem('dark-mode') == 'dark') {
  // if the above is 'dark' then apply .dark to the body and main
  $('body').addClass('dark');  
  $('main').addClass('dark');
  $('.navbar_container').addClass('dark');
  $('.logo_container').addClass('dark'); 
  $('.description').addClass('dark'); 
  $('.exp-container').addClass('dark');
  $('a').addClass('dark');
  $('li').addClass('dark');

  // hide the 'dark' button
  $('.dark-button').hide();
  // show the 'light' button
  $('.light-button').show();
}

$('.dark-button').on('click', function() {  
    $('.dark-button').hide();
    $('.light-button').show();

    $('body').addClass('dark');
    $('main').addClass('dark');
    $('.navbar_container').addClass('dark'); 
    $('.logo_container').addClass('dark');  
    $('.description').addClass('dark');  
    $('.exp-container').addClass('dark');
    $('a').addClass('dark');
    $('li').addClass('dark');

    // set stored value to 'dark'
    localStorage.setItem('dark-mode', 'dark');
  });
  
  $('.light-button').on('click', function() {  
    $('.light-button').hide();
    $('.dark-button').show();

    $('body').removeClass('dark');
    $('main').removeClass('dark');
    $('.navbar_container').removeClass('dark');
    $('.logo_container').removeClass('dark'); 
    $('.description').removeClass('dark'); 
    $('.exp-container').removeClass('dark');
    $('a').removeClass('dark');
    $('li').removeClass('dark');

    // set stored value to 'light'
    localStorage.setItem('dark-mode', 'light');   
  });


// Enable navbar

let nav = document.querySelector("header");
let button_exp = document.querySelector(".exp").addEventListener("click", navbar_clicked)
let button_edu = document.querySelector(".education").addEventListener("click", navbar_clicked)
let button_skills = document.querySelector(".stack").addEventListener("click", navbar_clicked)
let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {

    get_dark_mode();
    
    if (darkMode == 'dark') {
        $('.navbar_container').addClass('dark');
    }
    else
    {
        $('.navbar_container').removeClass('dark');
    }

    //console.log(darkMode);
    if (lastScrollY < window.scrollY) {
        nav.classList.replace("navbar_container", "navbar--hidden");
    }
    else{
        nav.classList.replace("navbar--hidden", "navbar_container");
    }

    lastScrollY = window.scrollY
});

function navbar_clicked() {
    nav.classList.replace("navbar_container", "navbar--hidden");
}

// animation on scroll

function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 60;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", reveal);