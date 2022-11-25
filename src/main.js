import DefaultLayout from '~/layouts/Default.vue'
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/vendor/aos/aos.css";
import "./assets/css/style.css";
import "./assets/vendor/bootstrap/css/bootstrap.min.css" ;
import "./assets/vendor/bootstrap-icons/bootstrap-icons.css";
import "./assets/vendor/boxicons/css/boxicons.min.css";
import "./assets/vendor/swiper/swiper-bundle.min.css";
import BootstrapVue from 'bootstrap-vue'
//import AOS from 'aos'

export default function (Vue, { router, head, isClient }) {
  Vue.use(BootstrapVue)
  Vue.component('Layout', DefaultLayout)
  //AOS.init()
}
