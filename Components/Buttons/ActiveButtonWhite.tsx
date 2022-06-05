import React, { ReactNode } from 'react'
import {chakra} from "@chakra-ui/react"
import { FlexRowCenterCenter } from '../Reusables/FlexComponents/FlexConfigs'

function ActiveButtonWhite({children, style}: {children: ReactNode, style?: React.CSSProperties}) {
  return (
    <chakra.a style={style} textDecoration={"none"} cursor="pointer" background="white" borderRadius={"8px"} height="36px" padding="0px 16px"   >
      <chakra.span display={"flex"} {...FlexRowCenterCenter} height="100%" color="black" fontSize={"16px"} >
        {children}
      </chakra.span>
    </chakra.a>
  )
}

export default ActiveButtonWhite