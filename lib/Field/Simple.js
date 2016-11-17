import React, { Component, PropTypes } from 'react';
import _ from 'lodash';

class SimpleField extends Component {
  render() {
    return this.element(this.attributes());
  }

  element(attrs) {
    return React.createElement('input', attrs);
  }

  attributes() {
    const attrs = _.omit(this.props, ['model', 'onChange']);

    return {
      ...attrs,
      value: this.props.model,
      onChange: (event) => {
        this.props.onChange(event.target.value);
      }
    };
  }
}

export default SimpleField;
