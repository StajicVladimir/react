import { createStore } from 'redux';

const intialState = {counter: 0, toggle: true};
const counterReducer = (state = intialState, action) => {
    if (action.type === 'increment') {
        return {counter: state.counter + 1,
        toggle: state.toggle};
    };

    if (action.type === 'increase') {
        return {counter: state.counter + action.amount,
            toggle: state.toggle};
    };

    if (action.type === 'decrement') {
        return {counter: state.counter - 1,
            toggle: state.toggle};
    }   

    if(action.type === 'toggle') {
        return {counter: state.counter,
        toggle: !state.toggle};
    }

    return state;
};

const store = createStore(counterReducer);

export default store;