import React, {Component, PropTypes} from 'react';
import { diffProps } from '../../../utils';

class Windows extends Component {
  static propTypes = {
    children: PropTypes.any
  }

  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (<div {...diffProps(this, Windows)} className="windows" style={{width: '100vw', height: '100vh'}}>
        {this.props.children}
      </div>
    );
  }
}

export default Windows;
