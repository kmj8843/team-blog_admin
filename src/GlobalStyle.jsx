import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
:root {
  --color-primary: #6c9bcf;
  --color-danger: #ff0060;
  --color-success: #1b9c85;
  --color-warning: #f7d060;
  --color-white: #fff;
  --color-info-dark: #7d8da1;
  --color-dark: #363949;
  --color-light: rgba(132, 139, 200, 0.18);
  --color-dark-variant: #677483;
  --color-background: #f6f6f9;

  --card-border-radius: 2rem;
  --border-radius-1: 0.4rem;
  --border-radius-2: 1.2rem;

  --card-padding: 1.8rem;
  --padding-1: 1.2rem;

  --box-shadow: 0 2rem 3rem var(--color-light);
}

.dark-mode-variables {
  --color-background: #181a1e;
  --color-white: #202528;
  --color-dark: #edeffd;
  --color-dark-variant: #a3bdcc;
  --color-light: rgba(0, 0, 0, 0.4);
  --box-shadow: 0 2rem 3rem var(--color-light);
}

* {
  margin: 0;
  padding: 0;
  outline: 0;
  appearance: 0;
  border: 0;
  text-decoration: none;
  box-sizing: border-box;
}

html {
  font-size: 14px;
}

body {
  width: 100vw;
  height: 100vh;
  font-family: "Poppins", sans-serif;
  font-size: 0.88rem;
  user-select: none;
  overflow-x: hidden;
  color: var(--color-dark);
  background-color: var(--color-background);
  padding: 0 2rem;
}

a {
  color: var(--color-dark);
}

img {
  display: block;
  width: 100%;
  object-fit: cover;
}

h1 {
  font-weight: 800;
  font-size: 1.8rem;
}

h2 {
  font-weight: 600;
  font-size: 1.4rem;
}

h3 {
  font-weight: 500;
  font-size: 0.87rem;
}

small {
  font-size: 0.76rem;
}

p {
  color: var(--color-dark-variant);
}

b {
  color: var(--color-dark);
}

.text-muted {
  color: var(--color-info-dark);
}

.primary {
  color: var(--color-primary);
}

.danger {
  color: var(--color-danger);
}

.success {
  color: var(--color-success);
}

.warning {
  color: var(--color-warning);
}
`

export default GlobalStyle;
