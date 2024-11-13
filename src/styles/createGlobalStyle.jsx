import { createGlobalStyle } from "styled-components"

const StyledGlobalStyle = createGlobalStyle`
    html, body {
        width: 100%;
        height: auto;
        margin: 0;
        padding: 0;
        overflow-x: hidden;
        overscroll-behavior: none;
    }    
    #main-container {
        width: 100%;
        max-width: 1500px;
       
        margin: 0 auto; /* Center the container horizontally */
        display: flex;
        flex-direction: column;
        box-sizing: border-box;
    }
`

function GlobalStyle() {
    return <StyledGlobalStyle/>
}

export default GlobalStyle
