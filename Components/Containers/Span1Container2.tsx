import { Flex, chakra } from '@chakra-ui/react'
import React from 'react'
import { CustomImage } from '../../PageComponents/HeroBlock'
import ActiveFowardBlueButton from '../Buttons/ActiveFowardBlueButton'
import { FlexColCenterCenter, FlexColStartBetween, FlexColStartEnd } from '../Reusables/FlexComponents/FlexConfigs'

function Span1Container2({image_src, title, button_text, background_light } : {image_src: string, title: string, button_text: string, background_light?: boolean}) {
  return (
    <Flex {...FlexColCenterCenter} marginTop="20px" marginRight={["10px", "10px", "10px", "10px", "0px"]} marginLeft={["10px", "10px", "10px", "10px","20px"]}overflow={"hidden"} height="100%" position="relative" borderRadius={"20px"} >
        <CustomImage  src={image_src} width={490} height={579} />
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