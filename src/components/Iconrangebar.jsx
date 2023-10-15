import React from 'react'
import {
    Grid,
    LegacyCard,
    RangeSlider,
    TextField
} from "@shopify/polaris";
export default function Iconrangebar({rangeValue,handleRangeSliderChange}) {
    return (
        <LegacyCard title="Icon Size" sectioned>
            <Grid>
                <Grid.Cell columnSpan={{ xs: 4, sm: 3, md: 3, lg: 6, xl: 10 }}>
                    <RangeSlider
                        value={rangeValue}
                        min={25}
                        max={150}
                        onChange={handleRangeSliderChange}
                        output
                        suffix="px"
                    />
                </Grid.Cell>
                <Grid.Cell columnSpan={{ xs: 4, sm: 3, md: 3, lg: 6, xl: 2 }}>
                        <TextField
                            type="number"
                            value={rangeValue}
                            onChange={handleRangeSliderChange}
                            autoComplete="off"
                            suffix="px"
                        />
                </Grid.Cell>
            </Grid>
        </LegacyCard>

    )
}
