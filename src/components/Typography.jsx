import React from 'react'
import {
    Grid,
    LegacyCard,
    RangeSlider,
    Text,
    Select,
    TextField
} from "@shopify/polaris";
export default function Typography({ handleTitleFont, titleFontSize ,titleSubFontSize ,handleSubTitleFont ,handleTitleFontWeight,titleFontWeight,titleSubFontWeight,handleSubTitleFontWeight}) {
    const options = [
        {label: 'Regular', value: 'normal'},
        {label: 'Bold', value: 'bold'}
      ];
    
    return (
        <LegacyCard title="TYPOGRAPHY" sectioned>
            <Grid>
                <Grid.Cell columnSpan={{ xs: 4, sm: 3, md: 3, lg: 6, xl: 12 }}>
                    <Grid>
                        <Grid.Cell columnSpan={{ xs: 4, sm: 3, md: 3, lg: 6, xl: 6 }}>
                        <TextField
                            label="Title Font size"
                            type="number"
                            value={titleFontSize}
                            onChange={handleTitleFont}
                            autoComplete="off"
                            />
                        </Grid.Cell>
                        <Grid.Cell columnSpan={{ xs: 4, sm: 3, md: 3, lg: 6, xl: 6 }}>
                        <Select
                            label="Title Font Style"
                            options={options}
                            onChange={handleTitleFontWeight}
                            value={titleFontWeight}
                            />
                        </Grid.Cell>
                        <Grid.Cell columnSpan={{ xs: 4, sm: 3, md: 3, lg: 6, xl: 6 }}>
                        <TextField
                            label="Subtitle Font size"
                            type="number"
                            value={titleSubFontSize}
                            onChange={handleSubTitleFont}
                            autoComplete="off"
                            />

                        </Grid.Cell>
                        
                        <Grid.Cell columnSpan={{ xs: 4, sm: 3, md: 3, lg: 6, xl: 6 }}>
                        <Select
                            label="Subtitle Font Style"
                            options={options}
                            onChange={handleSubTitleFontWeight}
                            value={titleSubFontWeight}
                            />

                        </Grid.Cell>
                    </Grid>
                </Grid.Cell>
            </Grid>
        </LegacyCard>

    )
}
