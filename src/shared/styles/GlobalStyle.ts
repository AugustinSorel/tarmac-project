import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root{
        --background-color: ${(props) => props.theme.colors.background};
        --background-dark-color: ${(props) =>
          props.theme.colors.backgroundDark};
        --color: ${(props) => props.theme.colors.color};
        --accent-color: ${(props) => props.theme.colors.accentColor};

        --font-size-small: ${(props) => props.theme.fontSizes.small};
        --font-size-medium: ${(props) => props.theme.fontSizes.medium};
        --font-size-large: ${(props) => props.theme.fontSizes.large};
        --font-size-extra-large: ${(props) => props.theme.fontSizes.extraLarge};

        --font-weight-light: ${(props) => props.theme.fontWeights.light};
        --font-weight-regular: ${(props) => props.theme.fontWeights.regular};
        --font-weight-bold: ${(props) => props.theme.fontWeights.bold};

        --border-radius: ${(props) => props.theme.sizes.borderRadius};
        --border-height: ${(props) => props.theme.sizes.borderHeight};
    }

 
    body {
        background-color: var(--background-color);
        color: var(--color);
        font-family: 'Poppins', sans-serif;
        font-weight: var(--font-weight-regular);
        font-size: var(--font-size-medium);
    }

    #root{
        display: flex;
        flex-direction: column;
        height: 100vh;
    }

    ::selection{
        background-color: var(--color);
        color: var(--background-color);
    }

    ::-webkit-scrollbar {
        width: 10px;
        height: 10px;
    }
    
    ::-webkit-scrollbar-track {
        background: var(--background-dark-color);
    }
    
    ::-webkit-scrollbar-thumb {
        border-radius: var(--border-radius);
        background: var(--color);
    }

`;

export default GlobalStyle;
