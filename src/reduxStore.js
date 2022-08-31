import { configureStore } from '@reduxjs/toolkit';


//Reducers
import backgroundReducer	from 'features/backgroundUrl';
import carouselValue			from 'features/carouselValue';


export const store = configureStore({
	reducer: {
		backgroundUrl: backgroundReducer,
		carouselValue: carouselValue,
	},
});
