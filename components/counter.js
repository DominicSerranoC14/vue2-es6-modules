'use strict';

export const counterComp = {

  template: `
    <div>
      <p>Counter: <span v-text="count"></span></p>
      <p>People: <span v-text="people"></span></p>
    </div>
    `,

  // When accessing the global store, it should be a computed value so that the values are updated
  computed: {

    count() {
      return this.$store.state.count;
    },

    people() {
      return this.$store.getters.getPeopleString;
    }

  }

}
