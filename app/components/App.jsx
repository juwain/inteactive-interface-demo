import React from 'react';
import CSSModules from 'react-css-modules';
import StyleEditor from './Editor/StyleEditor.jsx';
import LayoutEditor from './Editor/LayoutEditor.jsx';
import View from './View/View.jsx';
import styles from './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      layout: '',
      styles: '',
      settings: {
        layoutMode: 'html',
        styleMode: 'css',
        theme: 'github'
      }
    };

    this.setLayout = this.setLayout.bind(this);
    this.setStyles = this.setStyles.bind(this);
  }
  setLayout(code) {
    clearTimeout(this.timeout);
    this.timeout = setTimeout(
      () => this.setState({layout: code}),
    1000);
  }
  setStyles(code) {
    clearTimeout(this.timeout);
    this.timeout = setTimeout(
      () => this.setState({styles: code}),
    1000);
  }
  render() {
    return (
      <div styleName='app'>
        <div styleName='editors'>
          <LayoutEditor settings={this.state.settings} onChange={this.setLayout} />
          <StyleEditor settings={this.state.settings} onChange={this.setStyles} />
        </div>
        <div styleName='view'>
          <View layout={this.state.layout} styles={this.state.styles} />
        </div>
      </div>
    );
  }
}

export default CSSModules(App, styles);
