import * as React from 'react';

import {themeTools} from 'native-base';
import {extendTheme, NativeBaseProvider} from 'native-base';
import {NavigationContainer} from '@react-navigation/native';
import {Platform, useColorScheme} from 'react-native';

//Components
import palette from './src/theme/palette';
import navigation from './src/theme/navigation';
import BottomTabs from './src/components/Navigation/BottomTabs';
import {GameProvider} from './src/components/contexts/GameContext';

//Custom theme
const theme = extendTheme({
  colors: {
    ...palette,
  },
  components: {
    Button: {
      baseStyle: {},
      defaultProps: {
        colorScheme: 'primary',
        variant: 'solid',
        fontSize: '2xl',
      },
    },
    Divider: {
      baseStyle: {
        backgroundColor: 'dark.200',
      },
      defaultProps: {},
      variants: {},
      sizes: {},
    },
    Text: {
      baseStyle: props => {
        return {
          color: themeTools.mode('lightText', 'darkText')(props),
        };
      },
    },
    Heading: {
      baseStyle: props => {
        return {
          color: themeTools.mode('white', 'darkText')(props),
        };
      },
    },
  },

  fontConfig: {
    digital7: {
      100: {
        normal: 'digital-7 (mono)',
        italic: 'digital-7 (mono italic)',
      },
      200: {
        normal: 'digital-7-(mono)',
        italic: 'digital-7-(mono italic)',
      },
      300: {
        normal: 'digital-7 (mono)',
        italic: 'digital-7 (mono italic)',
      },
      400: {
        normal: 'digital-7',
        italic: 'digital-7 (italic)',
      },
      500: {
        normal: 'digital-7',
      },
      600: {
        normal: 'digital-7',
        italic: 'digital-7 (italic)',
      },
      // Add more variants
      //   700: {
      //     normal: 'Roboto-Bold',
      //   },
      //   800: {
      //     normal: 'Roboto-Bold',
      //     italic: 'Roboto-BoldItalic',
      //   },
      //   900: {
      //     normal: 'Roboto-Bold',
      //     italic: 'Roboto-BoldItalic',
      //   },
    },
  },

  fonts: {
    heading: 'Roboto',
    body: 'Roboto',
    mono: 'Roboto',
  },
  config: {
    useSystemColorMode: false,
    initialColorMode: 'light',
  },
});

function App() {
  const scheme = useColorScheme();
  return (
    <GameProvider>
      <NativeBaseProvider theme={theme}>
        <NavigationContainer
          theme={scheme !== 'dark' ? navigation.dark : navigation.light}>
          <BottomTabs />
        </NavigationContainer>
      </NativeBaseProvider>
    </GameProvider>
  );
}

export default App;
