import { Flex, chakra, keyframes, useMediaQuery } from '@chakra-ui/react'
import React, { ReactNode, useContext, useEffect } from 'react'
import ActiveButton from '../Components/Buttons/ActiveButton'
import ActiveButtonWhite from '../Components/Buttons/ActiveButtonWhite'
import { FlexColCenterStart } from '../Components/Reusables/FlexComponents/FlexConfigs'
import { ScrollContext } from '../helpers/ScrollObserver'
import Footer from './Footer'
import TopNav from './TopNav'

const animateKeyFrames = keyframes`
  from{
    opacity: 0;
  }
  to{
    opacity: 1;
  }
`

function Layouts({children}: {children: ReactNode | ReactNode[]}) {
  const [isLg] = useMediaQuery("(min-width: 1024px)");
  const {scrollY} = useContext(ScrollContext)
 
  return (

    <Flex {...FlexColCenterStart} width="100%" position="relative" height="100%" >
        <TopNav/>
        {children}
        <Footer/>
        {(!isLg && scrollY > 560 && scrollY < 11788) && <chakra.div animation={`${animateKeyFrames} .5s linear`} position="fixed" display={"flex"} flexDir="row" alignItems={"center"} justifyContent="center" bottom="20px" margin="0px auto" >
            <ActiveButtonWhite>
              Get Started
            </ActiveButtonWhite>
        </chakra.div>}
    </Flex>
  )
}

export default Layouts