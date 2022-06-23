import { createStore } from 'redux';
import { devToolsEnhancer } from '@redux-devtools/extension';
import { rootReducer } from './root-reducer';
import { loadState, saveState } from './local-storage';
import throttle from 'lodash/throttle';

// export const store = createStore(rootReducer, devToolsEnhancer());

export const configureStore = () => {
  const persistState = loadState();
  const store = createStore(rootReducer, persistState, devToolsEnhancer());

  store.subscribe(
    throttle(() => {
      saveState({
        todos: store.getState().todos,
      });
    }, 1000)
  );

  return store;
};
