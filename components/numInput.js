'use strict';


export const numInputComp = {

  // Passing in the parent component's values as props
  // This component receives 3 values, an initial value, a min and a max
  props: [ 'value', 'max', 'min' ],

  // Setting the prop value as the input's value
  template: `
    <input type="number" :value="value" :min="min" :max="max" @input="updateValue($event.target.value)" />
  `,

  methods: {

    updateValue(val) {

      // Can sanitize and validate value here
      // Make sure to emit val as a number and not a string
      this.$emit('input', Number(val));
    },

  },

};
