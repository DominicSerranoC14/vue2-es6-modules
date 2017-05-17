'use strict';

import { taskComp } from './task.js';


export const taskListComp = {

  props: [ 'list' ],

  template: `
    <div>
      <ul class="list-group">
        <task class="list-group-item" v-for="each in list" :key="each.id" :obj="each"></task>
      </ul>
    </div>
  `,

  components: {
    task: taskComp
  },

  methods: {
    // This function will emit a 'completed' task to the parent task-list component
    // alertCompletedTask(val) {
    //   this.EventMain.$emit('completed', val);
    // }
  },

};
