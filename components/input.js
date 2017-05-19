'use strict';


export const inputComp = {

  // Passing in the parent component's value as a prop
  props: [ 'value', 'placeholder' ],

  // Setting the prop value as the input's value
  template: `
    <input type="text" :value="value" :placeholder="placeholder" @input="updateValue($event.target.value)" />
  `,

  methods: {

    updateValue(val) {

      // Can sanitize and validate value here
      this.$emit('input', val);
    },

  },

};
