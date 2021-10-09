import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { NCMBObject } from './ncmb';

export default function InputTodo(props) {
  // 入力テキスト用
  const [text, setText] = React.useState('');

  // テキストを変更した際のイベント
  const change = (text) => {
    setText(text);
  };

  // エンターキーを押した際にデータストアに保存する
  const keyPress = async (e) => {
    if(e.which === 13){
      try {
        // タスクを新規保存します
        const obj = new NCMBObject('Todo');
        await obj
          .set('body', text)
          .set('checked', false)
          .save();
        props.added(obj);
        setText('');
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
        style={styles.textInput}
        value={text}
        onChangeText={change}
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
