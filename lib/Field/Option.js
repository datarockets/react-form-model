import React, { Component, PropTypes } from 'react';
import _ from 'lodash';

class OptionField extends Component {
  render() {
    return this.element(this.text(), this.attributes());
  }

  element(text, attrs) {
    return React.createElement('option', attrs, text);
  }

  attributes() {
    const attrs = _.omit(this.props, ['model', 'onChange', 'label', 'type']);
    const value = this.props.model || this.props.value;

    return {
      ...attrs,
      value,
    };
  }

  text() {
    return this.props.label || this.props.children;
  }
}

export default OptionField;
