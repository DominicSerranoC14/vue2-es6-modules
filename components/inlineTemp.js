'use strict';

export const homeInlineTemp = {
 
  // Mounted lifecycle method is called after the created method
  mounted() {

    // Retrieve homePageContent json
    fetch('../data/homeInlineTempData.json')
    .then(data => data.json())
    .then((json) => {
      this.homePageData = json;
      this.homePageResults = json;
    }),

    // Retrieve homePageSubContent json
    fetch('../data/homeInlineTempNav.json')
    .then(data => data.json())
    .then((json) => this.homePageNavContent = json)

  },

  data() {
    return {

      title: "Home Page",
      homePageData: '',
      homePageNavContent: '',
      homePageResults: ''

    }
  },

  methods: {

    // Filters the results shown on the page
    filterPage(keyword) {
      if (!keyword) {
        this.homePageResults = this.homePageData;
        return;
      }

      const filteredResults = this.homePageData.filter( each => each.page == keyword);
      this.homePageResults = filteredResults;
    },

    // Send task to modal
    displayDescription(each) {
      this.EventMain.$emit('sendTaskToModal', each);
    },

  }

};
