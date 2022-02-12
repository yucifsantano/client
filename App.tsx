//Referencia de navegación:
//https://www.youtube.com/watch?v=lM0g5aR_aDo

import React, { useEffect } from 'react';
import { useLogging } from './src/hooks/useLogging';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import routes from './src/config/routes';

const Stack = createStackNavigator();

export default function App() {
  const [logging] = useLogging('Application');

  useEffect(() => {
    logging.info('Loading application.');
  }, [logging]);

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
