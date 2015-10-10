import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './View.css';

class View extends React.Component {
  constructor(props) {
    super(props);

    this.setRawCode = this.setRawCode.bind(this);
  }
  setRawCode() {
    return { __html: this.props.layout };
  }
  render() {
    return (
      <div styleName='view' dangerouslySetInnerHTML={this.setRawCode()}>
      </div>
    );
  }
}

export default CSSModules(View, styles);
