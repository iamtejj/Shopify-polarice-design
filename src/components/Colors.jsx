import {
    Checkbox,
    Grid,
    LegacyCard,
    Text,
    TextField
} from "@shopify/polaris";
export default function Colors({ handleSetTransparent , checked,handleCardBgChange, handleSubTitleColor,cardBgColor ,handleTitleColor,cardTitleColor,cardSubTitleColor,handleIconColor,cardIconColor}) {

    return (
        <LegacyCard title="Colors" sectioned>
            <Grid>
                <Grid.Cell columnSpan={{ xs: 4, sm: 3, md: 3, lg: 6, xl: 6 }}>
                    <Grid>
                        <Grid.Cell columnSpan={{ xs: 4, sm: 3, md: 3, lg: 6, xl: 6 }}>
                            <Text variant="bodyLg" as="span" alignment="start">Background Color</Text>
                        </Grid.Cell>
                        <Grid.Cell columnSpan={{ xs: 4, sm: 3, md: 3, lg: 6, xl: 6 }}>
                            <TextField onChange={
                                (value)=>{
                                    handleCardBgChange(value)
                                }
                                } value={cardBgColor}>
                            </TextField>
                        </Grid.Cell>
                        <Grid.Cell columnSpan={{ xs: 4, sm: 3, md: 3, lg: 6, xl: 6 }}>
                            <Text variant="bodyLg" as="span" alignment="start">Icon Color</Text>
                        </Grid.Cell>
                        <Grid.Cell columnSpan={{ xs: 4, sm: 3, md: 3, lg: 6, xl: 6 }}>
                            <TextField onChange={handleIconColor} value={cardIconColor}>
                            </TextField>
                        </Grid.Cell> 
                    </Grid>
                </Grid.Cell>
                <Grid.Cell columnSpan={{ xs: 4, sm: 3, md: 3, lg: 6, xl: 6 }}>
                    <Grid>
                        <Grid.Cell columnSpan={{ xs: 4, sm: 3, md: 3, lg: 6, xl: 6 }}>
                            <Text variant="bodyLg" as="span" alignment="start">Title Color</Text>
                        </Grid.Cell>
                        <Grid.Cell columnSpan={{ xs: 4, sm: 3, md: 3, lg: 6, xl: 6 }}>
                            <TextField onChange={handleTitleColor} value={cardTitleColor}>
                            </TextField> 
                        </Grid.Cell>
                        <Grid.Cell columnSpan={{ xs: 4, sm: 3, md: 3, lg: 6, xl: 6 }}>
                            <Text variant="bodyLg" as="span" alignment="start">Subtitle Color</Text>
                        </Grid.Cell>
                        <Grid.Cell columnSpan={{ xs: 4, sm: 3, md: 3, lg: 6, xl: 6 }}>
                            <TextField onChange={handleSubTitleColor} value={cardSubTitleColor}>
                            </TextField>
                        </Grid.Cell>
                    </Grid>
                </Grid.Cell>
                <Grid.Cell columnSpan={{ xs: 4, sm: 3, md: 3, lg: 6, xl: 12 }}>
                <Checkbox
                    label="Transparent Background"
                    checked={checked}
                    onChange={handleSetTransparent}
                    />
   
                </Grid.Cell>
            </Grid>
        </LegacyCard>

    )
}
