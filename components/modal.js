'use strict';

export const taskDisplayModalComp = {

  template: `
    <div class="modal fade">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">{{ taskTitle }}</h5>
          </div>
          <div class="modal-body">
            <p>{{ msgBody }}</p>
            <label>Completed: </label>

            <input name="is-completed" type="checkbox" disabled :checked="isTaskCompleted"/>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
  `,

  created() {

    // This function will bind the selected task's information to the modals data values and then open the modal
    this.EventMain.$on('sendTaskToModal', ({ task, desc, completed }) => {
      this.taskTitle = task
      this.msgBody = desc;
      this.isTaskCompleted = completed;

      $('#msg-modal').modal();
    })

  },

  data() {
    return {
      taskTitle: '',
      msgBody: '',
      isTaskCompleted: false
    }
  }

};
