import '@shopify/polaris/build/esm/styles.css';
import enTranslations from '@shopify/polaris/locales/en.json';
import {
  Page,
  Layout,
  Grid,
  Text,
  LegacyCard,
  Button,
  AppProvider
} from "@shopify/polaris";
import Iconrangebar from "./components/Iconrangebar";
import Colors from "./components/Colors";
import Typography from "./components/Typography";
import Spacing from "./components/Spacing";
import Iconbox from "./components/Iconbox";
import { useCallback, useState } from 'react';

function App() {
  const [rangeValue, setRangeValue] = useState(32);
  const [iconSize,setIconsize] = useState(50)
  const [cardBgColor, setCardBgColor] = useState('#ffffff');
  const [cardTitleColor, setTitleColor] = useState('#000000');
  const [cardSubTitleColor, setcardSubTitleColor] = useState('#454545');
  const [cardIconColor, setIconColor] = useState('#FCEA2B');
  const [titleFontSize,setTitalFontsize] = useState(15);
  const [titleFontWeight,setTitleFontWeight] = useState('normal');
  const [titleSubFontSize,setSubTitalFontsize] = useState(15);
  const [titleSubFontWeight,setSubTitleFontWeight] = useState('normal')

  const handleSubTitleFontWeight = useCallback(
    (newValue) => setSubTitleFontWeight(newValue),
    []
  );

  const handleTitleFontWeight = useCallback(
    (newValue) => setTitleFontWeight(newValue),
    []
  );

  const handleSubTitleFont = useCallback(
    (newValue) => setSubTitalFontsize(newValue),
    []
  );
  
  const handleTitleFont = useCallback(
    (newValue) => setTitalFontsize(newValue),
    []
  );
  
  const handleIconColor = useCallback(
    (newValue) => setIconColor(newValue),
    []
  );


  const handleTitleColor = useCallback(
    (newValue) => setTitleColor(newValue),
    []
  );

  const handleCardBgChange = (newvalue)=>{
    setCardBgColor(newvalue)
  };
  const handleIconSizeChange = useCallback(
    (value) => setIconsize(value),
    [],
  );
  const handleRangeSliderChange = useCallback(
    (value) => setRangeValue(value),
    [], 
  );
  const handleSubTitleColor = useCallback(
    (value) => setcardSubTitleColor(value),
    [],
  )

  return (
    <>
       <AppProvider i18n={enTranslations}>
       <Page fullWidth>
      <Grid>
        <Grid.Cell columnSpan={{ xs: 6, sm: 3, md: 3, lg: 6, xl: 6 }}>
          <Grid>
            <Grid.Cell columnSpan={{ xs: 4, sm: 3, md: 3, lg: 6, xl: 4 }}>
              <Button size="large" fullWidth={true}>Block</Button>
            </Grid.Cell>
            <Grid.Cell columnSpan={{ xs: 4, sm: 3, md: 3, lg: 6, xl: 4 }}>
              <Button size="large" fullWidth={true}>Block</Button>
            </Grid.Cell>
            <Grid.Cell columnSpan={{ xs: 4, sm: 3, md: 3, lg: 6, xl: 4 }}>
              <Button size="large" fullWidth={true}>
                <Text >
                  Style
                </Text>
              </Button>
            </Grid.Cell>
          </Grid>
          <Layout>
            <Layout.Section>
              <Iconrangebar rangeValue={iconSize} handleRangeSliderChange={handleIconSizeChange} ></Iconrangebar>
            </Layout.Section>
            <Layout.Section>
              <Colors
               handleCardBgChange={handleCardBgChange} 
               cardBgColor={cardBgColor} 
               handleTitleColor={handleTitleColor} 
               cardTitleColor={cardTitleColor} 
               handleSubTitleColor={handleSubTitleColor} 
               cardSubTitleColor={cardSubTitleColor} 
               handleIconColor={handleIconColor}
               cardIconColor={cardIconColor}
               /> 
            </Layout.Section>
            <Layout.Section>
              <Typography titleFontSize={titleFontSize} handleTitleFont={handleTitleFont} titleSubFontSize={titleSubFontSize} handleSubTitleFont={handleSubTitleFont} titleFontWeight={titleFontWeight} handleTitleFontWeight={handleTitleFontWeight} titleSubFontWeight={titleSubFontWeight} handleSubTitleFontWeight={handleSubTitleFontWeight} handleIconColor={handleIconColor}  /> 
            </Layout.Section>
            <Layout.Section>
             <Spacing rangeValue={rangeValue} handleRangeSliderChange={handleRangeSliderChange}  /> 
            </Layout.Section>
          </Layout>
        </Grid.Cell>
        <Grid.Cell columnSpan={{ xs: 6, sm: 3, md: 3, lg: 6, xl: 6 }}>
          <LegacyCard title="Desktop" sectioned>
            <Iconbox 
            iconSize={iconSize} 
            cardBgColor={cardBgColor} 
            cardTitleColor={cardTitleColor} 
            cardSubTitleColor={cardSubTitleColor} 
            titleFontSize={titleFontSize}
            titleSubFontSize={titleSubFontSize}
            titleFontWeight={titleFontWeight}
            titleSubFontWeight={titleSubFontWeight}
            cardIconColor={cardIconColor}
            />
          </LegacyCard>
        </Grid.Cell>
      </Grid>
    </Page>
      </AppProvider>,
    </>
  )
}

export default App
