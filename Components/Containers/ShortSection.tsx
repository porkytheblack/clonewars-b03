import React from 'react'
import {chakra, Flex} from "@chakra-ui/react"
import { FlexColCenterCenter } from '../Reusables/FlexComponents/FlexConfigs'

function ShortSection({title, more}:{title: string, more: string}) {
  return (
    <Flex margin="80px 0px" width="80%" {...FlexColCenterCenter} >
         <chakra.h1 fontSize={["40px", "40px", "40px", "40px", "60px"]} textAlign="center"  width={{xl:"70%", lg: "80%"}} fontWeight={"600"} fontFamily={`"BasierCircleSemiBold", sans-serif`} >
                {title}
            </chakra.h1>
            <chakra.p width={{xl:"60%", lg: "80%" }}fontFamily={`"BasierCircleBold", sans-serif`} fontSize={["16px", "16px", "16px", "16px", "20px"]} textAlign={"center"} fontWeight="400" >
              {more}
            </chakra.p>
    </Flex>
  )
}

export default ShortSection