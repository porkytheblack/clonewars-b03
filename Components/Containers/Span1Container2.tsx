import { Flex, chakra } from '@chakra-ui/react'
import React, { useState } from 'react'
import { CustomImage } from '../../PageComponents/HeroBlock'
import ActiveFowardBlueButton from '../Buttons/ActiveFowardBlueButton'
import { FlexColCenterCenter, FlexColStartBetween, FlexColStartEnd } from '../Reusables/FlexComponents/FlexConfigs'
import {motion} from "framer-motion"

function Span1Container2({image_src, title, button_text, background_light } : {image_src: string, title: string, button_text: string, background_light?: boolean}) {
  const [hover, set_hover] = useState<boolean>(false)
  return (
    <Flex {...FlexColCenterCenter} onMouseOver={()=>set_hover(true)} onMouseDown={()=>set_hover(true)} onMouseUp={()=>set_hover(false)} onMouseLeave={()=>set_hover(false)} marginTop="20px" marginRight={["10px", "10px", "10px", "10px", "20px"]} marginLeft={["10px", "10px", "10px", "10px","0px"]}overflow={"hidden"} height="100%" position="relative" borderRadius={"20px"} >
        <motion.div animate={{scale: hover? 1.1 : 1}} >
          <CustomImage  src={image_src} width={490} height={579} />
        </motion.div>
        <Flex color={background_light ? "black" : "white"} padding="20px" {...FlexColStartEnd} width="100%" height="100%" position="absolute" top="0px" left="0px" >
            <chakra.h3 fontSize="34px" marginBottom="20px" lineHeight={"40px"} fontFamily={`"BasierCircleSemiBold", sans-serif`} >
                {title}
            </chakra.h3>
            <ActiveFowardBlueButton background_light={Boolean(background_light)} >
                {button_text}
            </ActiveFowardBlueButton>
        </Flex>
    </Flex>
  )
}

export default Span1Container2