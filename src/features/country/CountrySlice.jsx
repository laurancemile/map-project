import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	countries: [],
};

const countrySlice = createSlice({
	name: "countries",
	initialState,
	reducers: {
		createCountry: {
			prepare(name, data) {
				return {
					payload: { name, data },
				};
			},
			reducer(state, action) {
				const { name, data } = action.payload;
				const country = state.countries.find((c) => c.name === name);

				if (!country) {
					state.countries.push(data);
				}
			},
		},
	},
});

export const getAllCities = (store) => store.countries.countries;

export default countrySlice.reducer;
export const { createCountry } = countrySlice.actions;
