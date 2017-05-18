'use strict';

import { globalStore } from './data/store.js';
import { taskListInline } from './components/taskListInline.js';
import { taskListComp } from './components/taskList.js';
import { taskComp } from './components/task.js';
import { errorAlertComp } from './components/erroralert.js';
import { taskDisplayModalComp } from './components/modal.js';
import { homeInlineTemp } from './components/inlineTemp.js';
import { counterComp } from './components/counter.js';
import { peopleListTemp } from './components/peopleList.js';


// Creating root event hub for components
const EventMain = new Vue();
// Adding eventhub as a global mixin, e.g. available to all components
// This line is how to return event hub as a single ES6 function
Vue.mixin({ data: () => ({ EventMain })});


const app = new Vue({
  el: '#root',

  store: globalStore,

  components: {
    'error-alert': errorAlertComp,
    'msg-modal': taskDisplayModalComp,
    'home-inline-template': homeInlineTemp,
    'counter': counterComp,
    'people-list-inline-template': peopleListTemp,
    'task-list-inline': taskListInline,
  },

  // Vuex helper method to map store actions locally
  // Longhand would look like this: this.$store.dispatch('getTaskListJson'[, payload]);
  methods: Vuex.mapActions([ 'getTaskListJson', 'getPeopleJson' ]),

  // Once the instance is created, then it is mounted
  mounted() {

    // Dispatching actions on the store
    this.getTaskListJson();
    this.getPeopleJson();

  },

});
