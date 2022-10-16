import * as React from 'react';
import {Text, Flex, Button} from 'native-base';

import {Linking} from 'react-native';

function FinishGameScreen({route}) {
  const {timePlayed, penalties, hintsUsed} = route.params;
  console.log(penalties);
  return (
    <Flex
      w="100%"
      h="100%"
      bg="gray.500"
      fontFamily="digital-7"
      direction="column"
      mb="10">
      <Flex w="100%" h="100%" align="center" mt="10%">
        <Button
          w="80%"
          h="20%"
          bg="black"
          p="1%"
          justify="center"
          onPress={() => {
            Linking.openURL(
              'https://project-escape.co.uk/app/mission-unpausable/completed',
            );
          }}>
          <Text
            textAlign="center"
            fontSize="4xl"
            color="green.500"
            textTransform="capitalize"
            fontFamily="digital-7">
            Click here to see your secret reward
          </Text>
        </Button>

        {/* h="16.5%" */}
        <Flex w="80%" h="20%" bg="black" mt="1%" p="2%" justify="center">
          <Text
            textAlign="center"
            fontSize="4xl"
            color="green.500"
            textTransform="capitalize"
            fontFamily="digital-7">
            Time: {timePlayed}
          </Text>
        </Flex>
        <Flex w="80%" h="20%" bg="black" mt="1%" p="2%" justify="center">
          <Text
            textAlign="center"
            fontSize="4xl"
            color="green.500"
            textTransform="capitalize"
            fontFamily="digital-7">
            Penalties: {penalties}
          </Text>
        </Flex>
        <Flex w="80%" h="20%" bg="black" mt="1%" p="2%" justify="center">
          <Text
            textAlign="center"
            fontSize="4xl"
            color="green.500"
            textTransform="capitalize"
            fontFamily="digital-7">
            Hints Used: {hintsUsed}
          </Text>
        </Flex>
        {/* <Flex w="80%" h="20%" bg="black" mt="1%" p="2%" justify="center">
          <Text
            textAlign="center"
            fontSize="4xl"
            color="green.500"
            textTransform="capitalize"
            fontFamily="digital-7">
            Score: 55/100
          </Text>
        </Flex> */}
      </Flex>
    </Flex>
  );
}

export default FinishGameScreen;
