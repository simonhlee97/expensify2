import { createStore } from 'redux';

// Action Generators - functions that return action objects
const incrementCount = () => ({
		type: 'INCREMENT'
})

const store = createStore((state = { count: 0 }, action) => {
	// console.log('keep on running')

	switch(action.type) {
		case 'INCREMENT':
			const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1 // <- Default Increment Value
			return {
				count: state.count + incrementBy
			};
		case 'DECREMENT':
			const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 10
			return {
				count: state.count - decrementBy
			};
		case 'SET':
			return {
				count: action.count     // what is action.count?
			}
		case 'RESET':
			return {
				count: 0
			};
		default:
			return state;
	}
});

// every time there are changes in Store, subscribe will run
// store.subscribe(() => {
// 	console.log(store.getState());
// })

const unsubscribe = store.subscribe(() => {
	console.log(store.getState());
})

// Actions

// store.dispatch sends the action to the store
// store.dispatch({
// 	type: 'INCREMENT',
// 	incrementBy: 5
// });

store.dispatch(incrementCount({incrementBy: 5}))

// RESET
store.dispatch({
	type: 'RESET'
});

// unsubscribe();

store.dispatch({
	type: 'DECREMENT',
	decrementBy: 10	
});

store.dispatch({
	type: 'SET',
	count: 1
})
