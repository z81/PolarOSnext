import React, {Component, PropTypes} from 'react';

class Windows extends Component {
  static propTypes = {
    children: PropTypes.any
  }

  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    // const { connectDropTarget } = this.props;
    return (<div className="windows" style={{width: '100vw', height: '100vh'}}>
        {this.props.children}
      </div>
    );
  }
}

export default Windows;
