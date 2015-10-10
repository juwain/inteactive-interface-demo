import React from 'react';

export default class View extends React.Component {
  constructor(props) {
    super(props);

    this.setRawCode = this.setRawCode.bind(this);
  }
  setRawCode() {
    let code = '<style>' + this.props.styles + '</style></head><body>' + this.props.layout;

    return { __html: code };
  }
  render() {
    return (
      <div dangerouslySetInnerHTML={this.setRawCode()}>
      </div>
    );
  }
}
