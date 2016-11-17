import React, { Component, PropTypes } from 'react';
import _ from 'lodash';

import RadioFields from './Fields/Radio';
import SelectFields from './Fields/Select';

class Fields extends Component {
  render() {
    if (this.props.type === 'radio') {
      return React.createElement(this.elementRadio(), this.props);
    }

    if (this.props.type === 'option') {
      return React.createElement(this.elementSelect(), this.props);
    }

    return null;
  }

  elementRadio() {
    return RadioFields;
  }

  elementSelect() {
    return SelectFields;
  }
}

export default Fields;
