import React from 'react'
import {chakra} from "@chakra-ui/react"
import { ArrowForwardIcon } from '@chakra-ui/icons'
import { FlexRowCenterBetween } from '../Reusables/FlexComponents/FlexConfigs'
 
function ArrowLeftButton({children, style}:{children: string, style?: React.CSSProperties}) {
  return (
    <chakra.button display={"flex"} style={style} alignItems="center" justifyContent={"flex-start"} color="white" _hover={{color: "blue"}} >
        <chakra.span fontFamily={`"BasierCircleBold", sans-serif`} marginRight="10px" fontSize="24px" >
            {children}
        </chakra.span>
        <ArrowForwardIcon fontSize={24} />
    </chakra.button>
  )
}

export default ArrowLeftButton