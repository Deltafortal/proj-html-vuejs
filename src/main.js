import { createApp } from 'vue'
import App from './App.vue'
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import '@fontsource/roboto/900.css';

/* import fontawesome component and core */
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'


/* Import Icons */
import { faCopyright } from '@fortawesome/free-solid-svg-icons'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { faBarsStaggered } from '@fortawesome/free-solid-svg-icons'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faMedal } from '@fortawesome/free-solid-svg-icons';
import { faHandshake } from '@fortawesome/free-solid-svg-icons';
import { faHelmetSafety } from '@fortawesome/free-solid-svg-icons';
import { faBiking } from '@fortawesome/free-solid-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

library.add(faCopyright , faArrowRight , faBarsStaggered, faChevronRight, faChevronLeft , faFacebookF , 
    faInstagram , faTwitter , faMedal, faHelmetSafety, faBiking, faHandshake, faCheck, faXmark)


createApp(App)
.component('FontAwesomeIcon' , FontAwesomeIcon)
.mount('#app')
