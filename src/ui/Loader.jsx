import React from "react";
import styled from "styled-components";

function Loader() {
	return (
		<LoaderStyles>
			<div className="loader"></div>
		</LoaderStyles>
	);
}

const LoaderStyles = styled.div`
	/* HTML: <div class="loader"></div> */
	.loader {
		width: 50px;
		aspect-ratio: 1;
		--_c: no-repeat radial-gradient(farthest-side, #25b09b 92%, #0000);
		background: var(--_c) top, var(--_c) left, var(--_c) right, var(--_c) bottom;
		background-size: 12px 12px;
		animation: l7 1s infinite;
	}

	@keyframes l7 {
		to {
			transform: rotate(0.5turn);
		}
	}
`;

export default Loader;
