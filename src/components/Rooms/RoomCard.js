import * as React from 'react';
import {FlatList, Image, Heading, Flex, Text, Button} from 'native-base';
import {useNavigation} from '@react-navigation/native';

function RoomCard(props) {
  const navigation = useNavigation();
  const rooms = props.nearestRooms;

  return (
    <FlatList
      w="85%"
      data={rooms}
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
            <Heading fontSize="md" fontWeight="bold" mt="5%">
              {item.name}
            </Heading>
            <Text mt="5%">
              <Text fontSize="sm" color="dark.900" fontWeight="bold">
                {item.distance}{' '}
              </Text>
              <Text fontSize="xs" color="dark.500" fontWeight="bold">
                Miles
              </Text>
            </Text>
            <Text
              mt="5%"
              fontSize="xs"
              color="dark.500"
              // fontWeight="bold"
              textAlign="center">
              {item.addressLine1}, {item.addressLine2}, {item.addressLine3},{' '}
              {item.postCode}
            </Text>
            <Text mt="5%" fontSize="xs" color="primary.500" fontWeight="bold">
              {item.phone}
            </Text>
            <Text mt="5%">
              <Text fontSize="xs" color="primary.500" fontWeight="bold">
                Open{' '}
              </Text>
              <Text fontSize="xs" color="dark.500" fontWeight="bold">
                Today Till 18:00{'\n'}
              </Text>
            </Text>
            {/* <Button variant="outline" fontSize="2xs" w="35%" mb="5%" onPress={() => console.log("Read More")} >Book Now</Button> */}
            <Button
              w="35%"
              mb="5%"
              onPress={() =>
                navigation.push('RoomDetailsScreen', {id: item.id})
              }>
              Read More
            </Button>
          </Flex>
        </Flex>
      )}
    />
  );
}
export default RoomCard;
