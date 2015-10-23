import React, {PropTypes, Component} from 'react';

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
      <nav className="nav-group">
        {this.props.children}
      </nav>
    );
  }
}

export default NavGroup;
