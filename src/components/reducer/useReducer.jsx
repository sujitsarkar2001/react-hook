export const initialState = {
    count: 0
};

export const reducer = (state, action) => {

    switch (action.type) {
        case 'increment':
            return {count: state.count + action.value};
        case 'decrement':
            return {count: state.count - action.value};
        case 'reset':
            return initialState;
        default:
            return state;
    }
}