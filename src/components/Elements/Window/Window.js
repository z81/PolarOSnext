import React, {PropTypes} from 'react';
import Draggable  from 'react-draggable';
import { diffProps } from '../../../utils';
// import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import classNames from 'classnames';
import './Window.scss';

export const MIN  = 1;
export const MAX  = 2;
export const CLOSE = 4;
export const ALL = (MAX | MIN | CLOSE);

class Window extends React.Component {
  static propTypes = {
    children: PropTypes.any,
    active: PropTypes.number,
    onActive: PropTypes.func,
    onClose: PropTypes.func,
    onMax: PropTypes.func,
    onMin: PropTypes.func,
    footer: PropTypes.node,
    header: PropTypes.node,
    controls: PropTypes.any,
    disabled: PropTypes.any,
    config: PropTypes.any
  }

  constructor(props) {
    super(props);
    this.state = {};
  }

  onActive() {
    if (this.props.onActive) {
      this.props.onActive(this.props.config.id);
    }
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
    const {left, top, width, height, title, id, max, min, sort} = this.props.config;
    const controls = this.props.controls || ALL;
    const disabled = this.props.disabled || 0;
    const onClose  = () => !this.props.onClose || this.props.onClose(id);
    const onMin    = () => !this.props.onMin || this.props.onMin(id);
    const onMax    = () => !this.props.onMax || this.props.onMax(id);
    let className = classNames({
      'window-min': (min && (disabled ^ MIN)),
      'window-max': (max && (disabled ^ MAX))
    });
    console.log(className, this.props);
    return (
        <Draggable
        handle='.window>header>.title,.window>header>.title>*'
        start={{x: left, y: top}}
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
              width:  `${width}px`,
              height:  `${height}px`,
              zIndex: (1000 + (500 - sort))
            }}
            className={className}
            >
                <div
                  onMouseDown={this.onActive.bind(this)}
                  className="window" style={{borderRadius: '6px', position: 'fixed !important'}}
                  >

                    <header className="toolbar toolbar-header" style={{borderRadius: '6px 6px 0 0'}}>
                      <h1 className="title" style={{borderRadius: '6px 6px 0 0'}}>
                        {title}
                      <div className="controls">
                          {!(controls & MIN) || <div onClick={onMin} className={(disabled & MIN) ? "disabled min" : "min"}/>}
                          {!(controls & MAX) || <div onClick={onMax} className={(disabled & MAX) ? "disabled max" : "max"}/>}
                          {!(controls & CLOSE) || <div onClick={onClose} className={(disabled & CLOSE) ? "disabled close" : "close"}/>}
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
