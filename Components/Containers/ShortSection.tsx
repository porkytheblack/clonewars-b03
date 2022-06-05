import React from 'react'
import {chakra, Flex} from "@chakra-ui/react"
import { FlexColCenterCenter } from '../Reusables/FlexComponents/FlexConfigs'

function ShortSection({title, more}:{title: string, more: string}) {
  return (
    <Flex margin="80px 0px" width="80%" {...FlexColCenterCenter} >
         <chakra.h1 fontSize={["60px"]} textAlign="center"  width="70%" fontWeight={"600"} fontFamily={`"BasierCircleSemiBold", sans-serif`} >
                {title}
            </chakra.h1>
            <chakra.p width="60%" fontFamily={`"BasierCircleBold", sans-serif`} fontSize="16px" textAlign={"center"} fontWeight="400" >
              {more}
            </chakra.p>
    </Flex>
  )
}

export default ShortSection