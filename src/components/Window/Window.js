import React, {PropTypes} from 'react';
import Draggable  from 'react-draggable';
// import flow from 'lodash/function/flow';
import './Window.scss';

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
    id: PropTypes.number,
    sort: PropTypes.number,
    footer: PropTypes.node,
    header: PropTypes.node
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
    return (
      <Draggable
      handle=".window>header>.title,.window>header>.title>*"
      start={{x: this.props.left, y: this.props.top}}
      moveOnStartChange={false}
      zIndex={1800}
      onStart={this.handleStart}
      onDrag={this.handleDrag}
      onStop={this.handleStop}
      bounds="parent"
      >
          <div
          style={{
            width:  `${this.props.width}px`,
            height:  `${this.props.height}px`,
            zIndex: (1000 + (500 - this.props.sort))
          }}>
              <div onMouseDown={this.onActive.bind(this)} className="window" style={{borderRadius: '6px', position: 'fixed !important'}}>
                <header className="toolbar toolbar-header" style={{borderRadius: '6px 6px 0 0'}}>
                  <h1 className="title" style={{borderRadius: '6px 6px 0 0'}}>
                    {this.props.title}
                  <div className="controls">
                      <div className="close"/>
                      <div className="full"/>
                      <div className="min"/>
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

export default Window;
