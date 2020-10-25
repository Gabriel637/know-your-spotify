import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    *{
        margin: 0
    }

    *, button, input{
        font-family: 'Roboto', sans-serif;
        color: #fff;
    }

    :root{
        --primary: #1DB954;
        --secondary: #2f3136;
        --tertiary: #fff;
        --quaternary: #1ed760;
        --quinary: #393d42;
        --senary: #828386;
    
        --white: #fff;
        --gray: #8a8c90;
        --chat-input: rgb(64,68,75);
        --symbol: #74777a;
    
        --notification: #f84a4b;
        --discord: #6e86d6;
        --mention-detail: #f9a839;
        --mention-message: #413f3f;
    
        --link: #5d80d6;
 
    }
`
