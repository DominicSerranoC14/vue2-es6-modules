'use strict';

import { taskListComp } from './components/taskList.js';
import { taskComp } from './components/task.js';
import { errorAlertComp } from './components/erroralert.js';
import { taskDisplayModalComp } from './components/modal.js';
import { homeInlineTemp } from './components/inlineTemp.js';
import { counterComp } from './components/counter.js';

const store = new Vuex.Store({
  // global data
  state: {
    count: 0,
    taskList: [
      { task: 'Grocery Store', desc: 'Need milk and eggs', completed: false },
      { task: 'Bank', desc: 'Need checks', completed: false },
      { task: 'Oil Change', desc: '6:30 Friday 2/24', completed: false },
      { task: 'Pay Bills', desc: 'Electric and Water due', completed: false },
    ]
  },
  // global computed properties
  getters: {
    getTaskList: (state) => state.taskList,
    getCompletedTaskList: (state) => state.taskList.filter(({ completed }) => completed)
  },
  // mutations enable us to better log our changes of state
  // they are synchronous in nature, so they shouldn't be called directly in some cases
  mutations: {
    increment (state) {
      state.count++
    }
  },
  // actions dispatch mutations, and can handle async tasks
  actions: {
    
  }
});


const EventMain = new Vue();

Vue.mixin({
  data() {
    return {
      EventMain: EventMain
    }
  }
});

new Vue({
  el: '#root',

  store,

  data: {
    message: 'I am Groot',
    newName: null,
    newAge: null,
    nameError: false,
    ageError: false,
    completedTaskList: [],
    newNamePlaceholder: 'Enter a name to add',
    addingName: false,
    people: [
      { name: 'Marisa', age: 26 },
      { name: 'Thomas', age: 24 },
      { name: 'Lauren', age: 17 },
    ],
    // taskList: [
    //   { task: 'Grocery Store', desc: 'Need milk and eggs', completed: false },
    //   { task: 'Bank', desc: 'Need checks', completed: false },
    //   { task: 'Oil Change', desc: '6:30 Friday 2/24', completed: false },
    //   { task: 'Pay Bills', desc: 'Electric and Water due', completed: false },
    // ],
  },

  created() {

    // Complete a task when a done button is clicked. Received from task comp
    this.EventMain.$on('completed', (task) => this.taskCompleted(task));

  },

  components: {
    'task-list': taskListComp,
    'task': taskComp,
    'error-alert': errorAlertComp,
    'msg-modal': taskDisplayModalComp,
    'home-inline-template': homeInlineTemp,
    'counter': counterComp
  },

  methods: {

    validateNewPerson() {
      if (!this.newName) {
        this.nameError = true;
      } else {
        this.nameError = false;
      }

      if (!this.newAge) {
        this.ageError = true;
      } else {
        this.ageError = false;
      }

      if (this.ageError || this.nameError) {
        return;
      }

      this.addNewPerson();
    },

    addNewPerson() {
      // Playing around with dynamically toggling a button disable
      this.addingName = true;
      setTimeout(() => {
        this.addingName = false
        this.people.push({ name: this.newName, age: this.newAge });
        this.newName = null;
        this.newAge = null;
      }, 1000);
    },

    taskCompleted(val) {
      this.taskList.splice(this.taskList.indexOf(val), 1);
      this.completedTaskList.push(val);
    }

  },

  computed: {

    adults() {
      return this.people.filter(each => each.age >= 18);
    },

  }

});
