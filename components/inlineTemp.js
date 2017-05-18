'use strict';


export const homeInlineTemp = {

  // Local component data
  data() {
    return {

      title: "Home Page",
      homePageNavContent: '',
      search: null,

    }
  },

  methods: {

    getNavbarJson() {
      // Retrieve homePageSubContent json
      // Leaving this locally because only this component needs this data
      return axios.get('../data/homeInlineTempNav.json')
      .then(({ data }) => data)
      .then((json) => this.homePageNavContent = json)
    },

    // Filters the results shown on the page
    filterPage(keyword) {
      if (!keyword) {
        return this.search = null;
      }

      this.search = keyword;

    },

    // Send task to modal
    displayDescription(each) {
      this.EventMain.$emit('sendTaskToModal', each);
    },

  },

  computed: {
    // Vuex helper function which returns getAllTasks from store getters
    // Long hand for would look like: this.$state.getters.getAllTasks
    ...Vuex.mapGetters([ 'getAllTasks' ])
  },

  // Mounted lifecycle method is called after the created method
  mounted() {

    this.getNavbarJson();

  },

};
