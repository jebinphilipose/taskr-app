import React from 'react';

const Action = (props) => (
  <div>
    <button className="big-button" disabled={!props.hasTasks} onClick={props.handlePick}>What should I do?</button>
  </div>
);

export default Action;
