import { Flex, GridItem, chakra, useMediaQuery, FlexProps } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { CustomImage } from '../../PageComponents/HeroBlock'
import ActiveFowardBlueButton from '../Buttons/ActiveFowardBlueButton'
import { FlexColCenterCenter, FlexColStartBetween, FlexColStartStart } from '../Reusables/FlexComponents/FlexConfigs'
import {motion} from "framer-motion"


function Span1Container( {image_src, title, button_text, background_light } : {image_src: string, title: string, button_text: string, background_light?: boolean} ) {
  const [src, set_src] = React.useState<string>(image_src)
  const [isXl]  = useMediaQuery("(min-width: 1200px)")
  const [flexConfig, setFlexConfig] = useState<FlexProps>(FlexColStartBetween)
  const [hover, set_hover] = useState<boolean>(false)

  const h = () =>{
      set_hover(true)
  }

  const u_h = () =>{
      set_hover(false)
  }
  useEffect(()=>{
      if(!isXl){
          var sr = src.replace("desktop", "mobile").replace(".png", ".webp")
          set_src(sr)
          setFlexConfig(FlexColStartStart)
      }else{
          var sr = src.replace("mobile", "desktop").replace(".webp", ".png")
          set_src(sr)
          setFlexConfig(FlexColStartBetween)
      }
  }, [,isXl])
  return (
    <Flex onMouseOver={h} onMouseDown={h} onMouseUp={u_h} onMouseLeave={u_h} {...FlexColCenterCenter} marginRight={["10px", "10px", "10px", "10px", "0px"]}  marginLeft={["10px", "10px", "10px", "10px", "0px"]} marginTop={["20px", "20px", "20px", "20px", "0px"]}  overflow={"hidden"} height="100%" position="relative" borderRadius={"20px"} >
        <motion.div animate={{scale: hover ? 1.1 : 1}} >
            <CustomImage  src={src} width={isXl  ? 490 : 600} height={isXl ? 579 : 788} />
        </motion.div>
        <Flex color={background_light ? "black" : "white"} padding="20px" {...flexConfig} width="100%" height="100%" position="absolute" top="0px" left="0px" >
            <chakra.h3 marginBottom="20px" fontSize={["28px", "28px", "28px", "28px", "34px"]} lineHeight={["28px", "28px", "28px", "28px", "34px"]} fontFamily={`"BasierCircleSemiBold", sans-serif`} >
                {title}
            </chakra.h3>
            <ActiveFowardBlueButton  background_light={Boolean(background_light)} >
                {button_text}
            </ActiveFowardBlueButton>
        </Flex>
    </Flex>
  )
}

export default Span1Container