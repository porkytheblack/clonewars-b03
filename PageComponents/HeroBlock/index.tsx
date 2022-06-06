import { Flex, chakra, useMediaQuery } from '@chakra-ui/react'
import Image from "next/image"
import React, { useContext, useEffect, useRef, useState } from 'react'
import ActiveBlueWhiteOutlineButton from '../../Components/Buttons/ActiveBlueWhiteOutlineButton'
import ActiveButtonWhite from '../../Components/Buttons/ActiveButtonWhite'
import { FlexColCenterCenter, FlexColCenterStart, FlexRowCenterCenter } from '../../Components/Reusables/FlexComponents/FlexConfigs'
import { ScrollContext } from '../../helpers/ScrollObserver'

function HeroBlock() {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const {current: cur} = containerRef
  const {scrollY} = useContext(ScrollContext)
  const [imageScale, setImageScale] = useState<number>(2)
  const [isXl] = useMediaQuery("(min-width: 1200px)")

  useEffect(()=>{
    if(cur){
      if(imageScale < 1.5){
       setImageScale((cur.getBoundingClientRect().top/100)/2+imageScale)
      }
      if(imageScale >= 1.5){
       setImageScale(imageScale - (cur.getBoundingClientRect().top/100)/2)
      }
    }
    
  }, [,scrollY])
  return (
    <Flex ref={containerRef} width="100vw" overflowX={"hidden"} height="100vh" {...FlexColCenterStart} position="relative" >
        <CustomImage scale={imageScale} src={`/assets/revolut/hero_image_${isXl ? "desktop.png" : "mobile.webp"}`} width={1356}  height={615}  />
        <Flex width="100%" height="100%" {...FlexColCenterCenter} position="absolute" background="transparent" top="0px" left="0px" >
            <chakra.h1 fontSize={["34px", "34px",  "34px", "34px", "96px"]} textAlign="center"  width="70%" fontWeight={"600"} fontFamily={`"BasierCircleSemiBold", sans-serif`} >
                Do business globally, from day one
            </chakra.h1>
            <chakra.p width="60%" fontFamily={`"BasierCircleBold", sans-serif`} fontSize={["16px", "16px", "16px", "16px","20px"] }textAlign={"center"} fontWeight="400" >
              Open an online business account – it’s quick and easy
            </chakra.p>
            <Flex {...FlexRowCenterCenter}  marginTop="10px" >
              <ActiveButtonWhite>
                Join now
              </ActiveButtonWhite>
              <ActiveBlueWhiteOutlineButton>
                Contact Us
              </ActiveBlueWhiteOutlineButton>
            </Flex>
        </Flex>
    </Flex>
  )
}

export default HeroBlock

export const CustomImage = chakra(Image, {
    shouldForwardProp: (prop) => ![ "alt"].includes(prop),
    themeKey: "Image"
})

const CustomFlex = chakra(Flex, {
    shouldForwardProp: (prop) => !["src", "alt"].includes(prop),
    themeKey: "Flex"
})

