'use strict';

export const globalStore = new Vuex.Store({
  // global data
  state: {
    count: 0,
    taskList: [],
    completedTaskList: [],
    people: [],
  },

  // global getter functions, great for filters and are available to entire app
  getters: {
    // getTaskList: (state) => state.taskList,
    // getCompletedTaskList: (state) => state.completedTaskList,
    getAllTasks: (state) => state.taskList.concat(state.completedTaskList),
    getPeopleString: (state) => state.people.map(({ name }) => name).join(', '),
    getAdults: (state) => state.people.filter(({ age }) => age >= 18),
  },

  // mutations enable us to better log our changes of state
  // they are synchronous in nature, so they shouldn't be called directly in some cases
  mutations: {

    populateTaskList (state, list) {
      state.taskList = list;
    },

    populatePeople (state, people) {
      state.people = people;
    },

    increment (state) {
      state.count++
    },

    addNewPerson(state, person) {
      state.people.push(person);
    },

    completeTask(state, task) {
      state.taskList.splice(state.taskList.indexOf(task), 1);
      state.completedTaskList.push(task);
    },
  },
  // actions dispatch mutations, and can handle async tasks
  actions: {

  }
});
