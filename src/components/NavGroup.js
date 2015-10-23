import React, {PropTypes, Component} from 'react';
import {diffObject} from '../utils';

class NavGroup extends Component {
  static propTypes = {
    children: PropTypes.any
  }
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const realProps = diffObject(this.props, Object.keys(NavGroup.propTypes));

    return (
      <nav {...realProps} className="nav-group">
        {this.props.children}
      </nav>
    );
  }
}

export default NavGroup;
