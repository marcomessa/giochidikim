import $ from 'jquery'
import fontawesome from '@fortawesome/fontawesome'
import { faFacebookF, faInstagram, faLinkedin } from '@fortawesome/fontawesome-free-brands'
import { faMobileAlt, faPhone, faAngleRight, faAngleLeft } from '@fortawesome/fontawesome-free-solid'
import slick from 'slick-slider'
import Toggler from '@marcomessa/toggler';
const toggler = new Toggler;

fontawesome.library.add([faFacebookF, faInstagram, faLinkedin, faMobileAlt, faPhone, faAngleRight, faAngleLeft]);

window.$ = window.jQuery = $;

$(function() {
  $('.slick').slick({
    slidesToShow: 1,
    autoplay: true,
    pauseOnDotsHover: false,
    pauseOnHover: false,
    arrows: false,
    autoplaySpeed: 3000,
    fade: true
  });

  $('.brand-carousel').slick({
    slidesToShow: 7,
    slidesToScroll: 7,
    arrows: false,
    dots: false,
    autoplay: true,
    pauseOnHover: false,
    pauseOnFocus: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 6,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

  $('a[href="#"]').click(function(e) {
    e.preventDefault();
  });

  const createAcc = function () {
    this.classList.toggle("active");

    const panel = this.nextElementSibling;
    if (panel.classList.contains('visible')) {
      panel.classList.remove('visible');
    } else {
      panel.classList.add('visible')
    }
  }

  // quando il documento é caricato
  toggleAcc();

  // quando la finestra é ridimensionata
  window.addEventListener("resize", function() {
    toggleAcc();
  })

  function toggleAcc() {
    const accordions = document.getElementsByClassName('accordion__button');

    const mq = window.matchMedia( "(max-width: 767px)" );

    if (mq.matches) {
      for (let i = 0; i < accordions.length; i++ ) {
        console.log( createAcc );
        accordions[i].addEventListener("click", createAcc)
      }
    } else {
      for (let i = 0; i < accordions.length; i++ ) {
        accordions[i].removeEventListener("click", createAcc)
      }
    }
  }
})
