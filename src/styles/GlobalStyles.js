import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
      :root {
      --color-brand--1: #ffb545;
      --color-brand--2: #00c46a;

      --color-dark--0: #242a2e;
      --color-dark--1: #2d3439;
      --color-dark--2: #42484d;
      --color-light--1: #aaa;
      --color-light--2: #ececec;
      --color-light--3: #d6dee0;
      }

      *, *::after, *::before{
            margin: 0;
            padding: 0;
            box-sizing: border-box;
      }

      html {
            font-size: 62.5%;
            transition: all 0.3s ease-in-out;
      }

      body {
            font-family: sans-serif;
            color: #444;
            line-height: 1;
            font-weight: 400;
      }

      /* React leaflet */
      /* Here we want to style classes that are coming from leaflet. So we want CSS Modules to give us the ACTUAL classnames, not to add some random ID to them, because then they won't match the classnames defined inside the map. The solution is to define these classes as GLOBAL */
	:global(.leaflet-popup .leaflet-popup-content-wrapper) {
		background-color: var(--color-dark--1);
		color: var(--color-light--2);
		border-radius: 5px;
		padding-right: 0.6rem;
	}

	:global(.leaflet-popup .leaflet-popup-content) {
		font-size: 1.5rem;
		display: flex;
		align-items: center;
		gap: 1rem;
	}

	:global(.leaflet-popup .leaflet-popup-content span:first-child) {
		font-size: 2.5rem;
		line-height: 1;
	}

	:global(.leaflet-popup .leaflet-popup-tip) {
		background-color: var(--color-dark--1);
	}

	:global(.leaflet-popup-content-wrapper) {
		border-left: 5px solid var(--color-brand--2);
	}
`;

export default GlobalStyles;
