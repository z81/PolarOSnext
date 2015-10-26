import React, {PropTypes} from 'react';
import { diffProps } from '../../../utils';

class PaneGroup extends React.Component {
  static propTypes = {
    children: PropTypes.any
  }
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div {...diffProps(this, PaneGroup)} className="pane-group">
        {this.props.children}
      </div>
    );
  }
}

export default PaneGroup;
