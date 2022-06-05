import React from 'react'
import {chakra} from "@chakra-ui/react"
import { FlexRowCenterCenter } from '../Reusables/FlexComponents/FlexConfigs'

function BaseButton({children, onClick}:{children: string, onClick?: ()=>void}) {
  return (
    <chakra.button onClick={onClick} _hover={{backgroundColor: "black"}} display={"flex"} alignItems="center" justifyContent={"center"} borderRadius="8px" padding="8px 12px" margin="0px 4px"   >
        <chakra.span  color="white" fontSize={16}  >
            {children}
        </chakra.span>
    </chakra.button>
  )
}

export default BaseButton