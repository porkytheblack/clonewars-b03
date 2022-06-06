import { Flex, Grid, chakra, GridItem } from '@chakra-ui/react'
import React from 'react'
import ReactCountryFlag from 'react-country-flag'
import SimpleLink from '../../Components/Buttons/SimpleLink'
import { FlexColCenterStart, FlexColStartStart, FlexRowStartBetween } from '../../Components/Reusables/FlexComponents/FlexConfigs'
import { get_screen_size } from '../../utils/get_screen_size'

interface f_item {
    title: string,
    links: string[],
}

const FooterItems: f_item[] = [
    {
        title: "Account",
        links: [
            "Cards",
            "Team",
            "Multi-currency account",
            "Rewards",
        ],
    },
    {
        title: "Treasury",
        links: [
            "FX fowards"
        ],
    },
    {
        title: "Receive Payments",
        links: ["Accept Payments", 
        "Payment Gateway",
        "Payment Links",
        "Payment QR code",
        "Accept payments",
        "Pricing"
        ]
    },
    {
        title: "Tools",
        links: [
            "Invoices",
            "Expenses",
            "Partner apps",
            "Business API",
            "On-Demand pay",
            "Spend Management",
        ]
    },
    {
        title: "Help",
        links: [
            "Security",
            "Help",
            "Community",
            "System status",
        ]
    },
    {
        title: "Plans",
        links: [
            "Business Pricing",
        ]
    }
]

function Footer() {
    const {isLarge} = get_screen_size()
  return (
    <Flex {...FlexColCenterStart} width="100%" bg="#191919"  padding="30px 30px" >
        {!isLarge && <Grid width="80%" templateColumns={"auto auto auto auto auto auto"} columnGap={"10px"} rowGap="5px" templateRows={"auto auto"} >
            {FooterItems.map((item, index) => (
                <GridItem key={index} rowSpan={item.links.length >= 4 ? 2 : 1 } >
                    <Flex {...FlexColCenterStart} width="100%" textAlign={"left"} >
                        <chakra.h3 fontSize="14px"  width="100%" textAlign={"left"} >
                            {item.title}
                        </chakra.h3>
                        {item.links.map((link, index) => (
                            <SimpleLink key={index} >
                                {link}
                            </SimpleLink>
                        ))}
                    </Flex>
                </GridItem>
            ))}
        </Grid>}
        {!isLarge && <Flex {...FlexRowStartBetween} marginTop="30px" width="80%" >
            <ReactCountryFlag countryCode='US'   />
            <Grid width="90%"  templateColumns={"auto auto auto auto auto auto"} templateRows="auto auto" columnGap="5px" >
                {["Website terms","Legal Agreements","Complaints","Privacy", "Responsible Disclosure Program Policy","UK Modern Slavery Policy","Customer Vulnerability","Data Privacy Statement for Candidates"].map((item, ky)=>(
                    <SimpleLink key={ky} >
                        {item}
                    </SimpleLink>
                ))}
            </Grid>
        </Flex>}
        <Flex {...FlexColStartStart} color="rgba(255, 255, 255, 0.6)" marginTop={"40px"} width="80%"  >
            <chakra.p fontSize="12px"  marginBottom={"20px"}  width="100%" textAlign={"left"} >
                © Revolut Ltd 2022
            </chakra.p>
            <chakra.p fontSize="12px" marginBottom={"20px"}  width="100%" textAlign={"left"} >
            If you would like to find out more about which Revolut entity you receive services from, or if you have any other questions, please reach out to us via the in-app chat in the Revolut app. Revolut Ltd (No. 08804411) is authorised by the Financial Conduct Authority under the Electronic Money Regulations 2011 (Firm Reference 900562). Registered address: 7 Westferry Circus, Canary Wharf, London, England, E14 4HD. Insurance related-products are arranged by Revolut Travel Ltd which is authorised by the Financial Conduct Authority to undertake insurance distribution activities (FCA No: 780586) and by Revolut Ltd, an Appointed Representative of Revolut Travel Ltd in relation to insurance distribution activities. Trading and investment products are provided by Revolut Trading Ltd (No. 832790) is wholly owned subsidiary of Revolut Ltd and is an appointed representative of Resolution Compliance Ltd which is authorised and regulated by the Financial Conduct Authority.
            </chakra.p>
            <chakra.p fontSize="12px" marginBottom={"20px"}  width="100%" textAlign={"left"} >
            Revolut's cryptocurrency service is not regulated by the FCA, other than for the purposes of money laundering. Revolut Ltd has been temporarily registered with the FCA as a cryptoasset business, pending determination of its application by the FCA.
            </chakra.p>
            <chakra.p fontSize="12px"   width="100%" textAlign={"left"} >
            Revolut's commodities service is not regulated by the FCA.
            </chakra.p>
        </Flex>
    </Flex>
  )
}

export default Footer