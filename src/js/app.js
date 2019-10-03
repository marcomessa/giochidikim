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

  $('a[href="#"]').click(function(e) {
    e.preventDefault();
  });
})
