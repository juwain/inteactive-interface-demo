import React from 'react';
import LayoutEditor from '../LayoutEditor/LayoutEditor.jsx';
import View from '../View/View.jsx';
import './App.css';

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

    this.timeout = setTimeout(
      () => this.setState({layout: code}),
    1000);
  }
  render() {
    return (
      <div className='app'>
        <div className='layout-editor-box'>
          <LayoutEditor onChange={this.setLayout} />
        </div>
        <div className='view-box'>
          <View layout={this.state.layout} />
        </div>
      </div>
    );
  }
}
