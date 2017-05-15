'use strict';


export const taskComp  = {

  props: [ 'obj' ],

  template: `
    <li class="d-flex flex-row justify-content-between">
      <p v-text="obj.task"></p>
      <button class="btn btn-primary" v-if="!obj.completed" @click="completeTask">Done</button>
      <button class="btn btn-info" @click="displayDescription">Show More</button>
    </li>
  `,

  methods: {

    // This function will emit a 'completed' task to the event hub
    completeTask() {
      this.obj.completed = true;
      this.EventMain.$emit('completed', this.obj);
    },

    // Emit an event to event hub and send the task with it
    // Modal will display task description and title
    displayDescription() {
      this.EventMain.$emit('sendTaskToModal', this.obj);
    }

  }

};
