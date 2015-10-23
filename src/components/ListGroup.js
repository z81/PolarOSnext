import React, { PropTypes, Component } from 'react';
import {diffObject} from '../utils';

class ListGroup extends Component {
  static propTypes = {
    children: PropTypes.any
  }
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const realProps = diffObject(this.props, Object.keys(ListGroup.propTypes));

    return (<ul {...realProps} className="list-group">
      {this.props.children}
    </ul>);
  }
}

export default ListGroup;
