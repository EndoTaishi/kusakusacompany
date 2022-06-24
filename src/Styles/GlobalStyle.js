import { createGlobalStyle } from "styled-components"
import Variables from "../Variables"
import Mixins from "./Mixins"

const GlobalStyle = createGlobalStyle`
    :root {
      --line-color: #11111111;
      --line-color-light: #ffffff11;
      --text-color: #333333;
      --text-color-reverse: #eeeeee;
      --background-color: #eeeeee;
      --background-color-reverse: #333333;
      --background-color-light: #ffffff;
      --background-color-dark: #222222;
      --background-color-light-transparent: rgba(255, 255, 255, 0.25);
      --glassmorphism-color: 255;
      --base-color: #f4fafa;
      --main-color: #0bc8b6;
      --accent-color: #2b546a;
    }

  * {
    animation-timing-function: ease-in-out;
    box-sizing: border-box;
    overflow-wrap: break-word;
  }

  body {
    font-family: Helvetica,'Yu Gothic','Hiragino Kaku Gothic ProN','ヒラギノ角ゴ ProN W3','メイリオ', Meiryo,'ＭＳ ゴシック',sans-serif;
    overflow-x: hidden;
    min-width: 300px;
    max-width: 100%;
    margin: 0 auto;
    color: var(--text-color);
    background-color: var(--background-color);
    -webkit-tap-highlight-color: transparent;

    a {
      color: var(--text-color);
      &:hover {
        color: var(--text-color);
      }
    }
  }

  main {
    animation-name: fadein;
    clear: both;
    margin: 0 auto;
    max-width: ${Variables.maxWidth};
    min-height: 100vh;
    position: relative;
    width: 100%;
    z-index: 1;

    * {
      line-height: 1.6;

      /* スクロールバー非表示 */
      -ms-overflow-style: none;
      scrollbar-width: none;
      &::-webkit-scrollbar {
        display:none;
      }
    }
  }

  footer {
    margin: 0 auto;
    max-width: ${Variables.maxWidth};
    position: relative;
    z-index: 1;
  }

  img,
  svg {
    object-fit: cover;
    width: 100%;
  }

  a {
    text-decoration: none;
    word-wrap: break-word;
  }

  p {
    font-size: 14px;
    margin-bottom: 0;
    margin-top: 16px;
    line-height: 2;

    ${Mixins.screenSp} {
      font-size: 12px;
    }
  }

  label {
    display: block;
    font-size: 14px;
    font-weight: bold;
    margin: 20px 1px 10px;
    padding-left: 5px;
  }

  li {
    margin: 7px 0;
  }

  h1,
  h2,
  h3,
  h4 {
    margin: 0;
    padding: 0;
    line-height: 1;
  }

  h2 {
    font-size: 24px;
  
    ${Mixins.screenSp} {
      font-size: 20px;
    }
  }

  h3 {
    font-size: 20px;
  
    ${Mixins.screenSp} {
      font-size: 18px;
    }
  }

  input {
    &::placeholder {
      color: var(--text-color);
      font-size: 14px;
      opacity: ${Variables.baseOpacity};
    }
    &:-ms-input-placeholder {
      color: var(--text-color);
      font-size: 14px;
      opacity: ${Variables.baseOpacity};
    }
    &::-ms-input-placeholder {
      color: var(--text-color);
      font-size: 14px;
      opacity: ${Variables.baseOpacity};
    }
  }
`

export default GlobalStyle
