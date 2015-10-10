import React from 'react';
import CSSModules from 'react-css-modules';
import Editor from './Editor/Editor.jsx';
import View from './View/View.jsx';
import styles from './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      layout: '',
      styles: ''
    };

    this.settings = {
      layout: {
        mode: 'html',
        theme: 'github',
        title: 'HTML',
        name: 'LayoutEditor'
      },
      styles: {
        mode: 'css',
        theme: 'github',
        title: 'CSS',
        name: 'StyleEditor'
      }
    }
  }
  update(mode, code) {
    clearTimeout(this.timeout);

    let state = {};
    state[mode] = code;

    this.timeout = setTimeout(
      () => this.setState(state),
    1000);
  }
  render() {
    return (
      <div styleName='app'>
        <div styleName='editors'>
          <Editor settings={this.settings.layout} onChange={this.update.bind(this, 'layout')} />
          <Editor settings={this.settings.styles} onChange={this.update.bind(this, 'styles')} />
        </div>
        <div styleName='view'>
          <View layout={this.state.layout} styles={this.state.styles} />
        </div>
      </div>
    );
  }
}

export default CSSModules(App, styles);
