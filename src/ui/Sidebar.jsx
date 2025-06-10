import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

function Sidebar() {
	return (
		<SidebarStyles>
			<Outlet />
		</SidebarStyles>
	);
}

const SidebarStyles = styled.aside`
	background-color: var(--color-dark--1);
	padding: 3rem 1.2rem;
	height: calc(100vh - 4.8rem);
	/* display: flex;
	flex-direction: column;
	align-items: center;
	flex-basis: 56rem; */
`;

export default Sidebar;
