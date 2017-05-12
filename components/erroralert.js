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


export const taskDisplayModalComp = {

  template: `
    <div class="modal fade">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <p>{{ msgBody }}</p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
  `,

  created() {

    this.EventMain.$on('sendTaskDescriptionToModal', (desc) => {
      this.msgBody = desc;
      $('#msg-modal').modal();
    })

  },

  data() {
    return {
      msgBody: ''
    }
  }

};
