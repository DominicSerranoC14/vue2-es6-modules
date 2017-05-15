'use strict';


export const errorAlertComp = {

  // Must define props that the component can use
  props: [ 'header', 'msg' ],

  template: `
  <div class="alert alert-warning fade show" role="alert">
    <h1>{{ header }}</h1>
    <p>{{ msg }}</p>
  </div>
  `

};
