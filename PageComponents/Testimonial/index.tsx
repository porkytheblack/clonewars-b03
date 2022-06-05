import { Flex, chakra } from '@chakra-ui/react'
import React from 'react'
import { FlexColCenterCenter, FlexColStartCenter, FlexColStartStart, FlexRowCenterBetween } from '../../Components/Reusables/FlexComponents/FlexConfigs'
import { CustomImage } from '../HeroBlock'

function Testimonial() {
  return (
    <Flex {...FlexColStartStart} width="80%" marginTop="80px" marginBottom="150px" >
        <chakra.h3 fontSize="48px" marginBottom="16px 0px 20px 0px" lineHeight={"40px"} fontFamily={`"BasierCircleSemiBold", sans-serif`} >
                        Here's what our cutomers say
        </chakra.h3>
        <Flex {...FlexRowCenterBetween} width="100%" marginTop={"80px"}  >
            <Flex {...FlexColCenterCenter} borderRadius={"30px"} overflow="hidden" width="484px" >
                <CustomImage src={"/assets/revolut/Maxim.webp"} width={484} height={420} />
            </Flex>
            <Flex {...FlexColStartCenter} width="50%" >
                <chakra.div width="40px" height="40px" marginBottom="20px" borderRadius={"20px"} backgroundImage={`url("/assets/revolut/dott.jpg")`} backgroundSize="cover" backgroundRepeat={"no-repeat"} />
                <chakra.h3 fontSize="34px" marginBottom="20px" lineHeight={"40px"} fontFamily={`"BasierCircleSemiBold", sans-serif`} >
                "We launched our business Europe-wide in record time, saving huge amounts of time and money."
                </chakra.h3>
                <chakra.p fontSize="16px"  fontFamily={`"BasierCircleBold", sans-serif`}  >
                     Maxim Romain, Founder • Dott
                </chakra.p>
            </Flex>
        </Flex>
    </Flex>
  )
}

export default Testimonial