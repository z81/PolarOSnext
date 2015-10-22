import React, {PropTypes} from 'react';

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
      <div className="pane-group">
        {this.props.children}
      </div>
    );
  }
}

export default PaneGroup;
