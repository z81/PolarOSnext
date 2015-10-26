import React, { PropTypes, Component } from 'react';
import { diffProps } from '../../../utils';

class ListGroup extends Component {
  static propTypes = {
    children: PropTypes.any
  }
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (<ul {...diffProps(this, ListGroup)} className="list-group">
      {this.props.children}
    </ul>);
  }
}

export default ListGroup;
