import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './EditorHeading.css';

class EditorHeading extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div styleName='editor-heading'>
        {this.props.title}
      </div>
    );
  }
}

export default CSSModules(EditorHeading, styles);
