import React from "react";
import styled from "styled-components";
import Sidebar from "./Sidebar";
import Map from "./Map";

function AppLayout() {
	return (
		<Wrapper>
			<Sidebar />
			<Map />
		</Wrapper>
	);
}

const Wrapper = styled.div`
	height: 100vh;
	padding: 2.4rem;
	overscroll-behavior-y: none;
	display: grid;
	grid-template-columns: 40rem 1fr;
	min-width: 50rem;
	position: relative;
`;

export default AppLayout;
