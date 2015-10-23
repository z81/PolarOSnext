import React, { PropTypes, Component } from 'react';

class input extends Component {
  static propTypes = {
    children: PropTypes.any,
    type: PropTypes.any,
    label: PropTypes.any,
  }
  
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (<div className="form-group">
      <label>{this.props.label}</label>
      {this.props.type == 'textarea' ?
        (<textarea className="form-control" rows="3"></textarea>) :
        (<input type={this.props.type} className="form-control"/>)
      }
    </div)>;
  }
}

export default ListItem;
