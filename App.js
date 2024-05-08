import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {NavigationContainer} from "@react-navigation/native";
import OnboardingScreen from "./src/Screens/Onboarding Screen/Onboarding.screen";


function App() {
    const Stack=createNativeStackNavigator ()

    const MainNavigator= () => {
       return (
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen
              name= "Onboarding"
              component={OnboardingScreen}
             />
        </Stack.Navigator>
       )
    

    }
    return (
        <NavigationContainer>
            <OnboardingScreen/>
        </NavigationContainer>
    )
}

export default App;