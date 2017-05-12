'use strict';


export const taskComp  = {

  props: [ 'obj' ],

  template: `
    <li> {{ obj.task }}
      <button v-if="!obj.completed" @click="completeTask">Complete Task {{ obj.task }}</button>
    </li>
  `,

  methods: {

    // This function will emit a 'completed' task to the parent task component
    completeTask() {
      this.obj.completed = true;
      this.$emit('completed', this.obj);
    }

  }

};
