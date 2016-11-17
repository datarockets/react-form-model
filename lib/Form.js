import React, { Component, PropTypes } from 'react';
import _ from 'lodash';

import Field from './Field';
import Fields from './Fields';

class Form extends Component {
  constructor(props) {
    super(props);

    this._model = props.model;
  }

  render() {
    return React.createElement('form', this.attributes(), this.children());
  }

  attributes() {
    return this.changeAttrs(_.omit(this.props, ['model', 'onChange']));
  }

  changeAttrs(attributes) {
    return attributes;
  }

  children() {
    return this.passDataToChildren(this.props.children)
  }

  updateModel(name, value) {
    const nextModel = _.set({ ...this.props.model }, name, value);
    this.props.onChange(nextModel);
  }

  passDataToChildren(children) {
    return React.Children.map(children, (child) => {
      if (typeof child !== 'object') {
        return child;
      }

      if (child.type === Field || child.type === Fields || _.isFunction(child.type)) {
        return React.cloneElement(child, {
          model: _.get(this.props.model, child.props.name),
          onChange: (value) => {
            this.updateModel(child.props.name, value);
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
}

export {
  Form as default,
  Field,
  Fields,
};
