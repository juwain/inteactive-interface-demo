import React from 'react';
import Frame from 'react-frame-component';

export default class View extends React.Component {
  constructor(props) {
    super(props);
  }
  setRawCode() {
    return { __html: this.props.layout };
  }
  render() {
    return (
      <Frame width='100%' frameBorder='0'>
        <style>
          {this.props.styles}
        </style>
        <div dangerouslySetInnerHTML={this.setRawCode()}>
        </div>
      </Frame>
    );
  }
}
