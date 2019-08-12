import React from 'react';
import Header from './Header';

export default class TaskrApp extends React.Component {
  render() {
    const subtitle = 'Remember everything important';

    return (
      <Header subtitle={subtitle} />
    );
  }
}
