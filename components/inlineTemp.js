'use strict';

export const homeInlineTemp = {

  // Mounted lifecycle method is called after the created method
  mounted() {

    // Retrieve homePageContent json
    axios.get('../data/homeInlineTempData.json')
    .then(({ data }) => data)
    .then((json) => {
      this.homePageData = json;
      this.homePageResults = json;
    }),

    // Retrieve homePageSubContent json
    axios.get('../data/homeInlineTempNav.json')
    .then(({ data }) => data)
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
