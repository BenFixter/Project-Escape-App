import * as React from 'react';
import {Flex, Text, Button} from 'native-base';
import {useContext, useEffect} from 'react/cjs/react.production.min';
import {GameContext} from '../contexts/GameContext';

function GameInfoButton() {
  const {
    layout,
    config,
    setInfoText,
    disabledButtons,
    setDisabledButtons,
    hintsPressed,
    setHintsPressed,
    hintsUsed,
    setHintsUsed,
    toggleKeypad,
    setToggleKeypad,
  } = React.useContext(GameContext);

  return (
    <Flex direction="row" justifyContent="space-between">
      <Flex direction="row">
        {Object.keys(config.info).map(index => {
          return config.info[index].hideButton ? null : (
            <Button
              p="3"
              m="1"
              mx="2"
              w="16"
              colorScheme={config.info[index].backgroundColor.slice(0, -4)}
              isDisabled={disabledButtons[index]}
              bg={config.info[index].backgroundColor}
              onPress={() => {
                setInfoText(config.info[index].title);

                if (index == 0) {
                  console.log('question');
                } else {
                  console.log('Hint pressed: ' + hintsPressed);
                  console.log('pressed: ' + hintsPressed[index]);

                  if (!hintsPressed[index]) {
                    let updatedDisableButton = [...disabledButtons];

                    console.log('Updated: ' + updatedDisableButton);
                    console.log(index);
                    let updatedHintPressed = [...hintsPressed];

                    updatedHintPressed[index] = true;
                    updatedDisableButton[++index] = false;

                    setDisabledButtons(updatedDisableButton);
                    setHintsPressed(updatedHintPressed);
                    setHintsUsed(hintsUsed + 1);
                  }
                }
              }}>
              <Text fontSize="2xl" fontFamily="digital-7">
                {config.info[index].label}
              </Text>
            </Button>
          );
        })}
      </Flex>
      {layout.scenes ? (
        <Flex direction="row">
          <Button
            p="3"
            m="1"
            mx="2"
            w="16"
            colorScheme="yellow"
            onPress={() => {
              setToggleKeypad(false);
            }}>
            <Text color="black" fontSize="2xl">
              X
            </Text>
          </Button>
        </Flex>
      ) : null}
    </Flex>
  );
}

export default GameInfoButton;
