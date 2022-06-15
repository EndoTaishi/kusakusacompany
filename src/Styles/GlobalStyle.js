import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
    :root {
        --base-color: #B3F091;
        --main-color: #17B800;
        --accent-color: #FACE6B;
    }

    body {
    font-family: Helvetica,'Yu Gothic','Hiragino Kaku Gothic ProN','ヒラギノ角ゴ ProN W3','メイリオ', Meiryo,'ＭＳ ゴシック',sans-serif;
    overflow-x: hidden;
    min-width: 300px;
    max-width: 100%;
    margin: 0 auto;
    }

    h1,
    h2,
    h3,
    h4 {
        margin: 0;
        padding: 0;
        line-height: 1;
    }

    h2{
        font-size: 28px;
        font-weight: bold;
    }
`

export default GlobalStyle