import React from "react";
import styled from "styled-components";

function Input({ onChange, value }) {
	return (
		<InputStyles
			value={value}
			placeholder="Enter city name..."
			onChange={onChange}
		/>
	);
}

const InputStyles = styled.input`
	padding: 1.2rem 2.4rem;
	width: 100%;
	display: block;
	font-size: 1.6rem;
	font-weight: 500;
`;

export default Input;
