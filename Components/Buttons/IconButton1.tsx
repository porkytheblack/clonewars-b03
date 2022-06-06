import React, { ReactNode, useState } from 'react'
import {chakra, IconProps} from "@chakra-ui/react"
import { ArrowBackIcon } from '@chakra-ui/icons'
import {ComponentWithAs} from "@chakra-ui/system"


function IconButton1({baseIcon, activeIcon, bg, colors, onClick}:{baseIcon: ReactNode, activeIcon: ReactNode, bg: string[], colors: string[], onClick?: () => void}) {
  const [active, set_active] = useState<boolean>(false)
    return (
    <chakra.button onClick={()=>{
        set_active(!active)
        if(typeof onClick !== "undefined"){
            onClick()
        }
      }} bg={bg[0]} _focus={{background: active ? bg[1] : bg[0], color: active ? colors[1] : [colors[0]]}} color={colors[0]} borderRadius={"10px"} padding="10px" display="flex" alignItems="center" justifyContent="center"  >
        {active ? activeIcon : baseIcon}
    </chakra.button>
  )
}

export default IconButton1