import { Flex, Grid, GridItem } from '@chakra-ui/react'
import React, { createContext, useContext, useEffect, useState } from 'react'
import ActiveButton from '../../Components/Buttons/ActiveButton'
import ActiveButtonWhite from '../../Components/Buttons/ActiveButtonWhite'
import ArrowLeftButton from '../../Components/Buttons/ArrowLeftButton'
import BaseButton from '../../Components/Buttons/BaseButton'
import BaseDropdownButton from '../../Components/Buttons/BaseDropdownButton'
import Logo from '../../Components/Buttons/Logo'
import {chakra, keyframes} from "@chakra-ui/react"
import { FlexColStartStart, FlexRowCenterBetween, FlexRowCenterCenter, FlexRowCenterEnd, FlexRowCenterStart } from '../../Components/Reusables/FlexComponents/FlexConfigs'
import ArrowLeftButtonAnimated from '../../Components/Buttons/ArrowLeftButtonAnimated'
import DropDownMenu from '../../Components/Menus/DropDownMenu'
import SimpleDropDownButton from '../../Components/Buttons/SimpleDropDownButton'


interface NavContextValue {
    active_selection?: "Personal" | "Business" | "Company",
    change_active_selection?: (selection: "Personal" | "Business" | "Company") => void,
}




export const NavDropdownContext = createContext<NavContextValue>({})





function TopNav() {
    const [active_selection, set_active_selection] = useState<"Personal" | "Business" | "Company">("Personal")
    const change_active_selection = (selection: "Personal" | "Business" | "Company")=>{
        set_active_selection(selection)
    }

  return (
      <NavDropdownContext.Provider value={{active_selection, change_active_selection}}>
    <Flex position={"fixed"} zIndex="10" borderBottom={"1px solid rgb(55, 55, 57)"} {...FlexRowCenterCenter} width="100vw" height={"68px"} bg="rgba(25, 28, 31, 0.8)" backdropBlur={"12px"} >
        <Flex {...FlexRowCenterBetween} width={["100%", "100%", "80%", "80%"]} >
            <Flex {...FlexRowCenterStart} width="50%" height="100%" >
                <Logo/>
                <Flex {...FlexRowCenterStart} height="100%" marginLeft="32px" >
                    <BaseDropdownButton dropdown_position={{top: "150%", left: "-100%"}} >
                        Personal
                    </BaseDropdownButton>
                    <BaseDropdownButton dropdown_position={{top: "150%", left: "-200%"}} >
                        Business
                    </BaseDropdownButton>
                    <SimpleDropDownButton links={["About us", "Culture", "Diversity and Inclusion", "Code of Conduct", "Careers", "News and Media", "Leadership", "Financial Statements"]} >
                        Company
                    </SimpleDropDownButton>
                </Flex>
            </Flex>
            <Flex {...FlexRowCenterEnd} width="50%" height="100%" >
                <ActiveButton>
                    Log in
                </ActiveButton>
                <ActiveButtonWhite style={{marginLeft: "20px"}} >
                    Sign In
                </ActiveButtonWhite>
            </Flex>
        </Flex>
    </Flex>
    </NavDropdownContext.Provider>
  )
}

export default TopNav