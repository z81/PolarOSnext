import React, {PropTypes} from 'react';
import { diffProps } from '../../../utils';

class Button extends React.Component {
  static propTypes = {
    children: PropTypes.any,
    Style:  PropTypes.string,
    size:  PropTypes.string,
    icon:  PropTypes.string,
    dropdown: PropTypes.any,
    right: PropTypes.any,
    left: PropTypes.any,
    active: PropTypes.any
  }
  constructor(props) {
    super(props);

    this.state = {
      btnStyles: {
        'default': 'btn-default',
        'primary': 'btn-primary',
        'positive': 'btn-positive',
        'negative': 'btn-negative',
        'warning': 'btn-warning'
      }
    };
  }

  render() {
    const Style = this.props.Style || 'default';
    let btnClass = `btn btn-${this.state.size} ${this.state.btnStyles[Style]}`;
    let iconClass = '';

    if (this.props.icon) {
      if (this.props.children) {
        iconClass = `icon icon-${this.props.icon} icon-text`;
      } else {
        iconClass = `icon icon-${this.props.icon}`;
      }
    }

    if (this.props.right) {
      btnClass += ' pull-right';
    }

    if (this.props.left) {
      btnClass += ' pull-left';
    }

    if (this.props.dropdown) {
      btnClass += ' btn-dropdown';
    }

    return (
      <button className={btnClass} {...diffProps(this, Button)}>
      <span>
        <span className={iconClass}/>
        {this.props.children}
      </span>
      </button>
    );
  }
}

export default Button;
