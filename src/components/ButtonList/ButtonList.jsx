import React, { Component } from 'react';
import PropTypes from 'prop-types';


export default class ButtonList extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  render() {
    return <ul>{this.props.children}</ul>;
  }
}