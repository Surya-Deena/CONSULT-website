import {createStore} from '@reduxjs/toolkit';
import rootReducers from './index';

const store=createStore(rootReducers);

export default store;