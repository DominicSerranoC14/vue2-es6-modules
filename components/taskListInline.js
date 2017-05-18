'use strict';

import { taskListComp } from './tasklist.js';

export const taskListInline = {

  components: {
    'task-list': taskListComp
  },

  computed: Vuex.mapState([ 'taskList', 'completedTaskList' ])

};
