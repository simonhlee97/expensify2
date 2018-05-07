import { createStore } from 'redux';

const store = createStore((state = { count: 0}, action) => {
	console.log('keep on running')

	switch(action.type) {
		case 'INCREMENT':
			return {
				count: state.count + 1
			};
		case 'DECREMENT':
			return {
				count: state.count - 1
			};
		case 'RESET':
			return {
				count: 0
			};
		default:
			return state;
	}
});

store.subscribe(() => {
	console.log(store.getState());
})


// Actions

// store.dispatch sends the action to the store
store.dispatch({
	type: 'INCREMENT'	
});

// RESET
store.dispatch({
	type: 'RESET'
});

store.dispatch({
	type: 'DECREMENT'	
});
