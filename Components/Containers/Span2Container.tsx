import React from 'react'
import { chakra, Flex, Grid, GridItem } from '@chakra-ui/react'
import Image from 'next/image'
import { CustomImage } from '../../PageComponents/HeroBlock'
import ActiveFowardBlueButton from '../Buttons/ActiveFowardBlueButton'

function Span2Container({image_src, button_text, explanation, title, background_light}:{image_src: string, title: string, explanation: string, button_text: string, background_light?: boolean}) {
  return (
    <Grid position="relative" borderRadius={"20px"} marginTop="20px" overflow="hidden" >
        <CustomImage src={image_src} width={1000} height={524}  />
        <Grid justifyItems="center" position="absolute" padding="20px" top="0px" left="0px" templateColumns={"50% 50%"}  width="100%" height="524px" >
            <GridItem  gridTemplateRows={"50% 50%"}  >
                <GridItem color={Boolean(background_light) ? "black" : "white"} display={"flex"} flexDirection="column" justifyContent={"flex-end"}  height="50%" width="100%"  >
                    <chakra.h3 fontSize="34px" lineHeight={"40px"} fontFamily={`"BasierCircleSemiBold", sans-serif`} >
                        {title}
                    </chakra.h3>
                    <chakra.p marginTop="16px" fontSize={"20px"} lineHeight="28px" fontFamily={`"BasierCircleBold", sans-serif`}  >
                        {explanation}
                    </chakra.p>
                </GridItem>
                <GridItem display={"flex"} flexDirection="column" height="50%" justifyContent={"flex-end"}    width="100%"  >
                    <ActiveFowardBlueButton background_light={Boolean(background_light)} >
                        {button_text}
                    </ActiveFowardBlueButton>
                </GridItem>
            </GridItem>
        </Grid>
    </Grid>
  )
}

export default Span2Container

