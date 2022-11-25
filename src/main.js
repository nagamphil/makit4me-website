// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/vendor/aos/aos.css";
import "./assets/css/style.css";
import "./assets/vendor/bootstrap/css/bootstrap.min.css" ;
import "./assets/vendor/bootstrap-icons/bootstrap-icons.css";
import "./assets/vendor/boxicons/css/boxicons.min.css";
import "./assets/vendor/swiper/swiper-bundle.min.css";

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
}
