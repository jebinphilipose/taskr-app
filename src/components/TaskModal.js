import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#app');

const TaskModal = (props) => (
  <Modal className="modal" isOpen={!!props.selectedTask} contentLabel="Selected Task" onRequestClose={props.handleCloseModal} closeTimeoutMS={200}>
    <h3 className="modal__title">Selected Task</h3>
    <p className="modal__body">{props.selectedTask}</p>
    <button className="button" onClick={props.handleCloseModal}>Okay</button>
  </Modal> 
);

export default TaskModal;
