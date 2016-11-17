import React, { Component, PropTypes } from 'react';
import _ from 'lodash';

import CheckboxField from './Field/Checkbox';
import OptionField from './Field/Option';
import RadioField from './Field/Radio';
import SimpleField from './Field/Simple';

class Field extends Component {
  render() {
    if (this.props.type === 'checkbox') {
      return React.createElement(this.elementCheckbox(), this.props);
    }

    if (this.props.type === 'option') {
      return React.createElement(this.elementOption(), this.props);
    }

    if (this.props.type === 'radio') {
      return React.createElement(this.elementRadio(), this.props);
    }

    return React.createElement(this.elementSimple(), this.props);
  }

  elementCheckbox() {
    return CheckboxField;
  }

  elementOption() {
    return OptionField;
  }

  elementRadio() {
    return RadioField;
  }

  elementSimple() {
    return SimpleField;
  }
}

export default Field;
