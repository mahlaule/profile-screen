import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProfileScreen from './components/ProfileScreen'



    
    const Stack = createNativeStackNavigator();
    
    export default function App() {
      return (
        <NavigationContainer>
          
          <Stack.Navigator initialRouteName='ProfileScreen'>
            <Stack.Screen name='ProfileScreen' options={{title:'ProfileScreen'}}>
              {(props) => <ProfileScreen {...props} />}
            </Stack.Screen>
    
            <Stack.Screen name='Register' options={{title:'Register'}}>
              {(props) => <Register {...props} />}
            </Stack.Screen>
    
   
          </Stack.Navigator>
        </NavigationContainer>
      );
    }
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
    });
    
  



