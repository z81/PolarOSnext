import React, {PropTypes} from 'react';
import {diffObject} from '../utils';

class PaneGroup extends React.Component {
  static propTypes = {
    children: PropTypes.any
  }
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const realProps = diffObject(this.props, Object.keys(PaneGroup.propTypes));

    return (
      <div {...realProps} className="pane-group">
        {this.props.children}
      </div>
    );
  }
}

export default PaneGroup;
