import {createStore, combineReducers} from 'redux';


// Expenses Reducer:
const expensesReducerDefaultState = [];

const expensesReducer = (state = [], action) => {
	switch (action.type) {
		default:
			return state;
	}
};

// Expenses Reducer
const filtersReducerDefaultState = {
	text: '',
	sortBy: 'date',
	startDate: undefined,
	endDate: undefined
};
const filtersReducer = (state = filtersReducerDefaultState, action) => {
	switch (action.type) {
		default:
			return state;
	}
}

// Store creation
const store = createStore(
	combineReducers({
		expenses: expensesReducer,
		filters: filtersReducer
	})
);

console.log(store.getState());

const demoState = {
	expenses: [{
		id: 'wiefjojiwefoj',
		description: 'April Rent',
		note: 'This is final payment for that address',
		amount: 54500, // (in pennies. $545)
		createdAt: 0
	}],
	filters: {
		text: 'rent',
		sortBy: 'date',
		startDate: undefined,
		endDate: undefined // date or 'amount'
	}
}