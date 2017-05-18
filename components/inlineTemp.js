'use strict';

// This breaks localhost
// Need to import this here for testing purposes, it was not defined in the spec file
// import axios from 'axios';

export const homeInlineTemp = {

  // This will pull in the template for testing
  render: () => document.querySelector('#home-inline-template'),

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

  // Mounted lifecycle method is called after the created method
  mounted() {

    this.getNavbarJson();

  },

};
