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
const borderSizeDefault = 7;
const resize = {
  NONE: 'default',
  TOP:'n-resize',
  BOTTOM: 'n-resize',
  LEFT: 'e-resize',
  RIGHT: 'e-resize',
  TOPLEFT: 'se-resize',
  TOPRIGHT: 'sw-resize',
  BOTTOMLEFT: 'sw-resize',
  BOTTOMRIGHT: 'se-resize'
};

class Window extends React.Component {
  static propTypes = {
    children: PropTypes.any,
    active: PropTypes.number,
    onChangePos: PropTypes.func,
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
    this.state = {
      resizeType: 'NONE',
      isDrag: false,
      isResize: false,
      resizeStartPos: [0, 0]
    };
  }

  onActive() {
    if (this.props.onActive) {
      this.props.onActive(this.props.config.id);
    }
  }

  _handleStart(event, ui) {
    this.setState({
      isDrag: true
    });
    // console.log('Event: ', event);
    // console.log('Position: ', ui.position);
  }

  _handleDrag(event, ui) {
    // console.log('Event: ', event);
    console.warn('Position: ', ui);
    const conf = this.props.config;
    const pos = {
      left: ui.node.offsetWidth,
      top: ui.node.offsetHeight
    };

    if (this.props.onChangePos) {
      this.props.onChangePos({position: ui.position, id: conf.id});
    }
  }

  _handleStop(event, ui) {
    this.setState({
      isDrag: false
    });
    // console.log('Event: ', event);
    /* if (this.props.onChangePos) {
      this.props.onChangePos({position: ui.position, id: this.props.config.id});
    }*/
  }


  _borderMouseDown(e) {
    if (e.button === 0 && this.state.resizeType !== 'NONE') {
        this.setState({
          isResize: true,
          resizeStartPos: [e.clinetX, e.clientY]
        });
    }
  }

  _borderMouseUp(e) {
    this.setState({
      isResize: false
    });
  }

  _borderMouseMove(e) {
    if (this.state.isDrag) return false;

    const {left, top, width, height} = this.props.config;
    const x = e.clientX;
    const y = e.clientY;
    /* console.info(`events: [${x}, ${y}]`);
    console.info(`pos: [${left}, ${top}]`);
    console.info(`size: [${left+width}, ${top+height}]`);*/

    let resizeType = {
      left: x - borderSizeDefault <= left,
      right: x >= left + width - borderSizeDefault,
      top: y - borderSizeDefault * 2 <= top,
      bottom: y >= top + height + borderSizeDefault,
    };

    // console.log(resizeType, y - borderSize * 2, top);

    if (resizeType.left && resizeType.top) {
      resizeType = 'TOPLEFT';
    } else if (resizeType.left && resizeType.bottom) {
      resizeType = 'BOTTOMLEFT';
    } else if (resizeType.right && resizeType.top) {
      resizeType = 'TOPRIGHT';
    } else if (resizeType.right && resizeType.bottom) {
      resizeType = 'BOTTOMRIGHT';
    } else if (!resizeType.right && !resizeType.bottom && !resizeType.left && !resizeType.top) {
      resizeType = 'NONE';
    } else if (resizeType.right) {
      resizeType = 'RIGHT';
    } else if (resizeType.left) {
      resizeType = 'LEFT';
    } else if (resizeType.top) {
      resizeType = 'TOP';
    } else if (resizeType.bottom) {
      resizeType = 'BOTTOM';
    }

    if (e.buttons === 1) {
      if (this.state.isDrag !== true) {
        // console.info('Resize start', e.pageX, e.pageY);
        this.state.isDrag = true;
        this.state.resizeStartPos = [e.pageX, e.pageY];
      } else {
        // console.info('Resize progress', e.pageX, e.pageY);
        // this.state.left = this.state.resizeStartPos[0] - e.pageX;
        // this.state.top  = this.state.resizeStartPos[1] - e.pageY;
      }
    } else {
      // console.info('Resize stop');
      this.state.isDrag = false;
    }

    this.state.resizeType = resizeType;

    this.setState(this.state);
  }

  // Todo: move style to class
  render() {
    const {left, top, width, height, title, id, max, min, sort} = this.props.config;
    const controls = this.props.controls || ALL;
    const disabled = this.props.disabled || 0;
    const onClose  = () => !this.props.onClose || this.props.onClose(id);
    const onMin    = () => !this.props.onMin || this.props.onMin(id);
    const onMax    = () => !this.props.onMax || this.props.onMax(id);
    const borderSize = borderSizeDefault; //this.state.isDrag ? 1000 : borderSizeDefault;
    const className = classNames({
      'window-wrapper': true,
      'window-min': (min && (disabled ^ MIN)),
      'window-max': (max && (disabled ^ MAX))
    });
    // console.log(className, this.props);
    return (
        <Draggable
        handle='.window>header>.title,.window>header>.title>*'
        start={{x: left, y: top}}
        moveOnStartChange={false}
        zIndex={1800}
        onStart={this._handleStart.bind(this)}
        onDrag={this._handleDrag.bind(this)}
        onStop={this._handleStop.bind(this)}
        bounds="parent"
        >
            <div
            {...diffProps(this, Window)}
            style={{
              width:  `${(width + borderSize * 2)}px`,
              height:  `${(height + borderSize * 2)}px`,
              zIndex: (1000 + (500 - sort)),
              cursor: resize[this.state.resizeType]
            }}
            className={className}
            onMouseMove={this._borderMouseMove.bind(this)}
            >
                <div
                  onMouseDown={this.onActive.bind(this)}
                  className="window" style={{borderRadius: '6px', position: 'fixed !important', margin: `${borderSize}px`}}
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
