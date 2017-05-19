'use strict';


import { inputComp } from './input.js';
import { numInputComp } from './numInput.js';


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
      <br>
      <input-comp :value="customInput" :placeholder="'Enter your username'" @input="updateCustomInput"></input-comp>
      <num-input-comp :value="customNumInput" :min="0" :max="100" @input="updateCustomNumInput"></num-input-comp>
    </div>
  `,

  components: {
    'input-comp': inputComp,
    'num-input-comp': numInputComp,
  },

  data() {
    return {
      customInput: '',
      customNumInput: 0,
    }
  },

  methods: {

    // Longhand: this.$store.commit('increment')
    ...Vuex.mapMutations([ 'increment' ]),

    // On custom input update from inner input el, update the customInput data value
    updateCustomInput(val) {
      this.customInput = val;
    },

    updateCustomNumInput(val) {
      this.customNumInput = val;
    },

  },

  // When accessing the global store, it should be a computed value so that the values are updated
  computed: {

    // Longhand: this.$store.state.count
    ...Vuex.mapState([ 'count' ]),

    // Longhand: this.$store.getters.getPeopleString
    ...Vuex.mapGetters({ people: 'getPeopleString' }),

  }

}
