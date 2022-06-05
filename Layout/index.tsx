import { Flex } from '@chakra-ui/react'
import React, { ReactNode } from 'react'
import { FlexColCenterStart } from '../Components/Reusables/FlexComponents/FlexConfigs'
import Footer from './Footer'
import TopNav from './TopNav'

function Layouts({children}: {children: ReactNode | ReactNode[]}) {
  return (
    <Flex {...FlexColCenterStart} width="100%" height="100%" >
        <TopNav/>
        {children}
        <Footer/>
    </Flex>
  )
}

export default Layouts