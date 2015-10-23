import React, { Component, PropTypes }     from 'react';
import { bindActionCreators } from 'redux';
import { connect }            from 'react-redux';
import Window from '../components/Window/Window.js';
import Windows from '../components/Window/Windows.js';
import Tabs from '../components/Tabs';
import Tab from '../components/Tab';
import Button from '../components/Button';
import Pane from '../components/Pane';
import PaneGroup from '../components/PaneGroup';
import Nav from '../components/Nav';
import NavGroup from '../components/NavGroup';
import Icon from '../components/Icon';
// Normally you'd import your action creators, but I don't want to create
// a file that you're just going to delete anyways!
const actionCreators = {
  increment : () => ({ type : 'COUNTER_INCREMENT' }),
  addWindow: (win) => ({
    type : 'WINDOWS_ADD', payload: {
      title: 'test ' + Math.ceil(Math.random(1) * 1000),
      left: 100,
      top: 100,
      height: 400,
      width: 400
    }
  }),
  setActiveWindow: (active) => ({ type : 'WINDOWS_SET_ACTIVE', payload: active }),
};

// We define mapStateToProps and mapDispatchToProps where we'd normally use
// the @connect decorator so the data requirements are clear upfront, but then
// export the decorated component after the main class definition so
// the component can be tested w/ and w/o being connected.
// See: http://rackt.github.io/redux/docs/recipes/WritingTests.html
const mapStateToProps = (state) => ({
  counter : state.counter,
  windows : state.windows
});
const mapDispatchToProps = (dispatch) => ({
  actions : bindActionCreators(actionCreators, dispatch)
});


export class HomeView extends Component {
  static propTypes = {
    actions  : PropTypes.object,
    counter  : PropTypes.number,
    windows  : PropTypes.object

  }

  constructor (props) {
    super(props);
    this.state = {
      title: '11111',
      active: 0
    };
  }

  changeTitle() {
    this.setState({
      title: '55555555',
      active: 1
    });
  }

  render () {
    return (
      <div className='container'>
        <button className='btn btn-default'
                onClick={this.props.actions.addWindow.bind(this)}>
          add window
        </button>

        <Windows>
            {this.props.windows.list.map((w, i)=> {
               return (
               <Window onActive={this.props.actions.setActiveWindow}
                 key={i} left={w.left} top={w.top} width={w.width} height={w.height} title={w.title} id={w.id} sort={w.sort}
                 footer={[
                   <Button left>Отмента</Button>,
                   <Button Style="primary" right>Сохранить</Button>
                 ]}
                 header={<span style={{width: '100%'}}>
                     <div className="btn-group">
                       <Button icon="home"/>
                       <Button icon="folder" active/>
                       <Button icon="cloud"/>
                       <Button icon="popup"/>
                       <Button icon="shuffle"/>
                     </div>

                     <Button icon="home">Filters</Button>
                     <Button icon="megaphone" dropdown right/>
                 </span>}
               >
                  <Tabs active={this.state.active} onChange={(i)=>this.setState({active: i})}>
                    <Tab title={'tab' + this.state.active}>
                      <b> 11111111</b>
                      <div>test</div>
                      <Button Style="positive" onClick={this.changeTitle.bind(this)}>test</Button>
                    </Tab>
                    <Tab title="test 2">
                      222222
                    </Tab>
                    <Tab icon="plus" fixed />
                  </Tabs>
               </Window>
            )
          })}

          <Window
            key={'test'} left={10} top={1} width={150} height={100} title={'title'} id={0} sort={100}>
            test
          </Window>

          <Window
            key={'test2'} left={10} top={140} width={350} height={300} title={'title2'} id={0} sort={100}>
            <PaneGroup>
              <Pane sidebar size="sm">
                <NavGroup>
                  <Nav title="test"/>
                  <Nav active>
                    <Icon icon="download" text="Download"/>
                  </Nav>
                  <Nav>
                    <Icon icon="folder" text="folder"/>
                  </Nav>
                </NavGroup>
              </Pane>
              <Pane>
                text
              </Pane>
            </PaneGroup>
          </Window>
        </Windows>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeView);
