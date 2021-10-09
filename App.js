import * as React from 'react';
import { SafeAreaView, Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

// 画面のメインの構成要素
import Home from './components/Home';
import Edit from './components/Edit';

import { Card } from 'react-native-paper';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// 一覧画面用
const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        タスクを追加、編集してください
      </Text>
      <Card>
        <Home navigation={navigation} />
      </Card>
    </View>
  );
}

// 編集画面用
const EditScreen = (props) => {
  return (<View style={styles.container}>
      <Text style={styles.paragraph}>
        タスクを編集してください
      </Text>
      <Card>
        <Edit {...props} />
      </Card>
    </View>
  )
}

// 画面遷移用
const Stack = createNativeStackNavigator();

export default function App() {  
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'タスク一覧' }} />
          <Stack.Screen name="Detail" component={EditScreen} options={{ title: 'タスクの編集' }} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>    
  );
}

// スタイル設定
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
