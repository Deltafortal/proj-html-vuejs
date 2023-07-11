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

library.add(faCopyright , faArrowRight , faBarsStaggered)


createApp(App)
.component('FontAwesomeIcon' , FontAwesomeIcon)
.mount('#app')
