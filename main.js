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
// This line is just figure out how to return event hub as a single ES6 function
Vue.mixin({ data: () => ({ EventMain })});


new Vue({
  el: '#root',

  store: globalStore,

  mounted() {

    // Retrieve task list json
    axios.get('../data/taskList.json')
    .then(({ data }) => data)
    .then(json => this.$store.commit('populateTaskList', json));

    // Retrieve people json
    axios.get('../data/people.json')
    .then(({ data }) => data)
    .then(json => this.$store.commit('populatePeople', json));

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

});
