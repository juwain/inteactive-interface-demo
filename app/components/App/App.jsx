import React from 'react';
import CSSModules from 'react-css-modules';
import LayoutEditor from '../LayoutEditor/LayoutEditor.jsx';
import View from '../View/View.jsx';
import styles from './App.css';

class App extends React.Component {
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
      <div styleName='layout'>
        <div styleName='editors'>
          <LayoutEditor onChange={this.setLayout} />
        </div>
        <div styleName='view'>
          <View layout={this.state.layout} />
        </div>
      </div>
    );
  }
}

export default CSSModules(App, styles);
