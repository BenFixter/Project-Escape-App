const cols = (col, margin) => 100 / col - margin;
const getSize = width => {
  let margin = 7;

  if (width) {
    return `${Math.floor(cols(3, margin))}%`;
  }

  return `${margin}%`;
};

const createDefaultKey = (title, description, options) => {
  return Object.assign(
    {
      title: title,
      description: description,
      backgroundColor: 'transparent',
      color: 'black',
      fontSize: '4xl',
      update: true,
    },
    options,
  );
};

const createSubmitKey = (title, description, options) => {
  return Object.assign(
    {
      title: title,
      description: description,
      backgroundColor: 'green.500',
      color: 'black',
      fontSize: '4xl',
      submit: true,
    },
    options,
  );
};

const createDeleteKey = (title, description, options) => {
  return Object.assign(
    {
      title: title,
      description: description,
      backgroundColor: 'red.500',
      color: 'black',
      fontSize: '4xl',
      delete: true,
    },
    options,
  );
};

module.exports = [
  //Game 1
  {
    layout: {
      backgroundColor: 'gray.500',
      vent: require('../assets/images/games/SpaceshipRogue/layout/vent.png'),
    },
    levels: [
      {
        info: [
          {
            title: 'My agent number',
            disabled: false,
            backgroundColor: 'green.500',
            label: 'Q',
          },
          {
            title:
              'Look through the whole pack to find which agent we are trying to stop',
            disabled: false,
            backgroundColor: 'lightBlue.500',
            label: 'H1',
          },
          {
            title:
              'Using the known agents of the syndicate computer, find the agent number were trying to stop',
            disabled: true,
            backgroundColor: 'lightBlue.500',
            label: 'H2',
          },
          {
            title: 'Agent 247 = Code 247',
            disabled: true,
            backgroundColor: 'orange.500',
            label: 'A',
          },
        ],
        answer: '247',
        keypad: {
          size: width => getSize(width),
          keys: [
            createDefaultKey('1', '', {backgroundColor: 'gray.400'}),
            createDefaultKey('2', 'ABC', {backgroundColor: 'gray.400'}),
            createDefaultKey('3', 'DEF', {backgroundColor: 'gray.400'}),
            createDefaultKey('4', 'GHI', {backgroundColor: 'gray.400'}),
            createDefaultKey('5', 'JKL', {backgroundColor: 'gray.400'}),
            createDefaultKey('6', 'MNO', {backgroundColor: 'gray.400'}),
            createDefaultKey('7', 'PQRS', {backgroundColor: 'gray.400'}),
            createDefaultKey('8', 'TUV', {backgroundColor: 'gray.400'}),
            createDefaultKey('9', 'WXYZ', {backgroundColor: 'gray.400'}),
            createDeleteKey('C', ''),
            createDefaultKey('0', '', {backgroundColor: 'gray.400'}),
            createSubmitKey('OK', ''),
          ],
        },
      },
      {
        info: [
          {
            title: 'Reflect on why the mirrors are broken',
            disabled: false,
            backgroundColor: 'green.500',
            label: 'Q',
          },
          {
            title: 'Mirrors may be broken to stop you reflecting',
            disabled: false,
            backgroundColor: 'lightBlue.500',
            label: 'H1',
          },
          {
            title:
              'Use a mirror or forward facing phone camera on the message pose in the mirror',
            disabled: true,
            backgroundColor: 'lightBlue.500',
            label: 'H2',
          },
          {
            title: 'Code = 3209',
            disabled: true,
            backgroundColor: 'orange.500',
            label: 'A',
          },
        ],
        answer: '3209',
        keypad: {
          size: width => getSize(width),
          keys: [
            createDefaultKey('1', '', {backgroundColor: 'gray.400'}),
            createDefaultKey('2', 'ABC', {backgroundColor: 'gray.400'}),
            createDefaultKey('3', 'DEF', {backgroundColor: 'gray.400'}),
            createDefaultKey('4', 'GHI', {backgroundColor: 'gray.400'}),
            createDefaultKey('5', 'JKL', {backgroundColor: 'gray.400'}),
            createDefaultKey('6', 'MNO', {backgroundColor: 'gray.400'}),
            createDefaultKey('7', 'PQRS', {backgroundColor: 'gray.400'}),
            createDefaultKey('8', 'TUV', {backgroundColor: 'gray.400'}),
            createDefaultKey('9', 'WXYZ', {backgroundColor: 'gray.400'}),
            createDeleteKey('C', ''),
            createDefaultKey('0', '', {backgroundColor: 'gray.400'}),
            createSubmitKey('OK', ''),
          ],
        },
      },
      {
        info: [
          {
            title: 'Whats in the news?',
            disabled: false,
            backgroundColor: 'green.500',
            label: 'Q',
          },
          {
            title:
              'The newspaper holds some hidden clues, thats why its in pieces',
            disabled: false,
            backgroundColor: 'lightBlue.500',
            label: 'H1',
          },
          {
            title:
              'piece together newspaper and read bold and underlined letters across each line',
            disabled: true,
            backgroundColor: 'lightBlue.500',
            label: 'H2',
          },
          {
            title: 'Code = 42893',
            disabled: true,
            backgroundColor: 'orange.500',
            label: 'A',
          },
        ],
        answer: '42893',
        keypad: {
          size: width => getSize(width),
          keys: [
            createDefaultKey('1', '', {backgroundColor: 'gray.400'}),
            createDefaultKey('2', 'ABC', {backgroundColor: 'gray.400'}),
            createDefaultKey('3', 'DEF', {backgroundColor: 'gray.400'}),
            createDefaultKey('4', 'GHI', {backgroundColor: 'gray.400'}),
            createDefaultKey('5', 'JKL', {backgroundColor: 'gray.400'}),
            createDefaultKey('6', 'MNO', {backgroundColor: 'gray.400'}),
            createDefaultKey('7', 'PQRS', {backgroundColor: 'gray.400'}),
            createDefaultKey('8', 'TUV', {backgroundColor: 'gray.400'}),
            createDefaultKey('9', 'WXYZ', {backgroundColor: 'gray.400'}),
            createDeleteKey('C', ''),
            createDefaultKey('0', '', {backgroundColor: 'gray.400'}),
            createSubmitKey('OK', ''),
          ],
        },
      },
      {
        info: [
          {
            title:
              'CodeName =❄︎⍓︎◻︎♏︎ ⍓︎□︎◆︎❒︎ ⧫︎♏︎⌧︎⧫︎ ♒︎♏︎❒︎♏︎📬︎ 🕆︎⬧︎♏︎ ✌︎☹︎☹︎ 👍︎✌︎🏱︎💧︎ ♐︎□︎❒︎ 🕈︎',
            disabled: false,
            backgroundColor: 'green.500',
            label: 'Q',
          },
          {
            title: 'The code name of your agent is in the database',
            disabled: false,
            backgroundColor: 'lightBlue.500',
            label: 'H1',
          },
          {
            title:
              'Use agent von fitzcrushed as the key to convert symbols to letters',
            disabled: true,
            backgroundColor: 'lightBlue.500',
            label: 'H2',
          },
          {
            title: 'Code = 905401',
            disabled: true,
            backgroundColor: 'orange.500',
            label: 'A',
          },
        ],

        answer: '905401',
        keypad: {
          size: width => getSize(width),
          keys: [
            createDefaultKey('1', '', {backgroundColor: 'gray.400'}),
            createDefaultKey('2', 'ABC', {backgroundColor: 'gray.400'}),
            createDefaultKey('3', 'DEF', {backgroundColor: 'gray.400'}),
            createDefaultKey('4', 'GHI', {backgroundColor: 'gray.400'}),
            createDefaultKey('5', 'JKL', {backgroundColor: 'gray.400'}),
            createDefaultKey('6', 'MNO', {backgroundColor: 'gray.400'}),
            createDefaultKey('7', 'PQRS', {backgroundColor: 'gray.400'}),
            createDefaultKey('8', 'TUV', {backgroundColor: 'gray.400'}),
            createDefaultKey('9', 'WXYZ', {backgroundColor: 'gray.400'}),
            createDeleteKey('C', ''),
            createDefaultKey('0', '', {backgroundColor: 'gray.400'}),
            createSubmitKey('OK', ''),
          ],
        },
      },
      {
        info: [
          {
            title: 'Once read, now out of place',
            disabled: false,
            backgroundColor: 'green.500',
            label: 'Q',
          },
          {
            title: 'How are those books ordered? Easy as a,b,c',
            disabled: false,
            backgroundColor: 'lightBlue.500',
            label: 'H1',
          },
          {
            title: 'The book plan is out of order, convert that to a number',
            disabled: true,
            backgroundColor: 'lightBlue.500',
            label: 'H2',
          },
          {
            title: 'Code = 7555266',
            disabled: true,
            backgroundColor: 'orange.500',
            label: 'A',
          },
        ],

        answer: '7555266',
        keypad: {
          size: width => getSize(width),
          keys: [
            createDefaultKey('1', '', {backgroundColor: 'gray.400'}),
            createDefaultKey('2', 'ABC', {backgroundColor: 'gray.400'}),
            createDefaultKey('3', 'DEF', {backgroundColor: 'gray.400'}),
            createDefaultKey('4', 'GHI', {backgroundColor: 'gray.400'}),
            createDefaultKey('5', 'JKL', {backgroundColor: 'gray.400'}),
            createDefaultKey('6', 'MNO', {backgroundColor: 'gray.400'}),
            createDefaultKey('7', 'PQRS', {backgroundColor: 'gray.400'}),
            createDefaultKey('8', 'TUV', {backgroundColor: 'gray.400'}),
            createDefaultKey('9', 'WXYZ', {backgroundColor: 'gray.400'}),
            createDeleteKey('C', ''),
            createDefaultKey('0', '', {backgroundColor: 'gray.400'}),
            createSubmitKey('OK', ''),
          ],
        },
      },
      {
        info: [
          {
            title: `Get Dr Brown's birthdate for security questions`,
            disabled: false,
            backgroundColor: 'green.500',
            label: 'Q',
          },
          {
            title: 'There are photos of Dr Brown with certain notes on',
            disabled: false,
            backgroundColor: 'lightBlue.500',
            label: 'H1',
          },
          {
            title:
              'Using christmas for year, Halloween for month and cheers photo for day, find the date of birth',
            disabled: true,
            backgroundColor: 'lightBlue.500',
            label: 'H2',
          },
          {
            title: 'Code = 16101986',
            disabled: true,
            backgroundColor: 'orange.500',
            label: 'A',
          },
        ],

        answer: '16101986',
        keypad: {
          size: width => getSize(width),
          keys: [
            createDefaultKey('1', '', {backgroundColor: 'gray.400'}),
            createDefaultKey('2', 'ABC', {backgroundColor: 'gray.400'}),
            createDefaultKey('3', 'DEF', {backgroundColor: 'gray.400'}),
            createDefaultKey('4', 'GHI', {backgroundColor: 'gray.400'}),
            createDefaultKey('5', 'JKL', {backgroundColor: 'gray.400'}),
            createDefaultKey('6', 'MNO', {backgroundColor: 'gray.400'}),
            createDefaultKey('7', 'PQRS', {backgroundColor: 'gray.400'}),
            createDefaultKey('8', 'TUV', {backgroundColor: 'gray.400'}),
            createDefaultKey('9', 'WXYZ', {backgroundColor: 'gray.400'}),
            createDeleteKey('C', ''),
            createDefaultKey('0', '', {backgroundColor: 'gray.400'}),
            createSubmitKey('OK', ''),
          ],
        },
      },
      {
        info: [
          {
            title: `Track satan's spirit under dark weather terrain`,
            disabled: false,
            backgroundColor: 'green.500',
            label: 'Q',
          },
          {
            title:
              'Another word for satan and another word for spirit might help you with a tunnel name',
            disabled: false,
            backgroundColor: 'lightBlue.500',
            label: 'H1',
          },
          {
            title: `Devil's run tunnel and black rain mountain location, follow tunnel route and use the numbers on location`,
            disabled: true,
            backgroundColor: 'lightBlue.500',
            label: 'H2',
          },
          {
            title: 'Code = 823651049',
            disabled: true,
            backgroundColor: 'orange.500',
            label: 'A',
          },
        ],

        answer: '823651049',
        keypad: {
          size: width => getSize(width),
          keys: [
            createDefaultKey('1', '', {backgroundColor: 'gray.400'}),
            createDefaultKey('2', 'ABC', {backgroundColor: 'gray.400'}),
            createDefaultKey('3', 'DEF', {backgroundColor: 'gray.400'}),
            createDefaultKey('4', 'GHI', {backgroundColor: 'gray.400'}),
            createDefaultKey('5', 'JKL', {backgroundColor: 'gray.400'}),
            createDefaultKey('6', 'MNO', {backgroundColor: 'gray.400'}),
            createDefaultKey('7', 'PQRS', {backgroundColor: 'gray.400'}),
            createDefaultKey('8', 'TUV', {backgroundColor: 'gray.400'}),
            createDefaultKey('9', 'WXYZ', {backgroundColor: 'gray.400'}),
            createDeleteKey('C', ''),
            createDefaultKey('0', '', {backgroundColor: 'gray.400'}),
            createSubmitKey('OK', ''),
          ],
        },
      },
      {
        info: [
          {
            title: 'Fly into airports for power packs then computer chip',
            disabled: false,
            backgroundColor: 'green.500',
            label: 'Q',
          },
          {
            title: 'The right plane tickets spell trouble',
            disabled: false,
            backgroundColor: 'lightBlue.500',
            label: 'H1',
          },
          {
            title:
              'The locations you seek are bahamas and finland. Use airport codes on plane tickets to spell a word',
            disabled: true,
            backgroundColor: 'lightBlue.500',
            label: 'H2',
          },
          {
            title: 'Code = 6299944336',
            disabled: true,
            backgroundColor: 'orange.500',
            label: 'A',
          },
        ],

        answer: '6299944336',
        keypad: {
          size: width => getSize(width),
          keys: [
            createDefaultKey('1', '', {backgroundColor: 'gray.400'}),
            createDefaultKey('2', 'ABC', {backgroundColor: 'gray.400'}),
            createDefaultKey('3', 'DEF', {backgroundColor: 'gray.400'}),
            createDefaultKey('4', 'GHI', {backgroundColor: 'gray.400'}),
            createDefaultKey('5', 'JKL', {backgroundColor: 'gray.400'}),
            createDefaultKey('6', 'MNO', {backgroundColor: 'gray.400'}),
            createDefaultKey('7', 'PQRS', {backgroundColor: 'gray.400'}),
            createDefaultKey('8', 'TUV', {backgroundColor: 'gray.400'}),
            createDefaultKey('9', 'WXYZ', {backgroundColor: 'gray.400'}),
            createDeleteKey('C', ''),
            createDefaultKey('0', '', {backgroundColor: 'gray.400'}),
            createSubmitKey('OK', ''),
          ],
        },
      },
      {
        info: [
          {
            title: 'At the right time, make the call each day',
            disabled: false,
            backgroundColor: 'green.500',
            label: 'Q',
          },
          {
            title: `There's a phone log on the laptop that has time of call on`,
            disabled: false,
            backgroundColor: 'lightBlue.500',
            label: 'H1',
          },
          {
            title:
              'Use the phone log and find the phone number rang at the same time everyday',
            disabled: true,
            backgroundColor: 'lightBlue.500',
            label: 'H2',
          },
          {
            title: 'Code = 07305083834',
            disabled: true,
            backgroundColor: 'orange.500',
            label: 'A',
          },
        ],

        answer: '07305083834',
        keypad: {
          size: width => getSize(width),
          keys: [
            createDefaultKey('1', '', {backgroundColor: 'gray.400'}),
            createDefaultKey('2', 'ABC', {backgroundColor: 'gray.400'}),
            createDefaultKey('3', 'DEF', {backgroundColor: 'gray.400'}),
            createDefaultKey('4', 'GHI', {backgroundColor: 'gray.400'}),
            createDefaultKey('5', 'JKL', {backgroundColor: 'gray.400'}),
            createDefaultKey('6', 'MNO', {backgroundColor: 'gray.400'}),
            createDefaultKey('7', 'PQRS', {backgroundColor: 'gray.400'}),
            createDefaultKey('8', 'TUV', {backgroundColor: 'gray.400'}),
            createDefaultKey('9', 'WXYZ', {backgroundColor: 'gray.400'}),
            createDeleteKey('C', ''),
            createDefaultKey('0', '', {backgroundColor: 'gray.400'}),
            createSubmitKey('OK', ''),
          ],
        },
      },
      {
        info: [
          {
            title:
              'The mission needs a thief, a tracker, a sniper and me the programmer, agent 247',
            disabled: false,
            backgroundColor: 'green.500',
            label: 'Q',
          },
          {
            title: 'Where can you find the 4 agent numbers?',
            disabled: false,
            backgroundColor: 'lightBlue.500',
            label: 'H1',
          },
          {
            title:
              'Use the correct 4 agent numbers by looking at the computer info and scene images to find the final code',
            disabled: true,
            backgroundColor: 'lightBlue.500',
            label: 'H2',
          },
          {
            title: 'Code = 542077818247',
            disabled: true,
            backgroundColor: 'orange.500',
            label: 'A',
          },
        ],

        answer: '542077818247',
        keypad: {
          size: width => getSize(width),
          keys: [
            createDefaultKey('1', '', {backgroundColor: 'gray.400'}),
            createDefaultKey('2', 'ABC', {backgroundColor: 'gray.400'}),
            createDefaultKey('3', 'DEF', {backgroundColor: 'gray.400'}),
            createDefaultKey('4', 'GHI', {backgroundColor: 'gray.400'}),
            createDefaultKey('5', 'JKL', {backgroundColor: 'gray.400'}),
            createDefaultKey('6', 'MNO', {backgroundColor: 'gray.400'}),
            createDefaultKey('7', 'PQRS', {backgroundColor: 'gray.400'}),
            createDefaultKey('8', 'TUV', {backgroundColor: 'gray.400'}),
            createDefaultKey('9', 'WXYZ', {backgroundColor: 'gray.400'}),
            createDeleteKey('C', ''),
            createDefaultKey('0', '', {backgroundColor: 'gray.400'}),
            createSubmitKey('OK', ''),
          ],
        },
      },
    ],
  },

  //Game 2
  {
    layout: {
      backgroundColor: 'black',
      vent: require('../assets/images/games/SpaceshipRogue/layout/vent.png'),
      scenes: [
        {
          backgroundImage: require('../assets/images/games/SpaceshipRogue/layout/howToPlay.png'),
          button: {
            backgroundImage: require('../assets/images/games/SpaceshipRogue/layout/startButton.png'),
            navigateTo: 1,
          },
        },
        {
          backgroundImage: require('../assets/images/games/SpaceshipRogue/layout/story.png'),
          button: {
            backgroundImage: require('../assets/images/games/SpaceshipRogue/layout/scrollArrowRight.png'),
            startGame: true,
            navigateTo: 2,
          },
        },
        {
          backgroundImage: require('../assets/images/games/SpaceshipRogue/layout/door.png'),
          doorLeft: require('../assets/images/games/SpaceshipRogue/layout/doorLeft.png'),
          doorRight: require('../assets/images/games/SpaceshipRogue/layout/doorRight.png'),
          keypad: true,
          button: {
            backgroundImage: require('../assets/images/games/SpaceshipRogue/layout/scrollArrowLeft.png'),
            navigateTo: 3,
          },
        },
        {
          backgroundImage: require('../assets/images/games/SpaceshipRogue/layout/ventScreen.png'),
          vent: true,
          button: {
            backgroundImage: require('../assets/images/games/SpaceshipRogue/layout/scrollArrowRight.png'),
            navigateTo: 2,
          },
        },
      ],
    },
    levels: [
      {
        type: 'password',
        ventUncovered: require('../assets/images/games/SpaceshipRogue/level1/ventUncovered.png'),
        info: [
          {
            title: 'Level 1',
            disabled: false,
            backgroundColor: 'green.500',
            hideButton: true,
          },
          {
            title: `Use the manifest and lockers to find skyhopper's spacesuit`,
            disabled: false,
            backgroundColor: 'lightBlue.500',
            label: 'H1',
          },
          {
            title: `Use nationality for helmet, organisation colour for suit and manifest noted for boots`,
            disabled: true,
            backgroundColor: 'lightBlue.500',
            label: 'H2',
          },
          {
            title: '537',
            disabled: true,
            backgroundColor: 'orange.500',
            label: 'A',
          },
        ],
        answer: '537',
        keypad: {
          size: width => getSize(width),
          keys: [
            createDefaultKey('1', '', {backgroundColor: 'gray.400'}),
            createDefaultKey('2', '', {backgroundColor: 'gray.400'}),
            createDefaultKey('3', '', {backgroundColor: 'gray.400'}),
            createDefaultKey('4', '', {backgroundColor: 'gray.400'}),
            createDefaultKey('5', '', {backgroundColor: 'gray.400'}),
            createDefaultKey('6', '', {backgroundColor: 'gray.400'}),
            createDefaultKey('7', '', {backgroundColor: 'gray.400'}),
            createDefaultKey('8', '', {backgroundColor: 'gray.400'}),
            createDefaultKey('9', '', {backgroundColor: 'gray.400'}),
            createDeleteKey('CLEAR', '', {
              borderColor: 'red.500',
              backgroundColor: 'black',
              color: 'red.500',
              fontSize: '3xl',
            }),
            createDefaultKey('0', '', {backgroundColor: 'gray.400'}),
            createSubmitKey('Enter', '', {
              borderColor: 'green.500',
              backgroundColor: 'black',
              color: 'green.500',
              fontSize: '3xl',
            }),
          ],
        },
      },
      {
        type: 'password',
        ventUncovered: require('../assets/images/games/SpaceshipRogue/level2/ventUncovered.png'),
        info: [
          {
            title: 'Level 2',
            disabled: false,
            backgroundColor: 'green.500',
            hideButton: true,
          },
          {
            title: 'Read the captains log',
            disabled: false,
            backgroundColor: 'lightBlue.500',
            label: 'H1',
          },
          {
            title:
              "The ending of each sentence is important and don't forget to read up",
            disabled: true,
            backgroundColor: 'lightBlue.500',
            label: 'H2',
          },
          {
            title: 'nero',
            disabled: true,
            backgroundColor: 'orange.500',
            label: 'A',
          },
        ],
        answer: 'nero',
        keypad: {
          size: width => getSize(width),
          keys: [
            createDefaultKey('r', '', {
              backgroundImage: require('../assets/images/games/SpaceshipRogue/level2/keypad/r.png'),
            }),
            createDefaultKey('a', '', {
              backgroundImage: require('../assets/images/games/SpaceshipRogue/level2/keypad/a.png'),
            }),
            createDefaultKey('n', '', {
              backgroundImage: require('../assets/images/games/SpaceshipRogue/level2/keypad/n.png'),
            }),
            createDefaultKey('s', '', {
              backgroundImage: require('../assets/images/games/SpaceshipRogue/level2/keypad/s.png'),
            }),
            createDefaultKey('o', '', {
              backgroundImage: require('../assets/images/games/SpaceshipRogue/level2/keypad/o.png'),
            }),
            createDefaultKey('m', '', {
              backgroundImage: require('../assets/images/games/SpaceshipRogue/level2/keypad/m.png'),
            }),
            createDefaultKey('f', '', {
              backgroundImage: require('../assets/images/games/SpaceshipRogue/level2/keypad/f.png'),
            }),
            createDefaultKey('i', '', {
              backgroundImage: require('../assets/images/games/SpaceshipRogue/level2/keypad/i.png'),
            }),
            createDefaultKey('l', '', {
              backgroundImage: require('../assets/images/games/SpaceshipRogue/level2/keypad/l.png'),
            }),
            createDeleteKey('CLEAR', '', {
              borderColor: 'red.500',
              backgroundColor: 'black',
              color: 'red.500',
              fontSize: '3xl',
            }),
            createDefaultKey('e', '', {
              backgroundImage: require('../assets/images/games/SpaceshipRogue/level2/keypad/e.png'),
            }),
            createSubmitKey('Enter', '', {
              borderColor: 'green.500',
              backgroundColor: 'black',
              color: 'green.500',
              fontSize: '3xl',
            }),
          ],
        },
      },
      {
        type: 'password',
        ventUncovered: require('../assets/images/games/SpaceshipRogue/level3/ventUncovered.png'),
        info: [
          {
            title: 'Level 3',
            disabled: false,
            backgroundColor: 'green.500',
            hideButton: true,
          },
          {
            title: `Use the map, room names and lester's route`,
            disabled: false,
            backgroundColor: 'lightBlue.500',
            label: 'H1',
          },
          {
            title: `Follow the route from the bridge for s directions`,
            disabled: true,
            backgroundColor: 'lightBlue.500',
            label: 'H2',
          },
          {
            title: 'S, W, S, E, S',
            disabled: true,
            backgroundColor: 'orange.500',
            label: 'A',
          },
        ],
        answer: 'SWSES',
        keypad: {
          size: width => getSize(width),
          keys: [
            createDefaultKey('', '', {
              backgroundColor: 'black',
            }),
            createDefaultKey('N', '', {
              backgroundImage: require('../assets/images/games/SpaceshipRogue/level3/keypad/arrowUp.png'),
            }),
            createDefaultKey('', '', {
              backgroundColor: 'black',
            }),
            createDefaultKey('W', '', {
              backgroundImage: require('../assets/images/games/SpaceshipRogue/level3/keypad/arrowLeft.png'),
            }),
            createDefaultKey('', '', {
              backgroundColor: 'black',
            }),
            createDefaultKey('E', '', {
              backgroundImage: require('../assets/images/games/SpaceshipRogue/level3/keypad/arrowRight.png'),
            }),
            createDefaultKey('', '', {
              backgroundColor: 'black',
            }),
            createDefaultKey('S', '', {
              backgroundImage: require('../assets/images/games/SpaceshipRogue/level3/keypad/arrowDown.png'),
            }),
            createDefaultKey('', '', {
              backgroundColor: 'black',
            }),
            createDeleteKey('CLEAR', '', {
              borderColor: 'red.500',
              backgroundColor: 'black',
              color: 'red.500',
              fontSize: '3xl',
            }),
            createDefaultKey('', '', {
              backgroundColor: 'black',
            }),
            createSubmitKey('Enter', '', {
              borderColor: 'green.500',
              backgroundColor: 'black',
              color: 'green.500',
              fontSize: '3xl',
            }),
          ],
        },
      },
      {
        type: 'password',
        ventUncovered: require('../assets/images/games/SpaceshipRogue/level4/ventUncovered.png'),
        info: [
          {
            title: 'Level 4',
            disabled: false,
            backgroundColor: 'green.500',
            hideButton: true,
          },
          {
            title: `Convert the chemical symbols to find a value for each canister`,
            disabled: false,
            backgroundColor: 'lightBlue.500',
            label: 'H1',
          },
          {
            title: `Add each canister value together and find the value colour on rimmer scale`,
            disabled: true,
            backgroundColor: 'lightBlue.500',
            label: 'H2',
          },
          {
            title: 'Blue, White, Green, Yellow, Orange, Red',
            disabled: true,
            backgroundColor: 'orange.500',
            label: 'A',
          },
        ],
        answer: '283957', //'Blue, White, Green, Yellow, Orange, Red',
        keypad: {
          size: width => getSize(width),
          keys: [
            createDefaultKey('1', '', {
              backgroundImage: require('../assets/images/games/SpaceshipRogue/level4/keypad/black.png'),
            }),
            createDefaultKey('2', '', {
              backgroundImage: require('../assets/images/games/SpaceshipRogue/level4/keypad/blue.png'),
            }),
            createDefaultKey('3', '', {
              backgroundImage: require('../assets/images/games/SpaceshipRogue/level4/keypad/green.png'),
            }),
            createDefaultKey('4', '', {
              backgroundImage: require('../assets/images/games/SpaceshipRogue/level4/keypad/grey.png'),
            }),
            createDefaultKey('5', '', {
              backgroundImage: require('../assets/images/games/SpaceshipRogue/level4/keypad/orange.png'),
            }),
            createDefaultKey('6', '', {
              backgroundImage: require('../assets/images/games/SpaceshipRogue/level4/keypad/purple.png'),
            }),
            createDefaultKey('7', '', {
              backgroundImage: require('../assets/images/games/SpaceshipRogue/level4/keypad/red.png'),
            }),
            createDefaultKey('8', '', {
              backgroundImage: require('../assets/images/games/SpaceshipRogue/level4/keypad/white.png'),
            }),
            createDefaultKey('9', '', {
              backgroundImage: require('../assets/images/games/SpaceshipRogue/level4/keypad/yellow.png'),
            }),

            createDeleteKey('CLEAR', '', {
              borderColor: 'red.500',
              backgroundColor: 'black',
              color: 'red.500',
              fontSize: '3xl',
            }),
            createDefaultKey('', '', {
              backgroundColor: 'black',
            }),
            createSubmitKey('Enter', '', {
              borderColor: 'green.500',
              backgroundColor: 'black',
              color: 'green.500',
              fontSize: '3xl',
            }),
          ],
        },
      },
      {
        type: 'password',
        ventUncovered: require('../assets/images/games/SpaceshipRogue/level5/ventUncovered.png'),
        info: [
          {
            title: 'Level 5',
            disabled: false,
            backgroundColor: 'green.500',
            hideButton: true,
          },
          {
            title: `The lights go out when hit in the correct order`,
            disabled: false,
            backgroundColor: 'lightBlue.500',
            label: 'H1',
          },
          {
            title: `Start with one in the middle`,
            disabled: true,
            backgroundColor: 'lightBlue.500',
            label: 'H2',
          },
          {
            title:
              'Bottom middle, top left, bottom left, top right, top middle, bottom right',
            disabled: true,
            backgroundColor: 'orange.500',
            label: 'A',
          },
        ],
        answer: '514326',
        keypad: {
          size: width => getSize(width),
          keys: [
            createDefaultKey('', ''),
            createDefaultKey('', ''),
            createDefaultKey('', ''),

            createDefaultKey('1', '', {
              backgroundImage: require('../assets/images/games/SpaceshipRogue/level5/keypad/lightOn.png'),
              onPress: {
                backgroundImage: require('../assets/images/games/SpaceshipRogue/level5/keypad/lightOff.png'),
              },
            }),
            createDefaultKey('2', '', {
              backgroundImage: require('../assets/images/games/SpaceshipRogue/level5/keypad/lightOn.png'),
              onPress: {
                backgroundImage: require('../assets/images/games/SpaceshipRogue/level5/keypad/lightOff.png'),
              },
            }),
            createDefaultKey('3', '', {
              backgroundImage: require('../assets/images/games/SpaceshipRogue/level5/keypad/lightOn.png'),
              onPress: {
                backgroundImage: require('../assets/images/games/SpaceshipRogue/level5/keypad/lightOff.png'),
              },
            }),
            createDefaultKey('4', '', {
              backgroundImage: require('../assets/images/games/SpaceshipRogue/level5/keypad/lightOn.png'),
              onPress: {
                backgroundImage: require('../assets/images/games/SpaceshipRogue/level5/keypad/lightOff.png'),
              },
            }),
            createDefaultKey('5', '', {
              backgroundImage: require('../assets/images/games/SpaceshipRogue/level5/keypad/lightOn.png'),
              onPress: {
                backgroundImage: require('../assets/images/games/SpaceshipRogue/level5/keypad/lightOff.png'),
              },
            }),
            createDefaultKey('6', '', {
              backgroundImage: require('../assets/images/games/SpaceshipRogue/level5/keypad/lightOn.png'),
              onPress: {
                backgroundImage: require('../assets/images/games/SpaceshipRogue/level5/keypad/lightOff.png'),
              },
            }),

            createDeleteKey('CLEAR', '', {
              borderColor: 'red.500',
              backgroundColor: 'black',
              color: 'red.500',
              fontSize: '3xl',
              clearAll: true,
            }),
            createDefaultKey('', '', {
              backgroundColor: 'black',
            }),
            createSubmitKey('Enter', '', {
              borderColor: 'green.500',
              backgroundColor: 'black',
              color: 'green.500',
              fontSize: '3xl',
            }),
          ],
        },
      },
      {
        type: 'password',
        ventUncovered: require('../assets/images/games/SpaceshipRogue/level6/ventUncovered.png'),
        info: [
          {
            title: 'Level 6',
            disabled: false,
            backgroundColor: 'green.500',
            hideButton: true,
          },
          {
            title: `Complete the computer screen grids`,
            disabled: false,
            backgroundColor: 'lightBlue.500',
            label: 'H1',
          },
          {
            title: `Shade in the blocks written on each row next to the grids to reveal the answer`,
            disabled: true,
            backgroundColor: 'lightBlue.500',
            label: 'H2',
          },
          {
            title: '280413',
            disabled: true,
            backgroundColor: 'orange.500',
            label: 'A',
          },
        ],
        answer: '280413',
        keypad: {
          size: width => getSize(width),
          keys: [
            createDefaultKey('1', '', {backgroundColor: 'gray.400'}),
            createDefaultKey('2', '', {backgroundColor: 'gray.400'}),
            createDefaultKey('3', '', {backgroundColor: 'gray.400'}),
            createDefaultKey('4', '', {backgroundColor: 'gray.400'}),
            createDefaultKey('5', '', {backgroundColor: 'gray.400'}),
            createDefaultKey('6', '', {backgroundColor: 'gray.400'}),
            createDefaultKey('7', '', {backgroundColor: 'gray.400'}),
            createDefaultKey('8', '', {backgroundColor: 'gray.400'}),
            createDefaultKey('9', '', {backgroundColor: 'gray.400'}),
            createDeleteKey('CLEAR', '', {
              borderColor: 'red.500',
              backgroundColor: 'black',
              color: 'red.500',
              fontSize: '3xl',
            }),
            createDefaultKey('0', '', {backgroundColor: 'gray.400'}),
            createSubmitKey('Enter', '', {
              borderColor: 'green.500',
              backgroundColor: 'black',
              color: 'green.500',
              fontSize: '3xl',
            }),
          ],
        },
      },
      {
        type: 'password',
        ventUncovered: require('../assets/images/games/SpaceshipRogue/level7/ventUncovered.png'),
        info: [
          {
            title: 'Level 7',
            disabled: false,
            backgroundColor: 'green.500',
            hideButton: true,
          },
          {
            title: 'Find the bright, workings segments of digital display',
            disabled: false,
            backgroundColor: 'lightBlue.500',
            label: 'H1',
          },
          {
            title:
              'Colour the bright segments in on the broken display from across the guide',
            disabled: true,
            backgroundColor: 'lightBlue.500',
            label: 'H2',
          },
          {
            title: 'kryten',
            disabled: true,
            backgroundColor: 'orange.500',
            label: 'A',
          },
        ],
        answer: 'kryten',
        keypad: {
          size: width => getSize(width),
          keys: [
            createDefaultKey('s', '', {
              backgroundImage: require('../assets/images/games/SpaceshipRogue/level7/keypad/s.png'),
            }),
            createDefaultKey('k', '', {
              backgroundImage: require('../assets/images/games/SpaceshipRogue/level7/keypad/k.png'),
            }),
            createDefaultKey('y', '', {
              backgroundImage: require('../assets/images/games/SpaceshipRogue/level7/keypad/y.png'),
            }),
            createDefaultKey('n', '', {
              backgroundImage: require('../assets/images/games/SpaceshipRogue/level7/keypad/n.png'),
            }),
            createDefaultKey('e', '', {
              backgroundImage: require('../assets/images/games/SpaceshipRogue/level7/keypad/e.png'),
            }),
            createDefaultKey('t', '', {
              backgroundImage: require('../assets/images/games/SpaceshipRogue/level7/keypad/t.png'),
            }),
            createDefaultKey('f', '', {
              backgroundImage: require('../assets/images/games/SpaceshipRogue/level7/keypad/f.png'),
            }),
            createDefaultKey('o', '', {
              backgroundImage: require('../assets/images/games/SpaceshipRogue/level7/keypad/o.png'),
            }),
            createDefaultKey('r', '', {
              backgroundImage: require('../assets/images/games/SpaceshipRogue/level7/keypad/r.png'),
            }),
            createDeleteKey('CLEAR', '', {
              borderColor: 'red.500',
              backgroundColor: 'black',
              color: 'red.500',
              fontSize: '3xl',
            }),
            createDefaultKey('m', '', {
              backgroundImage: require('../assets/images/games/SpaceshipRogue/level7/keypad/m.png'),
            }),
            createSubmitKey('Enter', '', {
              borderColor: 'green.500',
              backgroundColor: 'black',
              color: 'green.500',
              fontSize: '3xl',
            }),
          ],
        },
      },
      {
        type: 'password',
        ventUncovered: require('../assets/images/games/SpaceshipRogue/level8/ventUncovered.png'),
        info: [
          {
            title: 'Level 8',
            disabled: false,
            backgroundColor: 'green.500',
            hideButton: true,
          },
          {
            title: `Match the starting terminal to the circuit board`,
            disabled: false,
            backgroundColor: 'lightBlue.500',
            label: 'H1',
          },
          {
            title: `Follow the circuit from the terminal pointed to and use the directions`,
            disabled: true,
            backgroundColor: 'lightBlue.500',
            label: 'H2',
          },
          {
            title: 'W, NW, N, E, N, NE, N',
            disabled: true,
            backgroundColor: 'orange.500',
            label: 'A',
          },
        ],
        answer: '4126232',
        keypad: {
          size: width => getSize(width),
          keys: [
            createDefaultKey('1', '', {
              backgroundImage: require('../assets/images/games/SpaceshipRogue/level8/keypad/arrowUp.png'),
            }),
            createDefaultKey('2', '', {
              backgroundImage: require('../assets/images/games/SpaceshipRogue/level8/keypad/arrowUp.png'),
            }),
            createDefaultKey('3', '', {
              backgroundImage: require('../assets/images/games/SpaceshipRogue/level8/keypad/arrowUp.png'),
            }),
            createDefaultKey('4', '', {
              backgroundImage: require('../assets/images/games/SpaceshipRogue/level8/keypad/arrowLeft.png'),
            }),
            createDefaultKey('', '', {
              backgroundColor: 'black',
            }),
            createDefaultKey('6', '', {
              backgroundImage: require('../assets/images/games/SpaceshipRogue/level8/keypad/arrowRight.png'),
            }),
            createDefaultKey('', '', {
              backgroundImage: require('../assets/images/games/SpaceshipRogue/level8/keypad/arrowUp.png'),
            }),
            createDefaultKey('8', '', {
              backgroundImage: require('../assets/images/games/SpaceshipRogue/level8/keypad/arrowDown.png'),
            }),
            createDefaultKey('', '', {
              backgroundImage: require('../assets/images/games/SpaceshipRogue/level8/keypad/arrowUp.png'),
            }),
            createDeleteKey('CLEAR', '', {
              borderColor: 'red.500',
              backgroundColor: 'black',
              color: 'red.500',
              fontSize: '3xl',
            }),
            createDefaultKey('11', '', {
              backgroundColor: 'black',
            }),
            createSubmitKey('Enter', '', {
              borderColor: 'green.500',
              backgroundColor: 'black',
              color: 'green.500',
              fontSize: '3xl',
            }),
          ],
        },
      },
      {
        type: 'password',
        ventUncovered: require('../assets/images/games/SpaceshipRogue/level9/ventUncovered.png'),
        info: [
          {
            title: 'Level 9',
            disabled: false,
            backgroundColor: 'green.500',
            hideButton: true,
          },
          {
            title: `Use the star map`,
            disabled: false,
            backgroundColor: 'lightBlue.500',
            label: 'H1',
          },
          {
            title: `Match the star charts to the coordinates on the map`,
            disabled: true,
            backgroundColor: 'lightBlue.500',
            label: 'H2',
          },
          {
            title: 'Aquila, Libra, Pisces, Virgo, Taurus, Leo, Gemini, Scorpio',
            disabled: true,
            backgroundColor: 'orange.500',
            label: 'A',
          },
        ],
        answer: 'aegjidch',
        keypad: {
          size: width => getSize(width),
          keys: [
            createDefaultKey('a', '', {
              backgroundImage: require('../assets/images/games/SpaceshipRogue/level9/keypad/aquila.png'),
            }),
            createDefaultKey('b', '', {
              backgroundImage: require('../assets/images/games/SpaceshipRogue/level9/keypad/aries.png'),
            }),
            createDefaultKey('c', '', {
              backgroundImage: require('../assets/images/games/SpaceshipRogue/level9/keypad/gemini.png'),
            }),
            createDefaultKey('d', '', {
              backgroundImage: require('../assets/images/games/SpaceshipRogue/level9/keypad/leo.png'),
            }),
            createDefaultKey('e', '', {
              backgroundImage: require('../assets/images/games/SpaceshipRogue/level9/keypad/libra.png'),
            }),
            createDefaultKey('f', '', {
              backgroundImage: require('../assets/images/games/SpaceshipRogue/level9/keypad/persius.png'),
            }),
            createDefaultKey('g', '', {
              backgroundImage: require('../assets/images/games/SpaceshipRogue/level9/keypad/pisces.png'),
            }),
            createDefaultKey('h', '', {
              backgroundImage: require('../assets/images/games/SpaceshipRogue/level9/keypad/scorpio.png'),
            }),
            createDefaultKey('i', '', {
              backgroundImage: require('../assets/images/games/SpaceshipRogue/level9/keypad/taurus.png'),
            }),
            createDeleteKey('CLEAR', '', {
              borderColor: 'red.500',
              backgroundColor: 'black',
              color: 'red.500',
              fontSize: '3xl',
            }),
            createDefaultKey('j', '', {
              backgroundImage: require('../assets/images/games/SpaceshipRogue/level9/keypad/virgo.png'),
            }),
            createSubmitKey('Enter', '', {
              borderColor: 'green.500',
              backgroundColor: 'black',
              color: 'green.500',
              fontSize: '3xl',
            }),
          ],
        },
      },
      {
        type: 'password',
        info: [
          {
            title:
              'I have lakes with no water, mountains with no stone, and cities with no buildings. What am i?',
            disabled: false,
            backgroundColor: 'green.500',
            label: 'Q',
          },
          {
            title: `It also has a key`,
            disabled: false,
            backgroundColor: 'lightBlue.500',
            label: 'H1',
          },
          {
            title: `The lakes, mountains and cities are images`,
            disabled: true,
            backgroundColor: 'lightBlue.500',
            label: 'H2',
          },
          {
            title: 'map',
            disabled: true,
            backgroundColor: 'orange.500',
            label: 'A',
          },
        ],
        answer: 'map',
        keypad: {
          size: width => getSize(width),
          keys: [
            createDefaultKey('p', '', {
              backgroundImage: require('../assets/images/games/SpaceshipRogue/level10/keypad/p.png'),
            }),
            createDefaultKey('t', '', {
              backgroundImage: require('../assets/images/games/SpaceshipRogue/level10/keypad/t.png'),
            }),
            createDefaultKey('a', '', {
              backgroundImage: require('../assets/images/games/SpaceshipRogue/level10/keypad/a.png'),
            }),
            createDefaultKey('h', '', {
              backgroundImage: require('../assets/images/games/SpaceshipRogue/level10/keypad/h.png'),
            }),
            createDefaultKey('n', '', {
              backgroundImage: require('../assets/images/games/SpaceshipRogue/level10/keypad/n.png'),
            }),
            createDefaultKey('o', '', {
              backgroundImage: require('../assets/images/games/SpaceshipRogue/level10/keypad/o.png'),
            }),
            createDefaultKey('r', '', {
              backgroundImage: require('../assets/images/games/SpaceshipRogue/level10/keypad/r.png'),
            }),
            createDefaultKey('i', '', {
              backgroundImage: require('../assets/images/games/SpaceshipRogue/level10/keypad/i.png'),
            }),
            createDefaultKey('e', '', {
              backgroundImage: require('../assets/images/games/SpaceshipRogue/level10/keypad/e.png'),
            }),
            createDeleteKey('CLEAR', '', {
              borderColor: 'red.500',
              backgroundColor: 'black',
              color: 'red.500',
              fontSize: '3xl',
            }),
            createDefaultKey('m', '', {
              backgroundImage: require('../assets/images/games/SpaceshipRogue/level10/keypad/m.png'),
            }),
            createSubmitKey('Enter', '', {
              borderColor: 'green.500',
              backgroundColor: 'black',
              color: 'green.500',
              fontSize: '3xl',
            }),
          ],
        },
      },
      {
        type: 'password',
        info: [
          {
            title: `What has many keys but can't even open a single door?`,
            disabled: false,
            backgroundColor: 'green.500',
            label: 'Q',
          },
          {
            title: `Some keys are white and some are black`,
            disabled: false,
            backgroundColor: 'lightBlue.500',
            label: 'H1',
          },
          {
            title: `It can't open doors but Dr Speck can play you a great tune`,
            disabled: true,
            backgroundColor: 'lightBlue.500',
            label: 'H2',
          },
          {
            title: 'piano',
            disabled: true,
            backgroundColor: 'orange.500',
            label: 'A',
          },
        ],
        answer: 'piano',
        keypad: {
          size: width => getSize(width),
          keys: [
            createDefaultKey('p', '', {
              backgroundImage: require('../assets/images/games/SpaceshipRogue/level10/keypad/p.png'),
            }),
            createDefaultKey('t', '', {
              backgroundImage: require('../assets/images/games/SpaceshipRogue/level10/keypad/t.png'),
            }),
            createDefaultKey('a', '', {
              backgroundImage: require('../assets/images/games/SpaceshipRogue/level10/keypad/a.png'),
            }),
            createDefaultKey('h', '', {
              backgroundImage: require('../assets/images/games/SpaceshipRogue/level10/keypad/h.png'),
            }),
            createDefaultKey('n', '', {
              backgroundImage: require('../assets/images/games/SpaceshipRogue/level10/keypad/n.png'),
            }),
            createDefaultKey('o', '', {
              backgroundImage: require('../assets/images/games/SpaceshipRogue/level10/keypad/o.png'),
            }),
            createDefaultKey('r', '', {
              backgroundImage: require('../assets/images/games/SpaceshipRogue/level10/keypad/r.png'),
            }),
            createDefaultKey('i', '', {
              backgroundImage: require('../assets/images/games/SpaceshipRogue/level10/keypad/i.png'),
            }),
            createDefaultKey('e', '', {
              backgroundImage: require('../assets/images/games/SpaceshipRogue/level10/keypad/e.png'),
            }),
            createDeleteKey('CLEAR', '', {
              borderColor: 'red.500',
              backgroundColor: 'black',
              color: 'red.500',
              fontSize: '3xl',
            }),
            createDefaultKey('m', '', {
              backgroundImage: require('../assets/images/games/SpaceshipRogue/level10/keypad/m.png'),
            }),
            createSubmitKey('Enter', '', {
              borderColor: 'green.500',
              backgroundColor: 'black',
              color: 'green.500',
              fontSize: '3xl',
            }),
          ],
        },
      },
      {
        type: 'password',
        info: [
          {
            title:
              'The first two letters signify a male, The first three letters signify a female, The first four letters signify a great, while the entire world signifies a great woman.',
            disabled: false,
            backgroundColor: 'green.500',
            label: 'Q',
          },
          {
            title: `He could help you with the start`,
            disabled: false,
            backgroundColor: 'lightBlue.500',
            label: 'H1',
          },
          {
            title: `He and her start this off. Ripley is a real one.`,
            disabled: true,
            backgroundColor: 'lightBlue.500',
            label: 'H2',
          },
          {
            title: 'heroine',
            disabled: true,
            backgroundColor: 'orange.500',
            label: 'A',
          },
        ],
        answer: 'heroine',
        keypad: {
          size: width => getSize(width),
          keys: [
            createDefaultKey('p', '', {
              backgroundImage: require('../assets/images/games/SpaceshipRogue/level10/keypad/p.png'),
            }),
            createDefaultKey('t', '', {
              backgroundImage: require('../assets/images/games/SpaceshipRogue/level10/keypad/t.png'),
            }),
            createDefaultKey('a', '', {
              backgroundImage: require('../assets/images/games/SpaceshipRogue/level10/keypad/a.png'),
            }),
            createDefaultKey('h', '', {
              backgroundImage: require('../assets/images/games/SpaceshipRogue/level10/keypad/h.png'),
            }),
            createDefaultKey('n', '', {
              backgroundImage: require('../assets/images/games/SpaceshipRogue/level10/keypad/n.png'),
            }),
            createDefaultKey('o', '', {
              backgroundImage: require('../assets/images/games/SpaceshipRogue/level10/keypad/o.png'),
            }),
            createDefaultKey('r', '', {
              backgroundImage: require('../assets/images/games/SpaceshipRogue/level10/keypad/r.png'),
            }),
            createDefaultKey('i', '', {
              backgroundImage: require('../assets/images/games/SpaceshipRogue/level10/keypad/i.png'),
            }),
            createDefaultKey('e', '', {
              backgroundImage: require('../assets/images/games/SpaceshipRogue/level10/keypad/e.png'),
            }),
            createDeleteKey('CLEAR', '', {
              borderColor: 'red.500',
              backgroundColor: 'black',
              color: 'red.500',
              fontSize: '3xl',
            }),
            createDefaultKey('m', '', {
              backgroundImage: require('../assets/images/games/SpaceshipRogue/level10/keypad/m.png'),
            }),
            createSubmitKey('Enter', '', {
              borderColor: 'green.500',
              backgroundColor: 'black',
              color: 'green.500',
              fontSize: '3xl',
            }),
          ],
        },
      },
    ],
  },
];
