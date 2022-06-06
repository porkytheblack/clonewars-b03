import { Flex, chakra } from '@chakra-ui/react'
import React, { useContext, useState } from 'react'
import { NavDropdownContext } from '../../Layout/TopNav'
import ArrowLeftButton from '../Buttons/ArrowLeftButton'
import ArrowLeftButtonAnimated from '../Buttons/ArrowLeftButtonAnimated'
import BaseButton from '../Buttons/BaseButton'
import MobileDropDownButton from '../Buttons/MobileDropDownButton'
import { FlexColCenterStart, FlexColStartStart, FlexRowCenterStart } from '../Reusables/FlexComponents/FlexConfigs'


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

function MobileDropDown() {
    const [chosen, set_chosen] = useState<"Personal" | "Business" | "Company">("Personal")
    const {active_selection, change_active_selection} = useContext(NavDropdownContext)
  return ( 
      <Flex width="100vw" padding="20px 10px"  {...FlexColCenterStart} height="90vh" position="absolute" top="100%" left="0px" bg="#191919" >
        <Flex {...FlexRowCenterStart} width="100%" marginBottom="16px"  >
             {["Personal", "Business", "Company"].map((val, ke)=>{
                 return (
                     <BaseButton onClick={()=>{
                         if(typeof change_active_selection !== "undefined" && (val == "Personal" || val == "Business" || val == "Company")) {
                            change_active_selection(val)
                         }
                         
                         }} key={ke} >
                         {val}
                     </BaseButton> 
                 )
             })}
         </Flex>
         {active_selection == "Company" && <Flex width="100%" {...FlexColCenterStart} >
         {["About us", "Culture", "Diversity and Inclusion", "Code of Conduct", "Careers", "News and Media", "Leadership", "Financial Statements"].map((val, ke)=>(
             <ArrowLeftButtonAnimated key={ke} >
                {val}
            </ArrowLeftButtonAnimated>
         ))}
            
         </Flex>}
         
         {active_selection !== "Company" && <Flex {...FlexColStartStart} width="100%" overflowY="scroll" >
             {PersonalLinks.map((val, ke)=>(
                 <MobileDropDownButton heading={val.heading} links={val.sub_headings} />
             ))}
         </Flex>}
            {active_selection === "Company" && <Flex width="100%" {...FlexRowCenterStart} >
                <ArrowLeftButtonAnimated>
                    Discover Revolut
                </ArrowLeftButtonAnimated>
            </Flex>}
         {active_selection !== "Company" && <Flex {...FlexColStartStart} width="100%" >
            <chakra.span fontFamily={`"BasierCircleBold", sans-serif`} marginRight="10px" fontSize="24px" >
                Plans
            </chakra.span>
            <Flex {...FlexColStartStart} width="100%" >
                {Plans.filter(plan=>plan.selection===active_selection).map((val, ke)=>(
                    <>
                    {val.plans.map((plan, index)=>(
                        <ArrowLeftButtonAnimated key={index} >
                            {plan}
                        </ArrowLeftButtonAnimated>
                    ))}
                    </>
                ))}
            </Flex>
         </Flex>}
      </Flex>
    // <Flex background={"yellow"} {...FlexColCenterStart} position="absolute" bottom="100%" left="0px" width="100vw" height="90vh"  >
    //     <Flex {...FlexRowCenterStart} width="100%" marginBottom="16px"  >
    //         {["Personal", "Business", "Company"].map((val, ke)=>{
    //             return (
    //                 <BaseButton key={ke} >
    //                     {val}
    //                 </BaseButton>
    //             )
    //         })}
    //     </Flex>
    //     <ArrowLeftButton>
    //         Discover Revolut
    //     </ArrowLeftButton>
    //     <Flex {...FlexColStartStart} width="100%" >
    //         {PersonalLinks.map((val, ke)=>(
    //             <MobileDropDownButton heading={val.heading} links={val.sub_headings} />
    //         ))}
    //     </Flex>
    // </Flex>
  )
}

export default MobileDropDown