'use strict';

import { globalStore } from './data/store.js';
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

  methods: {

    // Storing ajax calls as functions will make the available later instead of simply calling them in mounted
    // Passing store in as an argument enables use of ES6 functions
    getTaskListJson: (store) => (
      // Retrieve task list json
      axios.get('../data/taskList.json')
      .then(({ data }) => data)
      .then(json => store.commit('populateTaskList', json))
    ),

    getPeopleJson: (store) => (
      // Retrieve people json
      axios.get('../data/people.json')
      .then(({ data }) => data)
      .then(json => store.commit('populatePeople', json))
    )

  },

  components: {
    'task-list': taskListComp,
    'task': taskComp,
    'error-alert': errorAlertComp,
    'msg-modal': taskDisplayModalComp,
    'home-inline-template': homeInlineTemp,
    'counter': counterComp,
    'people-list-inline-template': peopleListTemp,
  },

  // Once the instance is created, then it is mounted
  mounted() {

    this.getTaskListJson(this.$store);
    this.getPeopleJson(this.$store);

  },

});
