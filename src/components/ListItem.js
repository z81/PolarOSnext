import React, { PropTypes, Component } from 'react';
import {diffObject} from '../utils';

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
    const realProps = diffObject(this.props, Object.keys(ListItem.propTypes));

    let className = this.props.header ? 'list-group-header' : 'list-group-item';
    className += this.props.active ? ' active' : '';

    return (<li {...realProps} className={className}>
      {this.props.children}
    </li>);
  }
}

export default ListItem;
