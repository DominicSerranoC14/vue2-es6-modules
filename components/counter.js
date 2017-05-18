'use strict';

export const counterComp = {

  template: `
    <div>
      <div class="col-sm-12">
        <span>Counter: <span v-text="count"></span></span>
        <span class="col-sm-1"></span>
        <button class="btn btn-secondary" @click="increment">Increment Counter</button>
      </div>
      <br>
      <p>People: <span v-text="people"></span></p>
    </div>
    `,

  methods: {

    // Longhand: this.$store.commit('increment')
    ...Vuex.mapMutations([ 'increment' ]),

  },

  // When accessing the global store, it should be a computed value so that the values are updated
  computed: {

    // Longhand: this.$store.state.count
    ...Vuex.mapState([ 'count' ]),

    // Longhand: this.$store.getters.getPeopleString
    ...Vuex.mapGetters({ people: 'getPeopleString' }),

  }

}
