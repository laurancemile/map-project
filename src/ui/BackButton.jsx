import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import styled from "styled-components";

function BackButton({ children }) {
	const navigate = useNavigate();

	function handleClick() {
		navigate("/search");
	}
	return <ButtonStyles onClick={handleClick}>{children}</ButtonStyles>;
}

const ButtonStyles = styled.button`
	border: 3px solid var(--color-brand--2);
	padding: 1.2rem 2.4rem;
	color: #fff;
	background: transparent;
	border-radius: 4px;
	cursor: pointer;
	display: flex;
	align-items: center;
	gap: 1.2rem;

	&:hover {
		background-color: #3c4246;
	}
`;

export default BackButton;
