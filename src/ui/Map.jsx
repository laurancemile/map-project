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

function Map() {
	const [position, setPosition] = useState([51.505, -0.09]);

	const [searchParams] = useSearchParams(); // Lat & Lng from URL

	const lat = searchParams.get("lat");
	const lng = searchParams.get("lng");

	useEffect(() => {
		if (!lat || !lng) return;
		setPosition(() => [lat, lng]);
	}, [lat, lng]);

	return (
		<MapStyles>
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
				<Marker position={position}>
					<Popup>
						A pretty CSS3 popup. <br /> Easily customizable.
					</Popup>
				</Marker>

				<ChangeCenter position={position} />
			</MapContainer>
		</MapStyles>
	);
}

function ChangeCenter({ position }) {
	const map = useMap();
	map.setView(position);
	return null;
}

const MapStyles = styled.div`
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
