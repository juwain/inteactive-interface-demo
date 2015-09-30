import React from 'react';

export default class View extends React.Component {
  constructor(props) {
    super(props);

    this.setRawCode = this.setRawCode.bind(this);
  }
  setRawCode() {
    return { __html: this.props.layout };
  }
  render() {
    return (
      <div className='view' dangerouslySetInnerHTML={this.setRawCode()}>
      </div>
    );
  }
}
