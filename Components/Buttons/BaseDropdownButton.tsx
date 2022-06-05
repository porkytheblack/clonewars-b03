import { Flex, chakra } from '@chakra-ui/react'
import React, { ReactNode, useContext, useState } from 'react'
import { NavDropdownContext } from '../../Layout/TopNav'
import DropDownMenu from '../Menus/DropDownMenu'
import { FlexColStartStart } from '../Reusables/FlexComponents/FlexConfigs'
import BaseButton from './BaseButton'

function BaseDropdownButton({children, menu, size, styleContainer, dropdown_position}: {children: string, menu?: ReactNode, size?: "small" | "large", styleContainer?: React.CSSProperties, dropdown_position: {top: string, left: string}}) {
    const [active, set_active] = useState<boolean>(false)
    const {active_selection, change_active_selection} = useContext(NavDropdownContext)
    const open_menu=(men: string)=>{
        if(men == "Personal"){
            if(typeof change_active_selection !== "undefined")
            change_active_selection("Personal")
            set_active(!active)
        }else{
            if(typeof change_active_selection !== "undefined")
            change_active_selection("Business")
            set_active(!active)
        }

        
    }
    return (
    <Flex  position={"relative"}  >
        <BaseButton onClick={()=>{open_menu(children)}}  >
            {children}
        </BaseButton>
        {(active && active_selection == children) && <DropDownMenu active_menu={active_selection} position={dropdown_position} />   } 
    </Flex>     
  )
}

export default BaseDropdownButton