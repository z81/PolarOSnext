import React, {Component, PropTypes} from 'react';
import {diffObject} from '../../utils';

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
    const realProps = diffObject(this.props, Object.keys(Windows.propTypes));

    return (<div {...realProps} className="windows" style={{width: '100vw', height: '100vh'}}>
        {this.props.children}
      </div>
    );
  }
}

export default Windows;
