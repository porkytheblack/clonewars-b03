import React, { useEffect, useState } from 'react'
import { chakra, Flex, Grid, GridItem, useMediaQuery } from '@chakra-ui/react'
import Image from 'next/image'
import { CustomImage } from '../../PageComponents/HeroBlock'
import ActiveFowardBlueButton from '../Buttons/ActiveFowardBlueButton'
import { get_screen_size } from '../../utils/get_screen_size'
import {motion} from "framer-motion"

function Span2Container({image_src, button_text, explanation, title, background_light}:{image_src: string, title: string, explanation: string, button_text: string, background_light?: boolean}) {
    
    const [src, set_src] = useState<string>(image_src)
    const [isXl] = useMediaQuery("(min-width: 1200px)")
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
            }else{
                var sr = src.replace("mobile", "desktop").replace(".webp", ".png")
                set_src(sr)
            }
    }, [,isXl])
  return (
    <Grid onMouseEnter={h} onMouseDown={h} onMouseLeave={u_h} onMouseUp={u_h}  margin={["20px 10px", "20px 10px", "20px 10px", "20px 10px", "20px 5px"]} position="relative" borderRadius={"20px"}  overflow="hidden" >
        <motion.div animate={{scale: hover ? 1.1 : 1}} >
            <CustomImage src={src} width={isXl ? 1000 : 670 } height={isXl ? 524 : 1016 }  />
        </motion.div>
        <Grid justifyItems="center" position="absolute" padding="20px" top="0px" left="0px" templateColumns={"50% 50%"}  width="100%" height="524px" >
            <GridItem colSpan={[2,2,2,2,1]}  gridTemplateRows={["auto auto", "auto auto", "auto auto", "auto auto","50% 50%"]}  >
                <GridItem color={Boolean(background_light) ? "black" : "white"} display={"flex"} flexDirection="column" justifyContent={["flex-start", "flex-start", "flex-start", "flex-start", "flex-end"]}  height="50%" width="100%"  >
                    <chakra.h3 fontSize={["24px", "24px", "24px", "24px","34px"]} lineHeight={{
                        lg: "28px",
                        xl: "40px"
                    }} fontFamily={{xl:`"BasierCircleSemiBold", sans-serif`}} >
                        {title}
                    </chakra.h3>
                    <chakra.p marginTop="16px" fontSize={{lg: "16px",xl:"20px"}} lineHeight={{lg: "24px", xl:"28px"}} fontFamily={`"BasierCircleBold", sans-serif`}  >
                        {explanation}
                    </chakra.p>
                    {!isXl && <GridItem display={"flex"} flexDirection="column" height="50%" justifyContent={"flex-end"}    width="100%"  >
                    <ActiveFowardBlueButton background_light={Boolean(background_light)} >
                        {button_text}
                    </ActiveFowardBlueButton>
                </GridItem>}
                </GridItem>
                {isXl && <GridItem display={"flex"} flexDirection="column" height="50%" justifyContent={"flex-end"}    width="100%"  >
                    <ActiveFowardBlueButton background_light={Boolean(background_light)} >
                        {button_text}
                    </ActiveFowardBlueButton>
                </GridItem>}
            </GridItem>
        </Grid>
    </Grid>
  )
}

export default Span2Container

