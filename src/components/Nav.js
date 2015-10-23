import React, { PropTypes, Component } from 'react';

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

    const className = this.props.active ? 'nav-group-item active' : 'nav-group-item';

    return (
      <span className={className}>
        {this.props.children}
      </span>
    );
  }
}

export default Nav;
