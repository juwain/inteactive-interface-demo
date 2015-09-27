import React from 'react';
import LayoutEditor from './LayoutEditor.jsx';
import View from './View.jsx';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      layout: ''
    };

    this.setLayout = this.setLayout.bind(this);
  }
  setLayout(code) {
    clearTimeout(this.timeout);

    this.timeout = setTimeout((function() {
      this.setState({
        layout: code
      });
    }).bind(this), 1000);
  }
  render() {
    return (
      <div>
        <LayoutEditor onChange={this.setLayout} />
        <View layout={this.state.layout} />
      </div>
    );
  }
}
