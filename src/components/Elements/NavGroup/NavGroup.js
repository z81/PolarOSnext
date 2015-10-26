import React, {PropTypes, Component} from 'react';
import { diffProps } from '../../../utils';

class NavGroup extends Component {
  static propTypes = {
    children: PropTypes.any
  }
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <nav {...diffProps(this, NavGroup)} className="nav-group">
        {this.props.children}
      </nav>
    );
  }
}

export default NavGroup;
