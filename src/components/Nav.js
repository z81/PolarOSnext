import React, { PropTypes, Component } from 'react';
import {diffObject} from '../utils';

class Nav extends Component {
  static propTypes = {
    children: PropTypes.any,
    title: PropTypes.string,
    active: PropTypes.bool
  }
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    if (this.props.title) {
      return (<h5 className="nav-group-title"> {this.props.title} </h5>);
    }

    const realProps = diffObject(this.props, Object.keys(Nav.propTypes));
    const className = this.props.active ? 'nav-group-item active' : 'nav-group-item';

    return (
      <span {...realProps} className={className}>
        {this.props.children}
      </span>
    );
  }
}

export default Nav;
