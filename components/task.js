'use strict';


export const taskComp  = {

  props: [ 'obj' ],

  template: `
    <li> {{ obj.task }}
      <button v-if="!obj.completed" @click="completeTask">Done</button>
      <button @click="displayDescription">Show More</button>
    </li>
  `,

  methods: {

    // This function will emit a 'completed' task to the event hub
    completeTask() {
      this.obj.completed = true;
      this.EventMain.$emit('completed', this.obj);
    },

    // Emit an event to event hub and send task desc with it
    // Modal will display task description
    displayDescription() {
      this.EventMain.$emit('sendTaskDescriptionToModal', this.obj.description);
    }

  }

};
