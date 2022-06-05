import React from 'react'
import {chakra} from "@chakra-ui/react"
import { FlexRowCenterBetween } from '../Reusables/FlexComponents/FlexConfigs'
import { ArrowForwardIcon } from '@chakra-ui/icons'
 
function ActiveFowardBlueButton({children, background_light}:{children: string, background_light?: boolean}) {
  return (
    <chakra.button width="80%" padding="10px" _hover={{background: "rgb(11, 123, 237)"}}  borderRadius={"30px"} display="flex" flexDirection="row" alignItems={"center"} justifyContent="space-between" color={Boolean(background_light) ? "black" : "white"} >
        <chakra.p  fontSize={"20px"} fontFamily={`"BasierCircleBold", sans-serif`}  >
            {children}
        </chakra.p>
        <ArrowForwardIcon fontSize={"24px"} />
    </chakra.button>
  )
}

export default ActiveFowardBlueButton