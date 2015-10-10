import React from 'react';
import CSSModules from 'react-css-modules';
import StyleEditor from '../Editor/StyleEditor/StyleEditor.jsx';
import LayoutEditor from '../Editor/LayoutEditor/LayoutEditor.jsx';
import View from '../View/View.jsx';
import styles from './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      layout: '',
      settings: {
        layoutMode: 'html',
        styleMode: 'css',
        theme: 'github'
      }
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
          <LayoutEditor settings={this.state.settings} onChange={this.setLayout} />
          <StyleEditor settings={this.state.settings} />
        </div>
        <div styleName='view'>
          <View layout={this.state.layout} />
        </div>
      </div>
    );
  }
}

export default CSSModules(App, styles);
