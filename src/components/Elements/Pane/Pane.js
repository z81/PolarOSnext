import React, {PropTypes} from 'react';
import { diffProps } from '../../../utils';

class Pane extends React.Component {
  static propTypes = {
    children: PropTypes.any,
    sidebar: PropTypes.any,
    size: PropTypes.any
  }
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let className = 'pane';
    className += this.props.sidebar ? ' sidebar' : '';
    className += this.props.size ? ` pane-${this.props.size}` : '';

    return (
      <div {...diffProps(this, Pane)} className={className}>
        {this.props.children}
      </div>
    );
  }
}

export default Pane;
