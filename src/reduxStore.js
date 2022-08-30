import { configureStore } from '@reduxjs/toolkit';


//Reducers
import backgroundReducer from 'features/backgroundUrl';


export const store = configureStore({
	reducer: {
		backgroundUrl: backgroundReducer,
	},
});
