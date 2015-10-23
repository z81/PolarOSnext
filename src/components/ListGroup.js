import React, { PropTypes, Component } from 'react';

class ListGroup extends Component {
  static propTypes = {
    children: PropTypes.any
  }
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (<ul className="list-group">
      {this.props.children}
    </ul>);
  }
}

export default ListGroup;
