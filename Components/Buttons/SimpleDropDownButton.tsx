import { Flex } from '@chakra-ui/react'
import React, { useState } from 'react'
import { NavDropdownContext } from '../../Layout/TopNav'
import SimpleDropDown from '../Menus/SimpleDropDown'
import { FlexRowCenterCenter } from '../Reusables/FlexComponents/FlexConfigs'
import BaseButton from './BaseButton'

function SimpleDropDownButton({children, links}: {children: string, links: string[]}) {
    const [active, set_active] = useState<boolean>(false)
    const {active_selection, change_active_selection} = React.useContext(NavDropdownContext)
  return (
    <Flex {...FlexRowCenterCenter}  >
        <BaseButton onClick={()=>{
            if(children == "Company")
            if(typeof change_active_selection !== "undefined")
            change_active_selection(children)
            set_active(!active)
        }} >
            {children}
        </BaseButton>
        {(active && (active_selection == children)) &&<SimpleDropDown links={links} position={{top: "72px", left: "35%"}} />}
    </Flex>
  )
}

export default SimpleDropDownButton