import React from "react";
import {
	createBrowserRouter,
	Navigate,
	RouterProvider,
} from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import GlobalStyles from "./styles/GlobalStyles";
import Search, { searchLoader } from "./features/search/Search";
import NotFound from "./ui/NotFound";
import CountryDetails, {
	countryLoader,
} from "./features/country/CountryDetails";

const router = createBrowserRouter([
	{
		element: <AppLayout />,
		children: [
			{ index: true, element: <Navigate replace to={"/search"} /> },
			{ path: "/search", element: <Search />, loader: searchLoader },
			{
				path: "/details",
				element: <CountryDetails />,
				loader: countryLoader,
				errorElement: <Error />,
			},
		],
		errorElement: <Error />,
	},
	{ path: "*", element: <NotFound /> },
]);

function App() {
	return (
		<>
			<GlobalStyles />
			<RouterProvider router={router} />;
		</>
	);
}

export default App;
