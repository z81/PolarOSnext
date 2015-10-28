import React, { PropTypes, Component } from 'react';
import { diffProps } from '../../utils';
import './StartBtn.scss';

class StartBtn extends Component {
  static propTypes = {
    position: PropTypes.any
  }

  constructor(props) {
    super(props);
    this.state = {
      startShow: false
    };
  }

  showMenu() {
      this.setState({
        startShow: !this.state.startShow
      })
  }

  render() {
    return (
      <span>
        {!this.state.startShow || <span id="startbtn-menu">
          start menu
        </span>}
        <span {...diffProps(this, StartBtn)} id="startbtn" onClick={this.showMenu.bind(this)} />
      </span>
    );
  }
}

export default StartBtn;
