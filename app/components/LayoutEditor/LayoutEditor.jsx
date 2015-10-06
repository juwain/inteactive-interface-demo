import React from 'react';
import CSSModules from 'react-css-modules';
import AceEditor from 'react-ace-wrapper';
import 'brace';
import styles from './LayoutEditor.css';

class LayoutEditor extends React.Component {
  constructor(props) {
    super(props);

    this.requreStyles(this.props.settings);

    this.onChange = this.onChange.bind(this);
  }
  requreStyles(settings) {
    require('brace/mode/' + settings.layoutMode);
    require('brace/theme/' + settings.theme);
  }
  onChange(code) {
    this.props.onChange(code);
  }
  render() {
    return (
      <div styleName='layout-editor'>
        <AceEditor
          mode={this.props.settings.layoutMode}
          theme={this.props.settings.theme}
          name='LayoutEditor'
          width='100%'
          height='100%'
          onChange={this.onChange}
        />
      </div>
    );
  }
}

export default CSSModules(LayoutEditor, styles);
