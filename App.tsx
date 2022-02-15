//Referencia de navegación:
//https://www.youtube.com/watch?v=lM0g5aR_aDo
//Referencia de fonts:
//https://www.youtube.com/watch?v=XyONtdhwICE

import React, { useEffect, useState } from 'react';
import { useLogging } from './src/hooks/useLogging';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import routes from './src/config/routes';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';

const fetchFont = () => {
  return Font.loadAsync({
    "PoiretOne": require("./assets/fonts/PoiretOne-Regular.ttf"),
    "Shalimar": require("./assets/fonts/Shalimar-Regular.ttf")
  })
}

export interface IlabelText {
  textlabel: string | any;
}

const Stack = createStackNavigator();

export default function App() {
  const [fontLoaded, setfontLoded] = useState(false);
  const [logging] = useLogging('Application');

  useEffect(() => {
    logging.info('Loading application.');
  }, [logging]);

  if (!fontLoaded) {
    return <AppLoading 
      startAsync={fetchFont}
      onError={() => console.log("ERROR")}
      onFinish={() => {
        setfontLoded(true);
      }}
    />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='{Login}'>
        {routes.map((r,i) => (
          <Stack.Screen key={i} name={r.name} options={{headerShown: false}}>
            {(props) => <r.component nameProp={r.name} {...props} />}
          </Stack.Screen>
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
