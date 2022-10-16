import * as React from 'react';

import {Flex, Text, Button, Image} from 'native-base';
import {GameContext} from '../contexts/GameContext';
import uuid from 'react-native-uuid';

function GameKeypad(props) {
  const navigation = props.navigation;
  const {
    config,
    level,
    setLevel,
    setLoading,
    keypadText,
    setKeypadText,
    keys,
    setKeys,
    timePlayed,
    hintsUsed,
    penalties,
    setPenalties,
    resetKeys,
    resetHints,
  } = React.useContext(GameContext);

  function updateText(text) {
    if (text.length <= 12) {
      setKeypadText(text);
    }
  }

  function chunkArrayIntoGroups(arr, size) {
    var myArray = [];
    for (var i = 0; i < arr.length; i += size) {
      myArray.push(arr.slice(i, i + size));
    }
    return myArray;
  }

  const formattedKeys = chunkArrayIntoGroups(config.keypad.keys, 3);
  return (
    <Flex flexGrow={1} mt="5%">
      {formattedKeys.map((chunk, i) => {
        return (
          <Flex direction="row" flexGrow={1} justify="center">
            {chunk.map((key, j) => {
              //Get index of array to update the state to change the image
              let updatedKeys = [...keys];
              let index = updatedKeys.findIndex(k => k.title == key.title);
              return (
                <Button
                  bg={key.backgroundImage || key.backgroundColor}
                  colorScheme={key.backgroundColor.slice(0, -4)}
                  variant={key.backgroundImage ? 'unstyled' : 'solid'}
                  borderWidth={key.borderColor ? '2' : '0'}
                  borderColor={
                    !key.backgroundImage && key.borderColor
                      ? key.borderColor
                      : 'none'
                  }
                  w="25%"
                  p="0"
                  mb={i < 3 ? '8' : '0'}
                  mr={j < chunk.length - 1 ? '8' : '0'}
                  onPress={() => {
                    switch (true) {
                      case key.update: {
                        if (key.onPress) {
                          if (
                            config.answer.charAt(keypadText.length) == key.title
                          ) {
                            updatedKeys[index] = Object.assign(
                              updatedKeys[index],
                              {
                                backgroundImage: key.onPress.backgroundImage,
                              },
                            );
                            setKeys(updatedKeys);
                            updateText(keypadText + key.title);
                          } else {
                            console.log('here');
                            resetKeys();
                            setKeypadText('');
                            break;
                          }
                        }
                        updateText(keypadText + key.title);
                        break;
                      }
                      case key.submit: {
                        if (config.answer == keypadText) {
                          console.log('Right answer');
                          resetHints();
                          setLevel(level + 1);
                        } else {
                          console.log('Wrong Answer');
                          setKeypadText('');
                          setPenalties(penalties + 1);
                        }
                        break;
                      }
                      case key.delete: {
                        if (key.clearAll) {
                          resetKeys();
                          setKeypadText('');
                          break;
                        }
                        updateText(keypadText.slice(0, -1));
                        break;
                      }
                      default:
                        updateText(keypadText + key.title);
                    }
                  }}>
                  {keys[index]?.backgroundImage ? (
                    <Flex height="100">
                      <Image
                        resizeMode="contain"
                        source={keys[index].backgroundImage}
                        key={keys[index].backgroundImage}
                        alt="Image"
                        height="100%"
                      />
                    </Flex>
                  ) : key.title ? (
                    <>
                      <Text
                        fontSize={key.fontSize}
                        color={key.color}
                        fontFamily="digital-7">
                        {key.title}
                      </Text>
                      <Text color="black" fontFamily="digital-7">
                        {key.description}
                      </Text>
                    </>
                  ) : null}
                </Button>
              );
            })}
          </Flex>
        );
        {
          /* {chunk.map((key, i) => {
              <Button w="10%" h="10%">
                hey
              </Button>;
            })} */
        }
      })}
    </Flex>

    // {key.description ? (
    //   <Text color="black" fontFamily="digital-7">
    //     {key.description}
    //   </Text>
    // ) : null}
  );
}

export default GameKeypad;
