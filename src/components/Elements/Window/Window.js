import React, {PropTypes} from 'react';
import Draggable  from 'react-draggable';
import { diffProps } from '../../../utils';
// import flow from 'lodash/function/flow';
import './Window.scss';

export const MIN  = 1;
export const MAX  = 2;
export const CLOSE = 4;
export const ALL = (MAX | MIN | CLOSE);

class Window extends React.Component {
  static propTypes = {
    left: PropTypes.number,
    top: PropTypes.number,
    width: PropTypes.number,
    height: PropTypes.number,
    title: PropTypes.string,
    children: PropTypes.any,
    active: PropTypes.number,
    onActive: PropTypes.func,
    onClose: PropTypes.func,
    onMax: PropTypes.func,
    onMin: PropTypes.func,
    id: PropTypes.number,
    sort: PropTypes.number,
    footer: PropTypes.node,
    header: PropTypes.node,
    controls: PropTypes.any,
    disabled: PropTypes.any,
    min: PropTypes.any,
    max: PropTypes.any
  }

  constructor(props) {
    super(props);
    this.state = {
      left: props.left || 0,
      top: props.top || 0,
      width: props.width || 200,
      height: props.height || 200,
      title: props.title || ''
    };
  }

  onActive() {
    this.props.onActive(this.props.id);
  }

  handleStart(event, ui) {
    // console.log('Event: ', event);
    // console.log('Position: ', ui.position);
  }

  handleDrag(event, ui) {
    // console.log('Event: ', event);
    // console.log('Position: ', ui.position);
  }

  handleStop(event, ui) {
    // console.log('Event: ', event);
    // console.log('Position: ', ui.position);
  }

  // Todo: move style to class
  render() {
    const controls = this.props.controls || ALL;
    const disabled = this.props.disabled || 0;
    const close = () => !this.props.onClose || this.props.onClose(this.props.id);
    const min = () => !this.props.onMin || this.props.onMin(this.props.id);
    const max = () => !this.props.onMax || this.props.onMax(this.props.id);
    let className = '';
    className += (!this.props.min && !(disabled & MIN)) || ' window-min ';
    className += (!this.props.max && !(disabled & MAX))  || ' window-max ';
    return (
      <Draggable
      handle='.window>header>.title,.window>header>.title>*'
      start={{x: this.props.left, y: this.props.top}}
      moveOnStartChange={false}
      zIndex={1800}
      onStart={this.handleStart}
      onDrag={this.handleDrag}
      onStop={this.handleStop}
      bounds="parent"
      >
          <div
          {...diffProps(this, Window)}
          style={{
            width:  `${this.props.width}px`,
            height:  `${this.props.height}px`,
            zIndex: (1000 + (500 - this.props.sort))
          }}
          className={className}
          >
              <div
                onMouseDown={this.onActive.bind(this)}
                className="window" style={{borderRadius: '6px', position: 'fixed !important'}}
                >

                  <header className="toolbar toolbar-header" style={{borderRadius: '6px 6px 0 0'}}>
                    <h1 className="title" style={{borderRadius: '6px 6px 0 0'}}>
                      {this.props.title}
                    <div className="controls">
                        {!(controls & MIN) || <div onClick={min} className={(disabled & MIN) ? "disabled min" : "min"}/>}
                        {!(controls & MAX) || <div onClick={max} className={(disabled & MAX) ? "disabled max" : "max"}/>}
                        {!(controls & CLOSE) || <div onClick={close} className={(disabled & CLOSE) ? "disabled close" : "close"}/>}
                      </div>
                    </h1>
                    {!this.props.header || <div className="toolbar-actions">
                        {this.props.header}
                    </div>}
                  </header>

                  <div className="window-content">
                    {this.props.children}
                  </div>

                 {!this.props.footer || <footer className="toolbar toolbar-footer">
                  <div className="toolbar-actions">
                    {this.props.footer}
                  </div>
                 </footer>}

             </div>
          </div>
      </Draggable>
    );
  }
}

Window.MIN   = MIN;
Window.MAX   = MAX;
Window.CLOSE = CLOSE;
Window.ALL   = ALL;

export default Window;
