import React from 'react'
import {chakra, styled} from "@chakra-ui/react"
import Revolut from "../../public/assets/svgs/revolut.svg"

function Logo() {
  return (
    <chakra.button background="none" border="none" outline="none" >
        <RevoultSvg fill="white" color="white" />
    </chakra.button>
  )
}

export default Logo

const RevoultSvg = styled(Revolut)