import React, { useState } from 'react'
import {chakra} from "@chakra-ui/react"

function ActiveBlueWhiteOutlineButton({children}:{children: string}) {


  return (
    <chakra.button color="white" height="32px" _hover={{background: "rgb(11, 123, 237)"}} padding="0px 16px" margin={[ "10px 8px", "10px 8px", "10px 8px", "10px 8px "  , "0px 8px"  ]}border="2px solid white"  borderRadius={"10px"}   >
        <chakra.p>
            {children}
        </chakra.p>
    </chakra.button>
  )
}

export default ActiveBlueWhiteOutlineButton