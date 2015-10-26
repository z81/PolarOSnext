import React, { PropTypes, Component } from 'react';
import {diffProps} from '../../../utils';

class ListItem extends Component {
  static propTypes = {
    children: PropTypes.any,
    header: PropTypes.any,
    active: PropTypes.any
  }
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let className = this.props.header ? 'list-group-header' : 'list-group-item';
    className += this.props.active ? ' active' : '';

    return (<li {...diffProps(this, ListItem)} className={className}>
      {this.props.children}
    </li>);
  }
}

export default ListItem;
