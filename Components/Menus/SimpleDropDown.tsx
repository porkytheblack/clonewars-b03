import { Grid, keyframes } from '@chakra-ui/react'
import React, { ReactNode } from 'react'
import ArrowLeftButtonAnimated from '../Buttons/ArrowLeftButtonAnimated'

const animationKeyframes = keyframes`
    from{
        opacity: 0;
    }
    to{
        opacity: 1;
    }
`

function SimpleDropDown({links, position}: {links: string[], position: {top: string, left: string}}) {
    
  return (
    <Grid width="250px" animation={`${animationKeyframes} 0.5s linear`} padding="20px" borderRadius="10px" top={position.top} left={position.left} templateRows={`${links.map(()=>"auto").join().replaceAll(",", " ")}`} rowGap="5px" background="#191919" position="absolute"  >
        {links.map((node, index)=>(
            <ArrowLeftButtonAnimated key={index} >
                {node}
            </ArrowLeftButtonAnimated>
        ))}
    </Grid>
  )
}

export default SimpleDropDown