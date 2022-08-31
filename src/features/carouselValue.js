import { createSlice } from "@reduxjs/toolkit";

export const carouselSlice = createSlice({
	name: "carouselValue",
	initialState: {
		min: 0,
		actual: 0,
		max: 0
	},
	reducers: {
		nextSkin: (state, action) => void(state.actual -= 100),

		prevSkin: (state, action) => void(state.actual += 100),

		updateMax: (state, action) => void(state.max = action.payload),

		resetValues: (state, action) => {
			const newValues = {
				min: 0,
				actual: 0,
				max: 0,
			};

			return state = newValues
		}
	},
});

export const {
	nextSkin,
	prevSkin,
	updateMax,
	resetValues
} = carouselSlice.actions;

export default carouselSlice.reducer;
