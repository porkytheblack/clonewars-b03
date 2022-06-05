import React from 'react'
import {css, Global} from "@emotion/react"

function Fonts() {
  return (
   <Global styles={css`
      @font-face {
        font-family: "BasierCircleRegular";
        font-style: normal;
        font-weight: 300;
        src: local(''), url("/assets/fonts/basier/BasierCircle-Regular.woff") format("woff");
      }
      @font-face {
        font-family: "BasierCircleBold";
        font-style: normal;
        font-weight: 400;
        src: local(''), url("/assets/fonts/basier/BasierCircle-Medium.woff2") format("woff2");
      }
      @font-face {
        font-family: "BasierCircleMedium";
        font-style: normal;
        font-weight: 500;
        src: local(''), url("/assets/fonts/basier/BasierCircle-Medium.woff2") format("woff2");
      }
      @font-face {
        font-family: "BasierCircleSemiBold";
        font-style: normal;
        font-weight: 600;
        src: local(''), url("/assets/fonts/basier/BasierCircle-SemiBold.woff2") format("woff2");
      }
      &::-webkit-scrollbar {
        width: 5px;
        background: none;
      }
      &::-webkit-scrollbar-thumb {
        background: #191919;
        border-radius: 2px;
      }
   `} />
  )
}

export default Fonts


