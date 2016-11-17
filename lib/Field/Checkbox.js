import React, { Component, PropTypes } from 'react';
import _ from 'lodash';

class CheckboxField extends Component {
  constructor(props) {
    super(props);

    this.key = `${props.name}_${Date.now()}`;
  }

  render() {
    return this.element(
      this.elementField(this.fieldAttrs()),
      this.elementLabel(this.labelText(), this.labelAttrs()),
    );
  }

  element(field, label) {
    return React.createElement('div', null, field, label);
  }

  elementField(attrs) {
    return React.createElement('input', attrs);
  }

  elementLabel(text, attrs) {
    return React.createElement('label', attrs, text);
  }

  fieldAttrs() {
    const attrs = _.omit(this.props, ['model', 'onChange', 'label']);

    return {
      ...attrs,
      id: this.key,
      checked: this.props.model,
      onChange: (event) => {
        this.props.onChange(event.target.checked);
      }
    };
  }

  labelAttrs() {
    return {
      htmlFor: this.key,
    };
  }

  labelText() {
    return this.props.label || this.props.children;
  }
}

export default CheckboxField;
