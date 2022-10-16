import * as React from 'react';

const GameContext = React.createContext({});

function GameProvider({children}) {
  const [configLoading, setConfigLoading] = React.useState(true);
  const [isStarted, setStarted] = React.useState(false);

  const [level, setLevel] = React.useState(0);
  const [config, setConfig] = React.useState({});
  const [layout, setLayout] = React.useState({});
  const [startScene, setStartScene] = React.useState(0);
  const [levelScene, setLevelScene] = React.useState(0);
  const [toggleKeypad, setToggleKeypad] = React.useState(false);
  const [vent, setVent] = React.useState();

  //GameInfoButtons
  const [infoText, setInfoText] = React.useState('');
  const [hintsPressed, setHintsPressed] = React.useState([]);
  const [disabledButtons, setDisabledButtons] = React.useState([]);
  const [hintsUsed, setHintsUsed] = React.useState(0);

  //GameOutputBox
  const [penalties, setPenalties] = React.useState(0);
  const [timePlayed, setTimePlayed] = React.useState(0);

  //GameKeypad
  const [keypadText, setKeypadText] = React.useState('');
  const [keys, setKeys] = React.useState([]);

  const readableTime = time => {
    let sec = parseInt(time, 10); // convert value to number if it's string
    let hours = Math.floor(sec / 3600); // get hours
    let minutes = Math.floor((sec - hours * 3600) / 60); // get minutes
    let seconds = sec - hours * 3600 - minutes * 60; //  get seconds

    // add 0 if value < 10; Example: 2 => 02
    if (hours < 10) {
      hours = '0' + hours;
    }
    if (minutes < 10) {
      minutes = '0' + minutes;
    }
    if (seconds < 10) {
      seconds = '0' + seconds;
    }

    return hours + ':' + minutes + ':' + seconds;
  };

  const resetKeys = () => {
    setKeys(
      config.keypad.keys.map(key => {
        return {
          title: key.title,
          backgroundImage: key.backgroundImage || false,
        };
      }),
    );
  };

  const resetHints = () => {
    setHintsPressed(Array(config.info.length).fill(false));
    setInfoText(config.info[0].title);
    setDisabledButtons(
      Object.keys(config.info).map(i => {
        return config.info[i].disabled;
      }),
    );
  };

  const values = {
    configLoading,
    setConfigLoading,
    isStarted,
    setStarted,
    level,
    setLevel,
    config,
    setConfig,
    layout,
    setLayout,
    startScene,
    setStartScene,
    levelScene,
    setLevelScene,
    toggleKeypad,
    setToggleKeypad,
    vent,
    setVent,

    infoText,
    setInfoText,

    hintsPressed,
    setHintsPressed,
    disabledButtons,
    setDisabledButtons,
    hintsUsed,
    setHintsUsed,

    penalties,
    setPenalties,
    timePlayed,
    setTimePlayed,

    keypadText,
    setKeypadText,
    keys,
    setKeys,

    readableTime,
    resetKeys,
    resetHints,
  };

  return <GameContext.Provider value={values}>{children}</GameContext.Provider>;
}

export {GameProvider, GameContext};
