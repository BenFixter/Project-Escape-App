import * as React from 'react';
import {Button, Flex, Text, Image, ScrollView} from 'native-base';
import {Dimensions, StatusBar} from 'react-native';
import {BottomTabBarHeightContext} from '@react-navigation/bottom-tabs';
import uuid from 'react-native-uuid';

//Components
import GameInfoButton from '../components/Games/GameInfoButton';
import GameOutputBox from '../components/Games/GameOutputBox';
import GameKeypad from '../components/Games/GameKeypad';

import {GameContext} from '../components/contexts/GameContext';

function Game(props) {
  const navigation = props.navigation;
  const levelsConfig = props.route.params.levels;
  const layoutConfig = props.route.params.layout;
  const window = Dimensions.get('window');
  const windowHeight = Dimensions.get('window').height;
  const screenHeight = Dimensions.get('screen').height; // device height
  const statusBarHeight = StatusBar.currentHeight || 24;

  const {
    configLoading,
    setConfigLoading,
    isStarted,
    setStarted,
    level,
    setLevel,
    config,
    setConfig,
    setLayout,
    layout,
    setHintsPressed,
    setInfoText,
    setDisabledButtons,
    keypadText,
    setKeypadText,
    timePlayed,
    setTimePlayed,
    penalties,
    hintsUsed,
    setHintsUsed,
    setPenalties,
    readableTime,
    resetKeys,
    startScene,
    setStartScene,
    levelScene,
    setLevelScene,
    toggleKeypad,
    setToggleKeypad,
    vent,
    setVent,
    resetHints,
  } = React.useContext(GameContext);

  React.useEffect(() => {
    console.log('Rendering new game ' + level);
    setLayout(layoutConfig);
    setConfig(levelsConfig[level]);

    if (!layoutConfig.scenes) {
      console.log('NO SCENES!!!!');
      setStarted(true);
    }

    clearInterval(timer);
    const timer = setInterval(() => {
      setTimePlayed(prevTime => prevTime + 1);
    }, 1000);
    return () => {
      setStarted(false);
      setConfigLoading(true);
      setTimePlayed(0);
      setLevel(0);
      clearInterval(timer);
      setStartScene(0);
      setToggleKeypad(false);
      setHintsUsed(0);
      setPenalties(0);
    };
  }, []);

  React.useEffect(() => {
    console.log('Config...');
    console.log(isStarted);
    console.log(`togglekeyboard: ${toggleKeypad}`);

    if (isStarted) {
      console.log('Updating config stuff');

      resetHints();
      setVent(layout.vent);
      resetKeys();
      setConfigLoading(false);
    }
  }, [config, isStarted]);

  React.useEffect(() => {
    console.log('New level ting');
    console.log(`isStarted: ${isStarted}`);
    console.log(`toggledKeyboard: ${toggleKeypad}`);
    if (isStarted || toggleKeypad) {
      console.log('2. isStarted: true');

      if (level >= levelsConfig.length) {
        console.log('3. Final level');

        navigation.navigate('FinishGameScreen', {
          timePlayed: readableTime(timePlayed),
          penalties: penalties,
          hintsUsed: hintsUsed,
        });
      } else {
        //New level
        console.log('Rendering new level ' + level);
        if (!toggleKeypad || config.answer == keypadText) {
          setConfig(levelsConfig[level]);
        }
        setKeypadText('');
      }
    }
  }, [level, isStarted, toggleKeypad]);

  //Keypad
  if ((!configLoading && isStarted && !layoutConfig.scenes) || toggleKeypad) {
    return (
      <Flex h="100%" bg={layout.backgroundColor}>
        <ScrollView>
          <BottomTabBarHeightContext.Consumer>
            {tabBarHeight => (
              <Flex 
                borderColor="green.500" 
                h="100%" 
                bg={layout.backgroundColor}>
                <GameInfoButton />
                <Flex
                  fontFamily="digital-7"
                  direction="column"
                  flexGrow={1}
                  py={2}
                  pb={12}
                  px={8}>
                  <GameOutputBox />
                  <GameKeypad navigation={navigation} />
                </Flex>
              </Flex>
        )}
          </BottomTabBarHeightContext.Consumer>
        </ScrollView>
      </Flex>
    );
  }

  if (layout.scenes) {
    //Show layout
    return (
      <Flex h="100%" position="relative">
        {/* Doors */}
        <Image
          resizeMode="stretch"
          position="absolute"
          source={layout.scenes[startScene].doorLeft}
          key={layout.scenes[startScene].doorLeft}
          h={window.height / 2.58} //3.1
          w={window.width / 2.85}
          top={window.height / 4.1} //3.3
          left={window.width / 6.7}
          alt="Image"
          zIndex={-1}></Image>
        <Image
          resizeMode="stretch"
          position="absolute"
          source={layout.scenes[startScene].doorRight}
          key={layout.scenes[startScene].doorRight}
          h={window.height / 2.58} //3.1
          w={window.width / 2.85}
          top={window.height / 4.1} //3.3
          right={window.width / 6.7}
          alt="Image"
          zIndex={-1}></Image>

        {/* Background  */}
        <Image
          resizeMode="cover"
          source={layout.scenes[startScene].backgroundImage}
          key={layout.scenes[startScene].backgroundImage}
          alt="Image"
          h="100%"
          zIndex={1}></Image>

        {/* Buttons */}
        <Flex
          justify="center"
          align="center"
          position="absolute"
          bottom="5%"
          zIndex={2}
          //Button positioning
          left={
            layout.scenes[startScene].button.startGame
              ? '70%'
              : layout.scenes[startScene].button.navigateTo == 2
              ? '85%'
              : '0'
          }
          top={
            isStarted && layout.scenes[startScene].button.navigateTo
              ? '50%'
              : '75%'
          }
          //Size
          h={
            isStarted && layout.scenes[startScene].button.navigateTo
              ? '15%'
              : 'auto'
          }
          w={
            isStarted && layout.scenes[startScene].button.navigateTo
              ? '15%'
              : 'auto'
          }>
          <Button
            h="60"
            colorScheme="transparent"
            // h={window.height / 10}
            onPress={() => {
              if (layout.scenes[startScene].button.startGame) {
                console.log(`Starting game`);
                setStarted(true);
                setStartScene(layout.scenes[startScene].button.navigateTo);
              } else {
                console.log(
                  `Setting the scene to ${layout.scenes[startScene].button.navigateTo}`,
                );
                setStartScene(layout.scenes[startScene].button.navigateTo);
              }
            }}>
            <Image
              resizeMode="contain"
              source={layout.scenes[startScene].button.backgroundImage}
              key={layout.scenes[startScene].button.backgroundImage}
              alt="Image"
              h="60"></Image>
          </Button>
        </Flex>

        {/* Keypad */}
        {layout.scenes[startScene].keypad ? (
          <Flex h="100%" position="absolute" top="50%" right="1" bg="amber.500">
            <Button
              colorScheme="transparent"
              w={window.width / 8}
              h="10%"
              zIndex={2}
              onPress={() => setToggleKeypad(true)}></Button>
          </Flex>
        ) : null}

        {/* Level Text */}
        {layout.scenes[startScene].button.navigateTo == 3 ? (
          <Flex position="absolute" h="100%" top="34%" right="3%">
            <Text
              bg="black"
              color="green.500"
              fontSize="xl"
              fontFamily="digital-7"
              zIndex={2}>
              Level: {level + 1}
              {/* //right="3%"> */}
            </Text>
          </Flex>
        ) : null}

        {/* Vent  */}
        {layout.vent &&
        config.ventUncovered &&
        layout.scenes[startScene].vent ? (
          <Flex h="100%" position="absolute" top="36%" left="5%" zIndex={2}>
            <Button
              // bg="orange.500"
              h={window.height / 4.4}
              w={window.width / 2}
              colorScheme="transparent"
              onPress={() => {
                setVent(config.ventUncovered || vent);
              }}>
              <Image
                resizeMode="contain"
                source={vent}
                key={vent}
                alt="Image"
                // h={window.height / 4.4}
                // w={window.width / 2}
                //top={window.height / 2.7}
                //left={window.width / 25}
                //right={window.width / 75}
                //left="9%"
                //w="195"
                //h="400"
              ></Image>
            </Button>
          </Flex>
        ) : null}
      </Flex>
    );
  }
  if (configLoading) {
    return null; //loading
  }

  return <Text>ERROR 404</Text>;
}
export default Game;
