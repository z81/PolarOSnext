import { createReducer } from 'utils';

// normally this would be imported from /constants, but in trying to keep
// this starter kit as small as possible we'll just define it here.
const WINDOWS_ADD = 'WINDOWS_ADD';
const WINDOWS_SET_ACTIVE = 'WINDOWS_SET_ACTIVE';
const WINDOWS_CLOSE = 'WINDOWS_CLOSE';

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
    state.list.forEach((w, i)=> {
      if (id !== w.id) {
        newList.push(w);
      }
    });

    state.list = newList;
    return Object.assign({}, state);
  }
});
