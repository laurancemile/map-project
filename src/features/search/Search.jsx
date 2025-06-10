import React, { useEffect, useState } from "react";
import Input from "../../ui/Input";
import Button from "../../ui/Button";
import styled from "styled-components";
import { useLoaderData, useNavigate } from "react-router-dom";

function Search() {
	const [inputValue, setInputValue] = useState("");
	const [errorMsg, setErrorMsg] = useState("");

	const { isLoading, data } = useLoaderData(); // Data from loader function
	const navigate = useNavigate(); // For navigation

	function handleSearch() {
		setErrorMsg("");
		if (!inputValue) return;
		navigate(`?query=${encodeURIComponent(inputValue)}`);
	}

	useEffect(() => {
		if (data) {
			const lat = data.at(0)?.lat;
			const lng = data.at(0)?.lon;

			if (lat && lng) {
				navigate(`/details?lat=${lat}&lng=${lng}`);
			} else if (inputValue) {
				setErrorMsg(
					`No results found for "${inputValue}". Please try another query.`
				);
			}
		}
	}, [data, navigate, inputValue]);

	return (
		<SearchStyles>
			<Input
				value={inputValue}
				onChange={(e) => setInputValue(e.target.value)}
			/>
			<Button disabled={isLoading} onClick={handleSearch}>
				{isLoading ? "Loading" : "Search"}
			</Button>
			{errorMsg && <ErrorMsg>{errorMsg}</ErrorMsg>}
		</SearchStyles>
	);
}

export async function searchLoader({ request }) {
	const url = new URL(request.url);
	const query = url.searchParams.get("query") || "";
	if (!query) return { isLoading: false, data: null };

	try {
		const response = await fetch(
			`http://api.openweathermap.org/geo/1.0/direct?q=${query}&appid=${
				import.meta.env.VITE_MAP_API
			}`
		);

		if (!response.ok) {
			const errorData = await response.json();
			throw new Error(errorData.message || "Something went wrong");
		}

		const results = await response.json();

		return { isLoading: false, data: results };
	} catch (error) {
		console.error(error);
		return { isLoading: false, data: null };
	}
}

const ErrorMsg = styled.p`
	color: red;
	margin-top: 1rem;
`;

const SearchStyles = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;

	button {
		margin-top: 2.4rem;
	}
`;

export default Search;
