import { Flex, Grid, chakra, useMediaQuery, FlexProps } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import ActiveBlueWhiteOutlineButton from '../Components/Buttons/ActiveBlueWhiteOutlineButton'
import ActiveButtonWhite from '../Components/Buttons/ActiveButtonWhite'
import ShortSection from '../Components/Containers/ShortSection'
import Span1Container from '../Components/Containers/Span1Container'
import Span1Container2 from '../Components/Containers/Span1Container2'
import Span2Container from '../Components/Containers/Span2Container'
import { FlexColCenterBetween, FlexColCenterStart, FlexRowCenterBetween, FlexRowCenterCenter } from '../Components/Reusables/FlexComponents/FlexConfigs'
import HeroBlock from '../PageComponents/HeroBlock'
import ShortSectionAfterHero from '../PageComponents/ShortSectionAfterHero'
import Testimonial from '../PageComponents/Testimonial'
import { get_screen_size } from '../utils/get_screen_size'

const Home: NextPage = () => {
  const [isXl] = useMediaQuery('(min-width: 1200px)')
  const [small_flex_config, set_small_flex_config] = useState<FlexProps>(FlexColCenterStart)
  useEffect(()=>{
    if(isXl){
      set_small_flex_config(FlexRowCenterBetween)
    }else{
      set_small_flex_config(FlexColCenterBetween)
    }
  }, [,isXl])
  return (
    <Flex width="100vw" height="100%" {...FlexColCenterStart}  paddingTop="68px" paddingBottom="100px" >
      <HeroBlock/>  
      <ShortSectionAfterHero/>
      <Span2Container image_src={`/assets/revolut/section_2_desktop.png`} button_text='Payments and Transfers' title="Transfer without borders" explanation={"Save money with transfers and payments at market leading rates"} />
      <Flex {...small_flex_config} marginTop="20px" marginBottom={"20px"} width={{xl:"80%", lg: "100%"}} >
        <Span1Container image_src='/assets/revolut/section_3a_desktop.png' title="Exchange money at greate rates in 30+ currencies" button_text='Exchange' />
        <Span1Container image_src='/assets/revolut/section_3b_desktop.png' title="Set your fixed FX rates online, 24/7" button_text='FX Fowards' />
      </Flex>
      <Span2Container image_src='/assets/revolut/section_4a_desktop.png'  button_text='Accepting Payments' title="Make and take payments, all in one place" explanation={"Accept payments easily worldwide and get fast accessto your funds  "} />
      <Testimonial/>
      <ShortSection title="Stay in control of your spend" more="Discover the meaning of efficiency with Revolut Business" />
      <Span2Container image_src='/assets/revolut/section_5a_desktop.png' background_light button_text='Cards' title="Smart cards for smart business" explanation={"Empower yourself and your team with physical and virtual company credit cards"} />
      <Flex  {...small_flex_config} marginTop="20px" marginBottom={"20px"} width={["100%", "100%", "100%", "100%", "80%"]} >
        <Span1Container image_src='/assets/revolut/section_6a_desktop.png' title="Got a team? Control spend and permissions from one place Team" button_text='Team' />
        <Span1Container image_src='/assets/revolut/section_6b_desktop.png' background_light title="Avoid hassle with automated expenses" button_text='Expenses' />
      </Flex>
      <ShortSection title="Everything you need to run your business in one place" more="Keep costs down and productivity high" />
      <Span2Container background_light image_src='/assets/revolut/section_7.png' button_text='Explore partner apps' title="Less admin with accounting intergrations" explanation={"Easily intergrate your accounting software like Xero and Quickbooks to save time"} />
      <Flex {...small_flex_config} marginTop="20px" marginBottom={"20px"} width={["100%", "100%", "100%", "100%", "80%"]}  >
        <Span1Container image_src='/assets/revolut/section_8a_desktop.png' background_light title="Access all our apps and intergrations" button_text='Learn more' />
        <Span1Container image_src='/assets/revolut/section_8b_desktop.png' title="Get paid faster with smart invoicing" button_text='Invoices' />
      </Flex>
      <Span2Container image_src='/assets/revolut/section_9_desktop.png' button_text='Business API' title="Unlock the power of APIs" explanation={"Seamlessly intergrate your own tools and automate your payments with our buisness API for a customized experience"} />
      <Span2Container background_light image_src='/assets/revolut/section_10_desktop.png' button_text='Get the app' title="Also available on mobile" explanation={"Easily and securely access your Revolut Business account from your phone with our mobile app"} />
      <ShortSection title="Security that’s super smart and safe" more="Spend with confidence" />
      <Flex  {...small_flex_config}marginTop="20px" marginBottom={"20px"} width={["100%", "100%", "100%", "100%", "80%"]} >
        <Span1Container2 image_src='/assets/revolut/section_11a_desktop.png' title="Keep your money safe with our high quality tech security systems" button_text='More about security' />
        <Span1Container2 image_src='/assets/revolut/section_11b_desktop.png' title="Block or freeze cards and set limits with a tap" button_text='More about cards' />
      </Flex>
      <ShortSection title="For local heroes, startups and ambitious big businesses" more="Empower your team and stay in control of your spend" />
      <Flex  {...small_flex_config} marginTop="20px" marginBottom={"20px"} width={["100%", "100%", "100%", "100%", "80%"]}  >
        <Span1Container2 image_src='/assets/revolut/section_12a_desktop.png' background_light title="Separate buisness and personal finances to raise your game" button_text='Freelance Plans' />
        <Span1Container2 image_src='/assets/revolut/section_12b_desktop.png' title="Get perfect fit plans to supercharge your business" button_text='Company plans' />
      </Flex>
      <Flex {...FlexColCenterStart} marginTop="30px" >
        <chakra.p color="#838383" marginBottom="20px" fontSize="20px" >
          What are you waiting for?
        </chakra.p>
        <chakra.h1 marginBottom="20px" fontSize={["34px", "34px", "34px", "34px","72px"]} textAlign="center"  width="100%" fontWeight={"600"} fontFamily={`"BasierCircleSemiBold", sans-serif`} >
                Join Revolut Business 
          </chakra.h1>
          <Flex justifyContent="center" alignItems="center" flexDirection={["column", "column", "column", "row"]} >
            <ActiveButtonWhite style={{marginRight: "20px"}} >
              Sign up in minutes
            </ActiveButtonWhite>
            <ActiveBlueWhiteOutlineButton>
              Contact sales
            </ActiveBlueWhiteOutlineButton>
          </Flex>
      </Flex>
    </Flex>
  )
}

export default Home
