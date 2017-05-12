'use strict';

export const errorAlertComp = {

  // Must define props that the component can use
  props: [ 'header', 'msg' ],

  template: `
  <div class="alert alert-warning alert-dismissible fade show" role="alert">
    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
    <h1>{{ header }}</h1>
    <p>{{ msg }}</p>
  </div>
  `

};
