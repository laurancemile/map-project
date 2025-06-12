import { configureStore } from "@reduxjs/toolkit";
import countriesReducer from "./features/country/CountrySlice";

const store = configureStore({
	reducer: {
		countries: countriesReducer,
	},
});

export default store;
