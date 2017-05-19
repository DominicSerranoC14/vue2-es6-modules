'use strict';


export const globalStore = new Vuex.Store({

  // Runs Vuex in strict mode, will throw errors if state is mutated incorrectly
  // If using this, it should not be used in prod, so this will work strict: process.env.NODE_ENV !== 'production'
  strict: true,

  // global data
  state: {
    count: 0,
    taskList: [],
    completedTaskList: [],
    people: [],
  },

  // global getter functions, great for filters and are available to entire app
  getters: {
    // Should getters be defined for accessing data in state or can it be accessed directly?
    // getTaskList: (state) => state.taskList,
    // getCompletedTaskList: (state) => state.completedTaskList,
    getAllTasks: (state) => state.taskList.concat(state.completedTaskList),
    getPeopleString: (state) => state.people.map(({ name }) => name).join(', '),
    getAdults: (state) => state.people.filter(({ age }) => age >= 18),
  },

  // mutations enable us to better log our changes of state
  // they are synchronous in nature, so they shouldn't be called directly in some cases
  mutations: {

    populateTaskList: (state, list) => state.taskList = list,

    populatePeople: (state, people) => state.people = people,

    increment: (state) => state.count++,

    addNewPerson: (state, person) => state.people.push(person),

    completeTask: ({ taskList, completedTaskList }, task) => {
      // Instead of editing this in task comp, only mutate the task object here, in the mutation handler
      task.completed = true;
      taskList.splice(taskList.indexOf(task), 1);
      completedTaskList.push(task);
    },

    undoTaskCompletion: ({ taskList, completedTaskList }, task) => {
      task.completed = false;
      completedTaskList.splice(completedTaskList.indexOf(task), 1);
      taskList.push(task);
    },

  },

  // actions commit mutations, and can handle async tasks
  actions: {

    // Storing ajax calls as functions will make the available later instead of simply calling them in mounted hook
    // Actions accept a context object, which is similar to the state object that a mutation handler receives.
    getTaskListJson: ({ commit }) => (
      // Retrieve task list json
      axios.get('../data/taskList.json')
      .then(({ data }) => data)
      .then(json => commit('populateTaskList', json))
    ),

    getPeopleJson: ({ commit }) => (
      // Retrieve people json
      axios.get('../data/people.json')
      .then(({ data }) => data)
      .then(json => commit('populatePeople', json))
    )

  }

});
