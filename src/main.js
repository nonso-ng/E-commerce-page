import { createApp } from 'vue'
import App from './App.vue'
import router from "./router";
import store from './store'

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';


library.add(faBars, faXmark,  faTrashCan,faAngleLeft, faAngleRight)




createApp(App).component('font-awesome-icon', FontAwesomeIcon).use(store).use(router).mount('#app')
