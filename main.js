'use strict';

import { taskListComp } from './components/taskList.js';
import { taskComp } from './components/task.js';
import { errorAlertComp, taskDisplayModalComp } from './components/erroralert.js';

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
    taskList: [
      { task: 'Grocery Store', description: 'Need milk and eggs', completed: false },
      { task: 'Bank', description: 'Need checks', completed: false },
      { task: 'Oil Change', description: '6:30 Friday 2/24', completed: false },
      { task: 'Pay Bills', description: 'Electric and Water due', completed: false },
    ],
  },

  created() {

    // Complete a task when a done button is clicked. Received from task comp
    this.EventMain.$on('completed', (task) => this.taskCompleted(task));

  },

  components: {
    'task-list': taskListComp,
    'task': taskComp,
    'error-alert': errorAlertComp,
    'msg-modal': taskDisplayModalComp
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
