$(document).ready(function() {
  var navbarTop = document.getElementById("navbar-top");
  var navbar = document.getElementById("navbar-bottom");
  var showcase = document.getElementById("showcase");
  var imgLogo = document.getElementById("img-logo");

  $(window).scroll(function() {
    if (
      document.body.scrollTop >= 100 ||
      document.documentElement.scrollTop >= 100
    ) {
      navbar.classList.add("scrolled-navbar-bottom");
      navbarTop.classList.add("scrolled-navbar-top");
      imgLogo.classList.add("img-logo-scrolled");
      $(".uplink").show();
    } else if (
      document.body.scrollTop < 100 ||
      document.documentElement.scrollTop < 100
    ) {
      navbar.classList.remove("scrolled-navbar-bottom");
      navbarTop.classList.remove("scrolled-navbar-top");
      imgLogo.classList.remove("img-logo-scrolled");
      $(".uplink").hide();
    }
  });
  $("#hamburger").on("click", function() {
    toggleHamburger();
  });

  $(".side-nav-link").click(function(e) {
    toggleHamburger();
    openSlideMenu();
  });
  $("#side-menu-overlay").click(function(e) {
    toggleHamburger();
    openSlideMenu();
  });



  window.sr = ScrollReveal({    
    mobile: false
  });
  sr.reveal('.form-group-name', {
    origin: 'left',
    distance: '100px',
    reset: false
  });
  sr.reveal('.form-group-phone', {
    origin: 'right',
    distance: '100px',
    reset: false
  });
  sr.reveal('.form-group-email', {
    origin: 'left',
    distance: '100px',
    reset: false
  });
  sr.reveal('.form-group-submit', {
    scale: 0.1,
    reset: false
  });
  sr.reveal('.showcase-button', {
    opacity: 0.1,
    scale: 0.1,
    delay: 800,
    reset: false
  });
  sr.reveal('.article-left', {
    origin: 'left',
    viewFactor: 0.2,
    distance: '100px',
    reset: true
  });
  sr.reveal('.article-right', {
    origin: 'right',
    viewFactor: 0.2,
    distance: '100px',
    reset: true
  });
  sr.reveal('.contact-form-second', {
    origin: 'bottom',
    viewFactor: 0.2,
    distance: '100px',
    reset: false
  });
  sr.reveal('.gallery-row-top .gallery-item', {
    duration: 1000,
    viewFactor: 0.2,
    reset: false
  }, 50);
  sr.reveal('.gallery-row-bottom .gallery-item', {
    duration: 1000,
    viewFactor: 0.2,
    reset: false
  }, 50);
  sr.reveal('.advantages-row-top', {
    viewFactor: 0.3,
    reset: false
  }, 50);
  sr.reveal('.advantages-row-bottom', {
    viewFactor: 0.3,
    reset: false
  }, 50);

});

$(document).on("click", '[data-toggle="lightbox"]', function(event) {
  event.preventDefault();
  $(this).ekkoLightbox();
});

$('a[href="#scrollto-top"]').click(function() {
  $("html, body").animate(
    {
      scrollTop: $($(this).attr("href")).offset().top
    },
    500
  );
  // return false;
});

$('a[href^="#scrollto-"]').click(function() {
  $("html, body").animate(
    {
      scrollTop: $($(this).attr("href")).offset().top - 55
    },
    500
  );
  // return false;
});

function toggleHamburger() {
  let toggle = document.querySelector(".hamburger");
  toggle.classList.contains("is-active") === true
    ? toggle.classList.remove("is-active")
    : toggle.classList.add("is-active");
}

function openSlideMenu() {
  let sideMenu = document.getElementById("side-menu");
  sideMenu.style.width = sideMenu.style.width === "250px" ? "0px" : "250px";

  let sideMenuOverlay = document.getElementById("side-menu-overlay");
  sideMenuOverlay.style.display =
    sideMenuOverlay.style.display === "inline" ? "none" : "inline";
}

const $form = $("#createContactFormShowcase");
$form.on("submit", submitHandler);

const $form2 = $("#createContactForm");
$form2.on("submit", submitHandler2);

function submitHandler(e) {  
  e.preventDefault();
  $.ajax({
    url: '/logic2.php',
    type: 'POST',
    data: $form.serialize()
  }).done(response => {
    console.log(response);
    // console.log(JSON.parse(response).success);
    if(JSON.parse(response).success) {
      document.getElementById('createContactFormShowcase').reset();
      $("#sendContactModal").modal("show");
    } else {
      $("#failContactModal").modal("show");
    }
  });
}

function submitHandler2(e) {  
  e.preventDefault();
  $.ajax({
    url: '/logic2.php',
    type: 'POST',
    data: $form2.serialize()
  }).done(response => {
    console.log(JSON.parse(response).success);
    // console.log(JSON.parse(response).success);
    if(JSON.parse(response).success) {
      document.getElementById('createContactForm').reset();
      $("#sendContactModal").modal("show");
    } else {
      $("#failContactModal").modal("show");
    }
  });
}

