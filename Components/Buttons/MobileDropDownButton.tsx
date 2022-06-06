import { ChevronDownIcon } from '@chakra-ui/icons'
import { Flex, chakra} from '@chakra-ui/react'
import React, { useState } from 'react'
import { FlexColCenterStart, FlexColStartStart } from '../Reusables/FlexComponents/FlexConfigs'
import ArrowLeftButton from './ArrowLeftButton'
import ArrowLeftButtonAnimated from './ArrowLeftButtonAnimated'



function MobileDropDownButton({heading, links}:{heading: string, links: string[]}) {
    const [isOpen, setIsOpen] = useState(false)
    
  return (
    <Flex {...FlexColCenterStart} width="100%" >
        <chakra.button onClick={()=>setIsOpen(!isOpen)} width="100%" display="flex" flexDir={"row"} padding="0px 8px" alignItems="center" justifyContent={"space-between"} height="40px" color="white" >
            <chakra.span fontSize="16px"  height="24px" textAlign={"left"} >
                {heading}
            </chakra.span>
            <ChevronDownIcon fontSize="16px" />
        </chakra.button>
       {isOpen && <Flex {...FlexColCenterStart} overflow="hidden" transition="height 1s linear" width={isOpen ? "100%" : "0%"} >
            {links.map((link, index) => {
                return (
                    <ArrowLeftButtonAnimated key="index" >
                        {link}
                    </ArrowLeftButtonAnimated>
                )
            })}
        </Flex>}
    </Flex>
  )
}

export default MobileDropDownButton