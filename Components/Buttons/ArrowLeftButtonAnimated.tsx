import React, { useState } from 'react'
import {chakra, keyframes} from "@chakra-ui/react"
import { ArrowForwardIcon } from '@chakra-ui/icons'
import { motion } from 'framer-motion'

const animationKeyframes = keyframes`
    from{
        margin-left: -100%;
        opacity: 0;
    }
    to{
        margin-left: 0%;
        opacity: 1;
    }
`

function ArrowLeftButtonAnimated({children, animate_bg}: {children: string, animate_bg?:boolean}) {
    const [hover, set_hover] = useState<boolean>(false)
  return (
    <chakra.button fontSize={"14px"} width="100%"  onMouseOver={()=>{set_hover(true)}} onMouseOut={()=>{set_hover(false)}} color="#838383" _hover={{color: "blue", backgroundColor: typeof animate_bg !== "undefined" ? "none" : "#191919"}} borderRadius="10px" padding="5px 8px" display={"flex"}  flexDirection="row" alignItems={"center"} justifyContent="space-between" >
        <chakra.span>
            {children}
        </chakra.span>
        <chakra.i  >
        {hover && <ArrowForwardIcon  animation={`${animationKeyframes} .5s ease-in-out`} />}
        </chakra.i>
        
        
    </chakra.button>
  )
}

export default ArrowLeftButtonAnimated


