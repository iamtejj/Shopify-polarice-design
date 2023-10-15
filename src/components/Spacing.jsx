import React from 'react'
import {
    Grid,
    LegacyCard,
    RangeSlider,
    TextField
} from "@shopify/polaris";
export default function Spacing({rangeValue,handleRangeSliderChange}) {
    return (
        <>
        <LegacyCard title="Spacing" sectioned>
            <Grid>
                <Grid.Cell columnSpan={{ xs: 4, sm: 3, md: 3, lg: 6, xl: 10 }}>
                    <RangeSlider
                        label="Blocksize"
                        value={rangeValue}
                        onChange={handleRangeSliderChange}
                        output
                        suffix="px"
                    />
                </Grid.Cell>
                <Grid.Cell columnSpan={{ xs: 4, sm: 3, md: 3, lg: 6, xl: 2 }}>
                        <TextField
                            label=""
                            type="number"
                            value={rangeValue}
                            onChange={handleRangeSliderChange}
                            autoComplete="off"
                            suffix="px"
                        />
                </Grid.Cell>
                <Grid.Cell columnSpan={{ xs: 4, sm: 3, md: 3, lg: 6, xl: 6 }}>
                        <TextField
                            label="Goes Up"
                            type="number"
                            value={rangeValue}
                            onChange={handleRangeSliderChange}
                            autoComplete="off"
                            suffix="px"
                        />
                </Grid.Cell>
                <Grid.Cell columnSpan={{ xs: 4, sm: 3, md: 3, lg: 6, xl: 6 }}>
                <TextField
                            label="Goes Down"
                            type="number"
                            value={rangeValue}
                            onChange={handleRangeSliderChange}
                            autoComplete="off"
                            suffix="px"
                        />
                </Grid.Cell>
                <Grid.Cell columnSpan={{ xs: 4, sm: 3, md: 3, lg: 6, xl: 10 }}>
                    <RangeSlider
                        label="Space in Between Block"
                        value={rangeValue}
                        onChange={handleRangeSliderChange}
                        output
                        suffix="px"
                    />
                </Grid.Cell>
                <Grid.Cell columnSpan={{ xs: 4, sm: 3, md: 3, lg: 6, xl: 2 }}>
                        <TextField
                            label=""
                            type="number"
                            value={rangeValue}
                            onChange={handleRangeSliderChange}
                            autoComplete="off"
                            suffix="px"
                        />
                </Grid.Cell>
            </Grid>
        </LegacyCard>

       
        </>
        

    )
}
