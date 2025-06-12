import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import styled from "styled-components";
import BackButton from "../../ui/BackButton";
import Loader from "../../ui/Loader";
import { useDispatch } from "react-redux";
import { createCountry } from "./CountrySlice";
import Button from "../../ui/Button";

function CountryDetails() {
	const { isLoading, data, error } = useLoaderData();
	const [isAdded, setIsAdded] = useState(false);

	// Dispatch function
	const dispatch = useDispatch();

	if (error) {
		return (
			<div>
				<p style={{ color: "red" }}>Error: {error}</p>
				<BackButton>Go Back</BackButton>
			</div>
		);
	}

	function handleAddItem() {
		if (!data) return;

		const newCountry = {
			id: Date.now(),
			name: data?.city,
			lat: data?.latitude,
			lng: data?.longitude,
		};

		dispatch(createCountry(data?.name, newCountry));
		setIsAdded((prev) => !prev);
	}

	if (isLoading) return <Loader />;

	return (
		<div>
			<Table>
				<caption>{data?.city}</caption>
				<tbody>
					<tr>
						<th scope="row">City</th>
						<td>{data?.city}</td>
					</tr>
					<tr>
						<th scope="row">Country</th>
						<td>{data?.countryName}</td>
					</tr>
					<tr>
						<th scope="row">Locality</th>
						<td>{data?.locality}</td>
					</tr>
					<tr>
						<th scope="row">Province</th>
						<td>{data?.principalSubdivision}</td>
					</tr>
					<tr>
						<th scope="row">Subdivision Code</th>
						<td>{data?.principalSubdivisionCode}</td>
					</tr>
					<tr>
						<th scope="row">Country</th>
						<td>{data?.countryName}</td>
					</tr>
				</tbody>
			</Table>
			<Btns>
				<BackButton>
					<span>&larr;</span>
					<span>Go Back</span>
				</BackButton>
				{!isAdded && (
					<Button onClick={handleAddItem}>
						<span>Add City</span>
					</Button>
				)}
			</Btns>
		</div>
	);
}
const Btns = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-top: 1.2rem;
`;

const Table = styled.table`
	width: 100%;
	border-collapse: collapse;
	margin-bottom: 3.2rem;
	font-size: 1.6rem;
	overflow: scroll;

	caption {
		color: var(--color-brand--2);
		font-size: 3.2rem;
		font-weight: 600;
		margin-bottom: 2.4rem;
	}

	tr:nth-child(even) {
		background-color: #3c4246;
	}

	tr {
		gap: 6.4rem;
		color: #fff;
	}

	th,
	td {
		padding: 2.4rem;
	}

	th {
		text-align: left;
	}

	td {
		text-align: right;
	}
`;

export async function countryLoader({ request }) {
	const url = new URL(request.url);

	const lat = url.searchParams.get("lat") || "";
	const lng = url.searchParams.get("lng") || "";

	if (!lat || !lng || lat === "undefined" || lng === "undefined") {
		return {
			isLoading: false,
			error: "Latitude or longitude missing",
			data: null,
		};
	}

	try {
		const response = await fetch(
			`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}`
		);

		if (!response.ok) {
			const errorData = await response.json();
			throw new Error(errorData.message || "Something went wrong");
		}

		const results = await response.json();
		return { isLoading: false, data: results };
	} catch (error) {
		console.error(error);
		return { isLoading: false, error: error.message, data: null };
	}
}

export default CountryDetails;
