import React from 'react';
import CSSModules from 'react-css-modules';
import AceEditor from 'react-ace-wrapper';
import EditorHeading from '../EditorHeading/EditorHeading.jsx';
import 'brace';
import styles from './StyleEditor.css';

class StyleEditor extends React.Component {
  constructor(props) {
    super(props);

    this.requreStyles(this.props.settings);

    this.onChange = this.onChange.bind(this);
  }
  requreStyles(settings) {
    require('brace/mode/' + settings.styleMode);
    require('brace/theme/' + settings.theme);
  }
  onChange(code) {
    //this.props.onChange(code);
  }
  render() {
    return (
      <div styleName='style-editor'>
        <EditorHeading title={this.props.settings.styleMode} />
        <AceEditor
          mode={this.props.settings.layoutMode}
          theme={this.props.settings.theme}
          name='StyleEditor'
          width='100%'
          height='100%'
          onChange={this.onChange}
        />
      </div>
    );
  }
}

export default CSSModules(StyleEditor, styles);
