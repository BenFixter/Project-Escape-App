import * as React from 'react';
import {
  ScrollView,
  Flex,
  Image,
  Heading,
  Text,
  Divider,
  Button,
} from 'native-base';
import {Linking} from 'react-native';

//Icons
import IonIcons from 'react-native-vector-icons/Ionicons';
import FeatherIcons from 'react-native-vector-icons/Feather';

//Components
import RoomsConfig from '../configs/RoomsConfig';
import RoomDifficulty from '../components/Rooms/RoomDifficulty';

function RoomDetailsScreen(props) {
  const id = props.route.params.id;
  const room = RoomsConfig.filter(room => room.id === id)[0];

  return (
    <ScrollView>
      <Flex>
        <Image
          h="150"
          w="100%"
          source={{
            uri: room.imageURL,
          }}
          alt="image"
        />
      </Flex>
      {/* Content */}
      <Flex mx="7.5%">
        <Heading mt="5%" textAlign="center" w="100%">
          {room.name}
        </Heading>
        {/* Header */}
        <Flex mt="5%">
          <Flex direction="row" justify="space-between">
            <Flex direction="row" justify="space-evenly">
              <RoomDifficulty key={id} difficulty={room.difficulty} />
            </Flex>
            <Text color="dark.500">
              <IonIcons name="person-outline" size={15} />
              <Text fontWeight="bold"> {room.players}</Text>
              <Text color="white"> Players</Text>
            </Text>
            <Text color="dark.500">
              <FeatherIcons name="clock" size={15} />
              <Text fontWeight="bold"> {room.time}</Text>
              <Text color="white"> Minutes</Text>
            </Text>
          </Flex>
        </Flex>
        <Divider mt="5%" mb="5%" bgColor="dark.100" thickness={2} />

        {/* Body */}
        <Flex align="center">
          <Text fontSize="xs" color="dark.500" fontWeight="bold">
            {room.addressLine1}
          </Text>
          <Text fontSize="xs" color="dark.500" fontWeight="bold">
            {room.addressLine2}
          </Text>
          <Text fontSize="xs" color="dark.500" fontWeight="bold">
            {room.addressLine3}
          </Text>
          <Text mt="5%" fontSize="xs" color="primary.500" fontWeight="bold">
            {room.phone}
          </Text>

          <Button
            mt="5%"
            variant="outline"
            colorScheme="light"
            onPress={() => {
              Linking.openURL(
                `https://www.google.com/maps/search/?api=1&query=${room.lat},${room.lng}`,
              );
            }}>
            View in Google maps
          </Button>

          <Divider mt="5%" mb="5%" bgColor="dark.100" thickness={2} />
          <Text color="dark.500">{room.description}</Text>
          <Divider mt="5%" mb="5%" bgColor="dark.100" thickness={2} />

          <Button
            w="35%"
            mb="5%"
            onPress={() =>
              Linking.openURL(
                `https://project-escape.co.uk/middlesbrough/booking`,
              )
            }>
            Book Now
          </Button>
          {/* <Button variant="solid" colorScheme="primary" fontSize="2xs" w="35%" mb="5%" onPress={() => navigation.push("RoomDetailsScreen", { id: 10 })}> Read More</Button> */}
        </Flex>
      </Flex>
    </ScrollView>
  );
}

export default RoomDetailsScreen;
