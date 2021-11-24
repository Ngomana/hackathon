import React, {FC} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Tabs from './tabs';
import {Text} from 'react-native';
import Button from '../components/button';
import IssueScreen from '../screen/stack/issue';

const Stack = createNativeStackNavigator();

const Stacks: FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitle: '',
      }}>
      <Stack.Screen
        component={Tabs}
        name={'home'}
        options={({navigation}) => {
          return {
            headerRight: () => {
              return (
                <Button
                  title={'+ Issue'}
                  onPress={() => {
                    navigation.navigate('issueScreen');
                  }}
                />
              );
            },
          };
        }}
      />
      <Stack.Screen component={IssueScreen} name={'issueScreen'} />
    </Stack.Navigator>
  );
};

export default Stacks;
