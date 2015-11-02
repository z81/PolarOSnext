import { createReducer } from 'utils';

// normally this would be imported from /constants, but in trying to keep
// this starter kit as small as possible we'll just define it here.
const WINDOWS_ADD = 'WINDOWS_ADD';
const WINDOWS_SET_ACTIVE = 'WINDOWS_SET_ACTIVE';
const WINDOWS_CLOSE = 'WINDOWS_CLOSE';
const WINDOWS_MIN = 'WINDOWS_MIN';
const WINDOWS_MAX = 'WINDOWS_MAX';
const WINDOWS_UNMIN = 'WINDOWS_UNMIN';
const WINDOWS_CHANGE_POS = 'WINDOWS_CHANGE_POS';

const initialState = {
  list: [],
  active: 0
};
export default createReducer(initialState, {
  [WINDOWS_ADD] : (state, win) => {
    win.id = (new Date()).getTime();
    win.sort = state.list.length * -1;
    state.list.push(win);
    return Object.assign({}, state);
  },
  [WINDOWS_SET_ACTIVE] : (state, active) => {

    state.list.map((w, i)=> {
      w.sort = (active === w.id) ?  0  :  i + 1;
      return w;
    });

    return Object.assign({}, state);
  },
  [WINDOWS_CLOSE] : (state, id) => {
    let newList = [];
    state.list.forEach((w)=> {
      if (id !== w.id) {
        newList.push(w);
      }
    });

    state.list = newList;
    return Object.assign({}, state);
  },
  [WINDOWS_MIN] : (state, id) => {
    state.list.map((w)=> {
      if (id === w.id) {
        w.min = true;
      }
      return w;
    });

    return Object.assign({}, state);
  },
  [WINDOWS_UNMIN] : (state, id) => {
    state.list.map((w)=> {
      if (id === w.id) {
        w.min = false;
      }
      return w;
    });

    return Object.assign({}, state);
  },
  [WINDOWS_MAX] : (state, id) => {
    state.list.map((w)=> {
      if (id === w.id) {
        w.max = true;
      }
      return w;
    });

    return Object.assign({}, state);
  },
  [WINDOWS_CHANGE_POS] : (state, data) => {
    state.list.map((w)=> {
      if (data.id === w.id) {
        w.left = data.position.left;
        w.top = data.position.top;
      }
      return w;
    });

    return Object.assign({}, state);
  }
});
