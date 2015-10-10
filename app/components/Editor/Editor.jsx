import React from 'react';
import CSSModules from 'react-css-modules';
import AceEditor from 'react-ace-wrapper';
import Heading from './Heading/Heading.jsx';
import 'brace';
import styles from './Editor.css';

class Editor extends React.Component {
  constructor(props) {
    super(props);

    this.requreStyles(this.props.settings);

    this.onChange = this.onChange.bind(this);
  }
  requreStyles(settings) {
    require('brace/mode/' + settings.mode);
    require('brace/theme/' + settings.theme);
  }
  onChange(code) {
    this.props.onChange(code);
  }
  render() {
    return (
      <div styleName='editor'>
        <Heading title={this.props.settings.title} />
        <AceEditor
          mode={this.props.settings.mode}
          theme={this.props.settings.theme}
          name={this.props.settings.name}
          width='100%'
          height='100%'
          onChange={this.onChange}
        />
      </div>
    );
  }
}

export default CSSModules(Editor, styles);
