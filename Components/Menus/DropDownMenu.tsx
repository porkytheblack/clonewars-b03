import { Grid, GridItem, chakra, keyframes } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { NavDropdownContext } from '../../Layout/TopNav'
import ArrowLeftButton from '../Buttons/ArrowLeftButton'
import ArrowLeftButtonAnimated from '../Buttons/ArrowLeftButtonAnimated'
import { FlexColStartStart } from '../Reusables/FlexComponents/FlexConfigs'

interface links {
    heading: string,
    sub_headings: string[]
}
interface plans {
    selection: "Personal" | "Business" | "Company",
    plans: string[]
}

const Plans: plans[] = [ 
    {selection: "Personal", plans: [
        "Standard",
        "Plus",
        "Premium",
        "Metal",
        "Compare Plans"
    ] },
    {
        selection: "Business",
        plans: [
            "Buisness Pricing"
        ]
    }
]

const PersonalLinks: links[] = [
    {
        heading: "Every day needs",
        sub_headings: [
            "Payments",
            "Early salary",
            "On-Demand Pay",
            "Cards",
            "Budgeting and analytics",
            "Junior",
            "Open banking",
            "Pockets",
            "Rewards",
            "Subscriptions",
            "Gifting",
            "Donations"
        ]
    },
    {
        heading: "Invest",
        sub_headings: [
            "Crypto",
            "Stocks",
            "Commodities", 
            "Vaults",
            "Saving vaults"
        ]
    },
    {
        heading: "Travel",
        sub_headings: [
            "International Transfers",
            "Currency Exchange",
            "Lounge & Smart delay",
            "Stays"
        ]
    },
    {
        heading: "Insuarance",
        sub_headings: [
            "Pet insurance"
        ]
    },
    {
        heading: "Help",
        sub_headings: [
            "Customer Help",
            "System setup",
            "Community"
        ]
    },
    {
        heading: "Security",
        sub_headings: [
            "Security",
            "Revolut Shopper"
        ]
    },
   
    
]


const animateDropdownKeyframes = keyframes`
    from {
        opacity: 0;
        z-index: 1;
    }
    to{
        margin-top: 0%;
        opacity: 1;
        z-index: 10;
    }
`

function DropDownMenu({position, active_menu}: {position: {top: string, left: string}, active_menu: "Personal" | "Business" | "Company"}) {
    
  return (
    <Grid animation={`${animateDropdownKeyframes} .5s linear`}  autoFlow={"dense"} templateColumns={"24% 24% 24% 24%"}  columnGap={2} top={position.top} left={position.left}  width="80vw" bg="#111111" position="absolute" {...FlexColStartStart} borderRadius="10px" padding="20px"   >
        <GridItem rowGap={"10px"}  gridTemplateRows={"auto auto"} colSpan={3}  >
            <ArrowLeftButton style={{width: "100%"}} >
                Discover Revolut
            </ArrowLeftButton>
            <Grid width="100%"  templateColumns={"30% 30% 30%"} templateRows={"auto auto auto"} autoFlow="row" marginTop="20px" columnGap={"5px"} >
                {PersonalLinks.map((value, index)=>(
                    <GridItem key={index}  rowSpan={value.sub_headings.length <= 5 ? 1 : 3} >
                        <chakra.h4 fontSize={"16px"} color="white" marginBottom={"16px"} >
                            {value.heading}
                        </chakra.h4>
                        {value.sub_headings.map((sub, key)=>(
                            <ArrowLeftButtonAnimated key={key} >
                                {sub}
                            </ArrowLeftButtonAnimated>
                        ))}
                    </GridItem>
                ))}
            </Grid>
        </GridItem>
        <GridItem bg="#191919" padding="20px" borderRadius="10px" height="100%"  colSpan={1}   >   
            <chakra.h4 color="white" marginBottom="20px" fontFamily={`"BasierCircleBold", sans-serif`} fontSize="24px" >
                Plans
            </chakra.h4>
            <Grid width="100%" templateRows={`${Plans.filter(plan=>plan.selection ==active_menu).map(()=>"auto").join().replaceAll(",", " ")}`} rowGap="10px" > 
                            {Plans.filter(plan=>plan.selection == active_menu)[0].plans.map((plan, index)=>(
                                <GridItem width={"100%"} >
                                    <ArrowLeftButtonAnimated key={index} animate_bg={false} >
                                        {plan}
                                    </ArrowLeftButtonAnimated>
                                </GridItem>
                            ))}
            </Grid>
        </GridItem>
    </Grid>
  )
}

export default DropDownMenu