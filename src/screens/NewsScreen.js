import * as React from 'react';
import {Text, Flex, Heading, ScrollView, FlatList, Image} from 'native-base';
import newsConfig from '../configs/NewsConfig';

function NewsScreen() {
  return (
    <ScrollView mt="10%">
      <Heading>Latest News</Heading>

      <Flex direction="column" align="center" h="100%">
        <FlatList
          w="80%"
          data={newsConfig}
          renderItem={({item}) => (
            <Flex bg="dark.100" mt="10%">
              <Flex mx="5%" textAlign="center">
                <Heading fontSize="md" fontWeight="bold">
                  {item.title}
                </Heading>
                <Image
                  h="100"
                  w="50%"
                  source={{
                    uri: item.imageURL,
                  }}
                  alt="image"
                />
              </Flex>
              <Flex>
                <Text>{item.date}</Text>
                <Text>{item.author}</Text>
              </Flex>
            </Flex>
          )}
        />
      </Flex>
    </ScrollView>
  );
}

export default NewsScreen;
