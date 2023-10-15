import React from 'react'
import {
    Grid,
    LegacyCard,
    RangeSlider,
    TextField
} from "@shopify/polaris";
export default function Spacing({handlespaceBtnBlock,spaceBtnBlock}) {
    return (
        <>
        <LegacyCard title="Spacing" sectioned>
            <Grid>
                <Grid.Cell columnSpan={{ xs: 4, sm: 3, md: 3, lg: 6, xl: 10 }}>
                    <RangeSlider
                        label="Blocksize"
                        value={45}
                        onChange={()=>{console.log("hello")}}
                        output
                        suffix="px"
                    />
                </Grid.Cell>
                <Grid.Cell columnSpan={{ xs: 4, sm: 3, md: 3, lg: 6, xl: 2 }}>
                        <TextField
                            label=""
                            type="number"
                            value={15}
                            onChange={()=>{console.log("hello")}}
                            autoComplete="off"
                            suffix="px"
                        />
                </Grid.Cell>
                <Grid.Cell columnSpan={{ xs: 4, sm: 3, md: 3, lg: 6, xl: 6 }}>
                        <TextField
                            label="Goes Up"
                            type="number"
                            value={15}
                            onChange={()=>{console.log("hello")}}
                            autoComplete="off"
                            suffix="px"
                        />
                </Grid.Cell>
                <Grid.Cell columnSpan={{ xs: 4, sm: 3, md: 3, lg: 6, xl: 6 }}>
                <TextField
                            label="Goes Down"
                            type="number"
                            value={15}
                            onChange={()=>{console.log("hello")}}
                            autoComplete="off"
                            suffix="px"
                        />
                </Grid.Cell>
                <Grid.Cell columnSpan={{ xs: 4, sm: 3, md: 3, lg: 6, xl: 10 }}>
                    <RangeSlider
                        label="Space in Between Block"
                        value={spaceBtnBlock}
                        onChange={handlespaceBtnBlock}
                        output
                    />
                </Grid.Cell>
                <Grid.Cell columnSpan={{ xs: 4, sm: 3, md: 3, lg: 6, xl: 2 }}>
                        <TextField
                            label=""
                            type="number"
                            value={spaceBtnBlock}
                            onChange={handlespaceBtnBlock}
                            autoComplete="off"
                            suffix="%"
                        />
                </Grid.Cell>
            </Grid>
        </LegacyCard>

       
        </>
        

    )
}
