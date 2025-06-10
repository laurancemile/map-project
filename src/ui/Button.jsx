import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

function Button({ children, onClick, disabled, to }) {
	if (to) {
		return <NavLink to={to}>{children}</NavLink>;
	}
	return (
		<ButtonStyles disabled={disabled} onClick={onClick}>
			{children}
		</ButtonStyles>
	);
}

const ButtonStyles = styled.button`
	background-color: var(--color-brand--2);
	padding: 1.6rem 3.2rem;
	color: #fff;
	border: none;
	border-radius: 5px;
	width: fit-content;
	cursor: pointer;
	font-weight: 700;

	&:hover {
		background-color: #00c469ed;
	}
`;

export default Button;
