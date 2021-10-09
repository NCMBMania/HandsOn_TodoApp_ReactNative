import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';
import { NCMBObject } from './ncmb';

export default function InputTodo({ route, navigation }) {
  const {index, item, updated} = route.params;
  const [text, setText] = React.useState(item.get('body'));
  const change = (text) => {
    setText(text);
  };

  const keyPress = async (e) => {
    if(e.which === 13){
      try {
        // タスクを新規保存します
        await item
          .set('body', text)
          .save();
        updated({index, item });
        navigation.goBack();
      } catch (e) {
        console.log(e);   
      }
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        label="タスク"
        mode="flat"
        dense="true"
        value={text}
        style={styles.textInput}
        onChangeText={(text) => setText(text)}
        onKeyPress={keyPress}
      />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  textInput: {
    flex: 1,
  }
});
