import * as React from 'react';
import {
  Heading,
  Flex,
  Input,
  Text,
  Divider,
  Button,
  ScrollView,
  FlatList,
  Box,
  Pressable,
} from 'native-base';

import uuid from 'react-native-uuid';

//Components
import RoomCard from '../components/Rooms/RoomCard';
import RoomsConfig from '../configs/RoomsConfig';

import SplashScreen from 'react-native-splash-screen';
import GetLocation from 'react-native-get-location';

function HomeScreen() {
  React.useEffect(() => {
    SplashScreen.hide();
  });

  const [locationInput, setLocationInput] = React.useState('');
  const [locations, setLocations] = React.useState([]);
  const [nearestRooms, setNearestRooms] = React.useState([]);
  const [session, setSession] = React.useState(0);
  const sessionToken = uuid.v4();

  const autocompletePlaceUrl = `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${locationInput}&components=country:GB&types=(regions)&sessiontoken=${session}&fields=predictions&key=12345`;
  const autocompletePlaceDetailUrl = placeID =>
    `https://maps.googleapis.com/maps/api/place/details/json?placeid=${placeID}&fields=geometry&sessiontoken=${session}&fields=name,geometry&key=12345`;
  //destinations: 40.659569%2C-73.933783%7C40.729029%2C-73.851524%7C40.6860072%2C-73.6334271%7C40.598566%2C-73.7527626
  //origin: 40.6655101%2C-73.89188969999998
  const distanceMatrixUrl = (origin, destinations) =>
    `https://maps.googleapis.com/maps/api/distancematrix/json?destinations=${destinations}&origins=${origin}&units=imperial&sessiontoken=${session}&key=12345`;

  const onLocationTextChange = text => {
    setLocationInput(text);

    setNearestRooms([]);
    if (text.length > locationInput.length & text.length >= 3 ) {
      getLocation();
    }
  };
  //return name with location(lat, long)
  const getLocation = async () => {
    setSession(sessionToken);
    let predictedLocations = await getPredictedLocations();

    //return nothing if there is no locations found
    if (!predictedLocations || predictedLocations.length === 0) {
      setNearestRooms([]);
      setLocations([]);
      return;
    }

    //Get lat/long for every location
    let detailsPromises = predictedLocations.map(loc =>
      getLocationDetails(loc),
    );

    Promise.all(detailsPromises).then(details => {
      details = details.map((detail, i) => {
        return {
          id: i,
          ...detail,
        };
      });

      setLocations(details);
    });
    //predicted locations r
    // await Promise.all(
    //go through each location and get the details for each one. (returns a promise) Array of promised resolved through promise.all
    //   predictedLocations.map(async (loc, i) => {
    //     return getLocationDetails(loc).then(locDetails =>
    //       formattedLocations.push({
    //         id: i,
    //         ...locDetails,
    //       }),
    //     );
    //   }),
    // );

    // setLocations(formattedLocations);
  };

  // Get location data from the locationInput
  const getPredictedLocations = () => {
    return fetch(autocompletePlaceUrl)
      .then(response => response.json())
      .then(responseJson => {
        //Get the place id and name of each predicted location. for each location. returns {name: '', placeID: ''}
        let locationData = responseJson.predictions.map(prediction => {
          let name = prediction.description; //prediction.structured_formatting.main_text;
          let placeID = prediction.place_id;
          return {
            name: name,
            placeID: placeID,
          };
        });
        //returns all the locations [{name, placeID}, {name, placeID}]
        return locationData;
      });
  };

  //When a user selects a predicted location
  const onLocationSearchItem = item => {
    setLocationInput(item.name);
    setLocations([]);
    setNearestRooms([]);

    let origin = [item.lat, item.lng].join('%2C');
    let destinations = RoomsConfig.map(room => {
      return [room.lat, room.lng].join('%2C');
    }).join('%7C');

    //Get distance
    fetch(distanceMatrixUrl(origin, destinations))
      .then(response => response.json())
      .then(responseJson => {
        //Get distance for each room [0] = 1 origin
        let rooms = responseJson.rows[0].elements
          .map((element, i) => {
            let distance = element.distance.text.slice(0, -3);

            return {
              ...RoomsConfig[i],
              distance: distance,
            };
          })
          .filter(room => room.distance < 100);

        setNearestRooms(rooms);
      })
      .catch(e => console.error(e));
  };

  //Get the details of a location (lng, lat)
  const getLocationDetails = location => {
    //uses the placeID of the location to get the long/lat
    return fetch(autocompletePlaceDetailUrl(location.placeID))
      .then(response => response.json())
      .then(locationDetail => {
        let detailLoc = locationDetail.result.geometry.location;
        return {
          name: location.name,
          lng: detailLoc.lng,
          lat: detailLoc.lat,
        };
      })
      .catch(error => console.error(error));
  };

  return (
    <ScrollView mt="10%">
      <Flex direction="column" align="center" h="100%">
        {/* Heading */}
        <Heading fontSize="xl">
          Find Your Escape
          <Heading fontSize="2xl" color="primary.500">
            .
          </Heading>
        </Heading>

        {/* Location Search */}
        <Flex w="80%">
          <Input
            mt="5%"
            fontSize="lg"
            borderColor="dark.200"
            color="muted.400"
            variant="outline"
            onChangeText={onLocationTextChange}
            value={locationInput}
            placeholder="Enter Location"
          />

          {/* Dropdown */}

          {locationInput.length >= 3 ? (
            <FlatList
              data={locations}
              renderItem={({item}) => (
                <Pressable
                  key={item.id}
                  onPress={() => onLocationSearchItem(item)}>
                  <Box background="dark.50" p="3">
                    <Text>{item.name}</Text>
                  </Box>
                </Pressable>
              )}
            />
          ) : null}
        </Flex>

        {/* Search Results */}
        <Text m="5%" fontSize="xs">
          Or
        </Text>
        <Button
          variant="outline"
          fontSize="xs"
          onPress={() => {
            GetLocation.getCurrentPosition({
              enableHighAccuracy: true,
              timeout: 15000,
            })
              .then(location => {
                onLocationSearchItem({
                  name: `${location.latitude} ${location.longitude}`,
                  lat: location.latitude,
                  lng: location.longitude,
                }); //.then(
                //   fetch(
                //     `https://maps.googleapis.com/maps/api/geocode/json?latlng=${location.latitude},${location.longitude}&sessiontoken=${sessionToken}&key=12345`,
                //   )
                //     .then(response => response.json())
                //     .then(response => console.log(response)),
                // );
              })
              .catch(error => console.log(error));
          }}>
          Use Current Location
        </Button>

        {nearestRooms.length > 0 ? (
          <>
            <Text fontSize="xs" fontWeight="bold" mt="10%">
              {nearestRooms.length}{' '}
              <Text fontSize="xs" fontWeight="normal" color="dark.400">
                results for{' '}
              </Text>
              <Text fontSize="xs">{locationInput}</Text>
            </Text>
            <Divider mt="5%" bgColor="dark.100" thickness={2} />
            <RoomCard nearestRooms={nearestRooms} />
          </>
        ) : null}
      </Flex>
    </ScrollView>
  );
}

export default HomeScreen;
