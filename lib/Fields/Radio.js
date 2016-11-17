import React, { Component, PropTypes } from 'react';
import _ from 'lodash';

import Field from '../Field';

class Fields extends Component {
  render() {
    return this.element(this.children());
  }

  element(children) {
    return React.createElement('div', null, children);
  }

  passDataToChildren(children) {
    return React.Children.map(children, (child) => {
      if (typeof child !== 'object') {
        return child;
      }

      if (child.type === Field || _.isFunction(child.type)) {
        return React.cloneElement(child, {
          model: this.props.model === child.props.value,
          name: this.props.name,
          type: this.props.type,
          onChange: (value) => {
            this.props.onChange(value);
          },
        });
      }

      return React.cloneElement(
        child,
        {},
        this.passDataToChildren(child.props && child.props.children),
      );
    });
  }

  children() {
    return this.passDataToChildren(this.props.children);
  }
}

export default Fields;
