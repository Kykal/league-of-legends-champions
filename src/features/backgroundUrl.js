import { createSlice } from '@reduxjs/toolkit';

export const backgroundUrlSlice = createSlice({
	name: "backgroundUrl",
	initialState: "",
	reducers: {
		changeBackgroundUrl: (state, actions) => {
			return state = actions.payload;
		}
	}
});

export const {
	changeBackgroundUrl
} = backgroundUrlSlice.actions;

export default backgroundUrlSlice.reducer;
