import React from 'react'
import {chakra, Flex} from "@chakra-ui/react"
import { FlexColCenterCenter } from '../Components/Reusables/FlexComponents/FlexConfigs'

function ShortSectionAfterHero() {
  return (
    <Flex margin="80px 0px" width="80%" {...FlexColCenterCenter} >
         <chakra.h1 fontSize={["34px", "34px", "34px", "34px","60px"]} textAlign="center"  width="70%" fontWeight={"600"} fontFamily={`"BasierCircleSemiBold", sans-serif`} >
                Save money on transfers, payments and FX
            </chakra.h1>
            <chakra.p width="60%" fontFamily={`"BasierCircleBold", sans-serif`} fontSize={["16px", "16px", "16px", "16px", "20px"]} textAlign={"center"} fontWeight="400" >
              Empower your team and stay in control of your spend
            </chakra.p>
    </Flex>
  )
}

export default ShortSectionAfterHero