import React, { useEffect, useState } from "react";
import {
	MapContainer,
	Marker,
	Popup,
	TileLayer,
	useMap,
	GeoJSON,
} from "react-leaflet";
import { useSearchParams } from "react-router-dom";
import styled from "styled-components";
import Loader from "./Loader";
import { useSelector } from "react-redux";
import { getAllCities } from "../features/country/CountrySlice";
import GlobalStyles from "../styles/GlobalStyles";

function Map() {
	const [position, setPosition] = useState([51.505, -0.09]);
	const [searchParams] = useSearchParams(); // Lat & Lng from URL

	// All cities from context
	const cities = useSelector(getAllCities);

	const lat = searchParams.get("lat");
	const lng = searchParams.get("lng");

	useEffect(() => {
		if (!lat || !lng) return;
		setPosition(() => [lat, lng]);
	}, [lat, lng]);

	return (
		<MapStyles>
			<GlobalStyles />
			<Title>Designed by MG Mothapo at Mmabana P.S</Title>
			<MapContainer
				className="mapContainer map"
				center={position}
				zoom={6}
				scrollWheelZoom={true}
			>
				<TileLayer
					attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				/>
				{cities.map((city) => {
					return (
						<Marker position={[city.lat || 40, city.lng || 0]}>
							<Popup>{city.name}</Popup>
						</Marker>
					);
				})}
				<ChangeCenter position={position} />
			</MapContainer>
		</MapStyles>
	);
}

const Title = styled.h1`
	color: var(--color-brand--2);
	position: absolute;
	top: 0;
	right: 0;
	z-index: 999;
	font-size: 3.2rem;
	background-color: var(--color-dark--1);
	padding: 1.2rem;
`;

function ChangeCenter({ position }) {
	const map = useMap();
	map.setView(position);
	return null;
}

const MapStyles = styled.div`
	position: relative;

	.mapContainer {
		flex: 1;
		height: 100%;
		background-color: var(--color-dark--2);
		position: relative;
	}

	.map {
		height: 100%;
	}
`;

export default Map;
