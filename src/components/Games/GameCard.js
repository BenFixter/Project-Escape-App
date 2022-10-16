import * as React from 'react';
import {RefreshControl} from 'react-native';
import uuid from 'react-native-uuid';
import {
  FlatList,
  Image,
  Heading,
  Flex,
  Text,
  Button,
  ScrollView,
} from 'native-base';
import IAP from 'react-native-iap';
import RoomDifficulty from '../Rooms/RoomDifficulty';
import GameManager from './GameManager';

function GameCard(props) {
  const Products = props.products;
  const navigation = props.navigation;

  const [refreshing, setRefreshing] = React.useState(false);

  const wait = timeout => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  };

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

  console.log('==========Products==========');
  console.log(Products);
  console.log('==========Products==========');
  return (
    <ScrollView
      mt="10%"
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }>
      <Flex direction="column" align="center" h="100%">
        <FlatList
          w="85%"
          data={Products.filter(p => p !== undefined)}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <Flex bg="dark.50" mt="10%">
              <Image
                h="150"
                w="100%"
                source={{
                  uri: item.imageURL,
                }}
                alt="image"
              />
              {/* <Heading h="150" position="absolute" top="15.5%" fontSize="md" fontWeight="bold"> {item.name}</Heading> */}
              <Flex mx="5%" textAlign="center" align="center" justify="center">
                <Flex direction="row" justify="space-between" mt="5%" w="100%">
                  <Heading fontSize="md" fontWeight="bold">
                    {item.title}
                  </Heading>
                  <Flex direction="row" justify="space-evenly">
                    <RoomDifficulty
                      key={uuid.v4()}
                      difficulty={item.difficulty}
                    />
                  </Flex>
                </Flex>
                <Text mt="5%" fontSize="xs" color="dark.500" align="center">
                  {item.description} {'\n'}
                </Text>

                {/* <Button variant="outline" fontSize="2xs" w="35%" mb="5%" onPress={() => console.log("Read More")} >Book Now</Button> */}
                <Button
                  variant={item.purchased ? 'outline' : 'solid'}
                  colorScheme={item.purchased ? 'light' : 'primary'}
                  w="35%"
                  mb="5%"
                  onPress={() =>
                    item.purchased
                      ? GameManager({
                          productId: item.productId,
                          navigation: navigation,
                        })
                      : IAP.requestPurchase(item.productId)
                  }>
                  {item.purchased ? 'Play Now' : item.localizedPrice}
                </Button>
              </Flex>
            </Flex>
          )}
        />
      </Flex>
    </ScrollView>
  );
}

export default GameCard;
