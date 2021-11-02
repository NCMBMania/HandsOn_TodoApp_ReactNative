import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';
import { List, Button } from 'react-native-paper';
import InputTodo from './Input';
import { NCMBQuery } from './ncmb';
import TodoItem from './TodoItem';
import Snackbar from './Snackbar';

export default function Home({ navigation }) {
  // Todoの配列が入る変数  
  const [ary, setArray] = useState([]);
  const [show, setShow] = useState(false);
  const [message, setMessage] = useState('');

  // タスクを追加した後に呼ばれるアクション
  const added = (obj) => {
    ary.push(obj);      // 配列にタスクを追加
    setArray([...ary]); // 配列を更新
    setMessage('タスクを追加しました');
    setShow(true);
  };
  
  // タスクを更新した後に呼ばれるアクション
  const updated = ({ item, index }) => {
    ary[index] = item;  // 配列の更新
    setArray([...ary]); // 配列を更新
  };

  // タスクを取得する関数
  const fetchTodo = async () => {
  };

  // 最初に一度だけ実行する処理
  useEffect(() => {
    fetchTodo();
  }, []);

  // 削除ボタンの有効、無効を切り替えつつ表示する
  const ShowDelete = () => {
    return (
      <Button
        icon="delete"
        mode="contained"
        onPress={deleteTask}
        // 1件でも完了したタスクがあれば、削除を表示
        disabled={!(ary.filter(item => item.get('checked')).length > 0)}
      >
        <Text>削除</Text>
      </Button>
    )
  };

  // 完了しているタスクを削除するイベント
  const deleteTask = async () => {
    const promises = ary.map(item => {
    });
    await Promise.all(promises);
    // 改めてデータを取得し直す
    fetchTodo();
  };
  
  // 描画
  return (
    <View style={styles.container}>
      <List.Section>
        <List.Subheader>
          <View style={{ flexDirection: 'row'}}>
            <Text>既存のタスク</Text>
            <View
              style={{flexDirection: 'row', justifyContent: 'flex-end' }}
            >
              <ShowDelete />
            </View>
          </View>
        </List.Subheader>
        <FlatList
          data={ary}
          renderItem={({index, item }) => <TodoItem item={item} index={index} navigation={navigation} updated={updated} />}
          keyExtractor={item => item.get('objectId')}
        />
      </List.Section>      
      <InputTodo added={added} />
      <Snackbar message={message} show={show} />
    </View>
  );
}

// スタイル設定
const styles = StyleSheet.create({
  container: {
    padding: 5,
  },
});
