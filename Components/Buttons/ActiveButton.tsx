import React, { ReactNode } from 'react'
import {chakra} from "@chakra-ui/react"

function ActiveButton({children}: {children: ReactNode}) {
  return (
    <chakra.button backgroundColor={"black"} display={"flex"} alignItems="center" justifyContent={"center"} borderRadius="8px" padding="8px 12px" margin="0px 4px"   >
        <chakra.span  color="white" fontSize={16}  >
            {children}
        </chakra.span>
    </chakra.button>
  )
}

export default ActiveButton