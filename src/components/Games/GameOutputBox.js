import * as React from 'react';
import {Flex, Text, Input} from 'native-base';
import {GameContext} from '../contexts/GameContext';

function GameOutputBox() {
  const {
    config,
    penalties,
    timePlayed,
    hintsUsed,
    infoText,
    readableTime,
    keypadText,
  } = React.useContext(GameContext);

  return (
    <Flex bg="dark.50" w="100%" align="center" justify="center" px="2%">
      <Flex direction="row" w="100%" justify="space-between">
        <Text fontSize="md" color="green.500" fontFamily="digital-7">
          Penalties: {penalties}
        </Text>
        <Text fontSize="md" color="green.500" fontFamily="digital-7">
          {readableTime(timePlayed)}
        </Text>
        <Text fontSize="md" color="green.500" fontFamily="digital-7">
          Hints Used: {hintsUsed}
        </Text>
      </Flex>

      <Flex justify="center" align="center" textAlign="center" flexGrow="1">
        <Input
          m="0"
          p="0"
          h="65"
          variant="unstyled"
          isReadOnly={true}
          type={config.type || 'text'}
          value={keypadText}
          textAlign="center"
          fontSize="6xl"
          color="green.500"
          fontFamily="digital-7"
          maxLength={12}
        />
      </Flex>

      <Flex w="100%" direction="row" justify="center" alignItems="center">
        <Text
          fontSize="md"
          color="green.500"
          textTransform="capitalize"
          fontFamily="digital-7">
          {infoText}
        </Text>
      </Flex>
    </Flex>
  );
}

export default GameOutputBox;
