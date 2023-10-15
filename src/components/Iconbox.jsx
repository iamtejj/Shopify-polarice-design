import { Box, Grid, Icon } from '@shopify/polaris'
import React from 'react'

export default function Iconbox({cardIconColor,iconSize,cardBgColor,cardTitleColor,cardSubTitleColor,titleFontSize,titleSubFontSize ,titleFontWeight ,titleSubFontWeight}) {
  return (
    <Box  borderColor="border" borderWidth="1">
        <div className='tedt' style={{border:'1px solid #f4f4f4',background:cardBgColor}}>
            <Grid > 
                <Grid.Cell gap="lg" columnSpan={{ xs: 4, sm: 3, md: 3, lg: 6, xl: 3 }}>
                    <div style={{padding:"15px",textAlign:"center"}}>
                        <GrinningFace width={`${iconSize}px`}  iconColor={cardIconColor} />
                        <div style={{width:"100%"}}>
                            <h5  style={{lineHeight:1.2,fontWeight:titleFontWeight,color:cardTitleColor,fontSize:`${titleFontSize}px`}}>Any questions??</h5>
                            <p style={{lineHeight:1.2,fontWeight:titleSubFontWeight ,color:cardSubTitleColor,fontSize:`${titleSubFontSize}px`}}>Contact us now</p>
                        </div>
                        
                    </div>
                </Grid.Cell>
                <Grid.Cell gap="lg" columnSpan={{ xs: 4, sm: 3, md: 3, lg: 6, xl: 3 }}>
                    <div style={{padding:"15px",textAlign:"center"}}>
                        <GrinningFace width={`${iconSize}px`}  iconColor={cardIconColor} />
                        <div style={{width:"100%"}}>
                            <h5  style={{lineHeight:1.2,fontWeight:titleFontWeight,color:cardTitleColor,fontSize:`${titleFontSize}px`}}>Any questions??</h5>
                            <p style={{lineHeight:1.2,fontWeight:titleSubFontWeight ,color:cardSubTitleColor,fontSize:`${titleSubFontSize}px`}}>Contact us now</p>
                        </div>
                        
                    </div>
                </Grid.Cell>
                <Grid.Cell gap="lg" columnSpan={{ xs: 4, sm: 3, md: 3, lg: 6, xl: 3 }}>
                    <div style={{padding:"15px",textAlign:"center"}}>
                        <GrinningFace width={`${iconSize}px`}  iconColor={cardIconColor} />
                        <div style={{width:"100%"}}>
                            <h5  style={{lineHeight:1.2,fontWeight:titleFontWeight,color:cardTitleColor,fontSize:`${titleFontSize}px`}}>Any questions??</h5>
                            <p style={{lineHeight:1.2,fontWeight:titleSubFontWeight ,color:cardSubTitleColor,fontSize:`${titleSubFontSize}px`}}>Contact us now</p>
                        </div>
                        
                    </div>
                </Grid.Cell>
                <Grid.Cell gap="lg" columnSpan={{ xs: 4, sm: 3, md: 3, lg: 6, xl: 3 }}>
                    <div style={{padding:"15px",textAlign:"center"}}>
                        <GrinningFace width={`${iconSize}px`}  iconColor={cardIconColor} />
                        <div style={{width:"100%"}}>
                            <h5  style={{lineHeight:1.2,fontWeight:titleFontWeight,color:cardTitleColor,fontSize:`${titleFontSize}px`}}>Any questions??</h5>
                            <p style={{lineHeight:1.2,fontWeight:titleSubFontWeight ,color:cardSubTitleColor,fontSize:`${titleSubFontSize}px`}}>Contact us now</p>
                        </div>
                        
                    </div>
                </Grid.Cell>
            </Grid>
        </div>
    </Box>
  )
}



function GrinningFace({width,iconColor}) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" id="emoji" viewBox="0 0 72 72" style={{width:width}}>
        <g id="color">
          <circle cx="36" cy="36" r="23" fill={iconColor}/>
          <path fill="#FFFFFF" d="M50.595,41.64c0.012,1.5397-0.2838,3.0662-0.87,4.49c-12.49,3.03-25.43,0.34-27.49-0.13 c-0.5588-1.3852-0.8407-2.8664-0.83-4.36h0.11c0,0,14.8,3.59,28.89,0.07L50.595,41.64z"/>
          <path fill="#EA5A47" d="M49.7251,46.13c-1.79,4.27-6.35,7.23-13.69,7.23c-7.41,0-12.03-3.03-13.8-7.36 C24.2951,46.47,37.235,49.16,49.7251,46.13z"/>
        </g>
        <g id="hair"/>
        <g id="skin"/>
        <g id="skin-shadow"/>
        <g id="line">
          <circle cx="36" cy="36" r="23" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
          <path fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M50.595,41.64 c0.012,1.5397-0.2838,3.0662-0.87,4.49c-12.49,3.03-25.43,0.34-27.49-0.13c-0.5588-1.3852-0.8407-2.8664-0.83-4.36h0.11 c0,0,14.8,3.59,28.89,0.07L50.595,41.64z"/>
          <path fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M49.7251,46.13 c-1.79,4.27-6.35,7.23-13.69,7.23c-7.41,0-12.03-3.03-13.8-7.36C24.2951,46.47,37.235,49.16,49.7251,46.13z"/>
          <path d="M30,31c0,1.6568-1.3448,3-3,3c-1.6553,0-3-1.3433-3-3c0-1.6552,1.3447-3,3-3C28.6552,28,30,29.3448,30,31"/>
          <path d="M48,31c0,1.6568-1.3447,3-3,3s-3-1.3433-3-3c0-1.6552,1.3447-3,3-3S48,29.3448,48,31"/>
        </g>
      </svg>
    );
  }