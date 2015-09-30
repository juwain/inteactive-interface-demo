import React from 'react';

export default class LayoutEditor extends React.Component {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
  }
  onChange(e) {
    this.props.onChange(e.target.value);
  }
  render() {
    return (
      <textarea onChange={this.onChange}
                className='layout-editor'>
      </textarea>
    );
  }
}
