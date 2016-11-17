import React, { Component, PropTypes } from 'react';
import _ from 'lodash';

import Field from '../Field';

class Fields extends Component {
  render() {
    return this.element(this.fieldAttrs(), this.children());
  }

  element(attrs, children) {
    return React.createElement('select', attrs, children);
  }

  fieldAttrs() {
    const attrs = _.omit(this.props, ['model', 'type']);

    return {
      ...attrs,
      value: this.props.model,
    };
  }

  passDataToChildren(children) {
    return React.Children.map(children, (child) => {
      if (typeof child !== 'object') {
        return child;
      }

      if (child.type === Field || _.isFunction(child.type)) {
        return React.cloneElement(child, { type: this.props.type });
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
