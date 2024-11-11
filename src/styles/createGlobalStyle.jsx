import { createGlobalStyle } from "styled-components"

const StyledGlobalStyle = createGlobalStyle`
    html {
        width: 100%
        max-width: 100%;
        overflow-x: hidden;
        overscroll-behavior: none;
    }
`

function GlobalStyle() {
    return <StyledGlobalStyle/>
}

export default GlobalStyle