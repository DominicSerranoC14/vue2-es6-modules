'use strict';

export const counterComp = {

  template: `<div>{{ count }}</div>`,

  // When accessing the global store, it should be a computed value so that the values are updated
  computed: {

    count() {
      return this.$store.state.count;
    }

  }

}
