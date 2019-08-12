import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#app');

const TaskModal = (props) => (
  <Modal isOpen={!!props.selectedTask} contentLabel="Selected Task" onRequestClose={props.handleCloseModal}>
    <h3>Selected Task</h3>
    <p>{props.selectedTask}</p>
    <button onClick={props.handleCloseModal}>Okay</button>
  </Modal> 
);

export default TaskModal;
