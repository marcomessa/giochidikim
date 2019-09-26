import $ from 'jquery'
import fontawesome from '@fortawesome/fontawesome'
import { faFacebookF, faInstagram, faLinkedin } from '@fortawesome/fontawesome-free-brands'
import { faMobileAlt, faPhone } from '@fortawesome/fontawesome-free-solid'
import slick from 'slick-slider'

fontawesome.library.add([faFacebookF, faInstagram, faLinkedin, faMobileAlt, faPhone]);

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
})
