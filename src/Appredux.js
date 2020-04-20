import React from 'react';
import { createStore } from 'redux';

import {Provider} from 'react-redux';
import reducer from './reducer';


import Show from './componentsRedux/Show'

const store = createStore(reducer);

export default () => {
    return(
        <Provider store ={store}>
            
            <Show />
        </Provider>
    )
}
