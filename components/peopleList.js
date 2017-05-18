'use strict';

export const peopleListTemp = {

  data() {
    return {

      message: 'I am Groot',
      newName: null,
      newAge: null,
      nameError: false,
      ageError: false,
      newNamePlaceholder: 'Enter a name to add',
      addingName: false,

    }
  },

  methods: {

    validateNewPerson() {
      if (!this.newName) {
        this.nameError = true;
      } else {
        this.nameError = false;
      }

      if (!this.newAge) {
        this.ageError = true;
      } else {
        this.ageError = false;
      }

      if (this.ageError || this.nameError) {
        return;
      }

      this.addNewPerson();
    },

    addNewPerson() {
      // Playing around with dynamically toggling a button disable
      this.addingName = true;
      setTimeout(() => {
        this.addingName = false
        this.$store.commit({ type: 'addNewPerson', name: this.newName, age: this.newAge });
        this.newName = null;
        this.newAge = null;
      }, 1000);
    },

  }

};
