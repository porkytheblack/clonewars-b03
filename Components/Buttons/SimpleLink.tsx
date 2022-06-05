import React from 'react'
import {chakra} from "@chakra-ui/react"

function SimpleLink({children}:{children: string}) {
  return (
        <chakra.a color="rgba(255, 255, 255, 0.6)" _hover={{color: "white"}} padding="4px 0px" textDecoration={"none"} width="100%" textAlign={"left"} fontSize="12px" > 
            {children}
        </chakra.a>
  )
}

export default SimpleLink